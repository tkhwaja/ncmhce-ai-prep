import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, MessageSquare, Plus, Users, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["General Discussion", "Study Groups", "Exam Day Tips", "Question Help"];

interface Post {
  id: string;
  user_id: string;
  title: string;
  body: string;
  category: string;
  created_at: string;
  reply_count?: number;
  author_name?: string;
}

interface Reply {
  id: string;
  post_id: string;
  user_id: string;
  body: string;
  created_at: string;
  author_name?: string;
}

const Community = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [replyText, setReplyText] = useState("");
  const [newPostOpen, setNewPostOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [newCategory, setNewCategory] = useState(categories[0]);
  const [onlineCount, setOnlineCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const [profileCache, setProfileCache] = useState<Record<string, { full_name: string | null; bio: string | null; target_exam_date: string | null }>>({});

  // Fetch posts
  const fetchPosts = async () => {
    const { data: postsData } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (postsData) {
      // Get reply counts
      const postIds = postsData.map(p => p.id);
      const { data: repliesData } = await supabase
        .from("replies")
        .select("post_id");

      const replyCounts: Record<string, number> = {};
      repliesData?.forEach(r => {
        replyCounts[r.post_id] = (replyCounts[r.post_id] || 0) + 1;
      });

      // Get author profiles
      const userIds = [...new Set(postsData.map(p => p.user_id))];
      const { data: profiles } = await supabase
        .from("profiles")
        .select("id, full_name, bio, target_exam_date")
        .in("id", userIds);

      const profileMap: Record<string, any> = {};
      profiles?.forEach(p => { profileMap[p.id] = p; });
      setProfileCache(prev => ({ ...prev, ...profileMap }));

      setPosts(postsData.map(p => ({
        ...p,
        reply_count: replyCounts[p.id] || 0,
        author_name: profileMap[p.user_id]?.full_name || "Anonymous",
      })));
    }
    setLoading(false);
  };

  useEffect(() => { fetchPosts(); }, []);

  // Realtime presence
  useEffect(() => {
    if (!user) return;
    const channel = supabase.channel("community-presence", {
      config: { presence: { key: user.id } },
    });

    channel.on("presence", { event: "sync" }, () => {
      const state = channel.presenceState();
      setOnlineCount(Object.keys(state).length);
    });

    channel.subscribe(async (status) => {
      if (status === "SUBSCRIBED") {
        await channel.track({ user_id: user.id });
      }
    });

    return () => { supabase.removeChannel(channel); };
  }, [user]);

  // Realtime posts
  useEffect(() => {
    const channel = supabase
      .channel("community-posts")
      .on("postgres_changes", { event: "*", schema: "public", table: "posts" }, () => fetchPosts())
      .on("postgres_changes", { event: "*", schema: "public", table: "replies" }, () => {
        fetchPosts();
        if (selectedPost) fetchReplies(selectedPost.id);
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [selectedPost]);

  const fetchReplies = async (postId: string) => {
    const { data } = await supabase
      .from("replies")
      .select("*")
      .eq("post_id", postId)
      .order("created_at", { ascending: true });

    if (data) {
      const userIds = [...new Set(data.map(r => r.user_id))];
      const { data: profiles } = await supabase
        .from("profiles")
        .select("id, full_name, bio, target_exam_date")
        .in("id", userIds);

      const profileMap: Record<string, any> = {};
      profiles?.forEach(p => { profileMap[p.id] = p; });
      setProfileCache(prev => ({ ...prev, ...profileMap }));

      setReplies(data.map(r => ({
        ...r,
        author_name: profileMap[r.user_id]?.full_name || "Anonymous",
      })));
    }
  };

  const handleCreatePost = async () => {
    if (!user || !newTitle.trim() || !newBody.trim()) return;
    const { error } = await supabase.from("posts").insert({
      user_id: user.id,
      title: newTitle.trim(),
      body: newBody.trim(),
      category: newCategory,
    });
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setNewPostOpen(false);
      setNewTitle("");
      setNewBody("");
      toast({ title: "Post created!" });
    }
  };

  const handleReply = async () => {
    if (!user || !selectedPost || !replyText.trim()) return;
    const { error } = await supabase.from("replies").insert({
      post_id: selectedPost.id,
      user_id: user.id,
      body: replyText.trim(),
    });
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setReplyText("");
    }
  };

  const openPost = (post: Post) => {
    setSelectedPost(post);
    fetchReplies(post.id);
  };

  const UserPopover = ({ userId, name }: { userId: string; name: string }) => {
    const profile = profileCache[userId];
    return (
      <Popover>
        <PopoverTrigger asChild>
          <button className="text-sm font-medium text-primary hover:underline">{name}</button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <div className="space-y-2">
            <p className="font-semibold text-foreground">{profile?.full_name || "Anonymous"}</p>
            {profile?.bio && <p className="text-xs text-muted-foreground">{profile.bio}</p>}
            {profile?.target_exam_date && (
              <p className="text-xs text-muted-foreground">Exam: {new Date(profile.target_exam_date).toLocaleDateString()}</p>
            )}
          </div>
        </PopoverContent>
      </Popover>
    );
  };

  const filteredPosts = selectedCategory === "all" ? posts : posts.filter(p => p.category === selectedCategory);

  // Post detail view
  if (selectedPost) {
    return (
      <div className="p-6 max-w-4xl mx-auto space-y-4">
        <Button variant="ghost" onClick={() => { setSelectedPost(null); setReplies([]); }}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Posts
        </Button>
        <Card className="card-elevated">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">{selectedPost.category}</Badge>
              <span className="text-xs text-muted-foreground">{new Date(selectedPost.created_at).toLocaleDateString()}</span>
            </div>
            <h2 className="text-xl font-bold text-foreground mb-1">{selectedPost.title}</h2>
            <UserPopover userId={selectedPost.user_id} name={selectedPost.author_name || "Anonymous"} />
            <p className="text-sm text-muted-foreground mt-4 whitespace-pre-wrap">{selectedPost.body}</p>
          </CardContent>
        </Card>

        <h3 className="text-sm font-semibold text-foreground">Replies ({replies.length})</h3>

        {replies.length === 0 && (
          <p className="text-sm text-muted-foreground">No replies yet. Be the first to respond!</p>
        )}

        {replies.map((reply) => (
          <Card key={reply.id} className="card-elevated">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <UserPopover userId={reply.user_id} name={reply.author_name || "Anonymous"} />
                <span className="text-xs text-muted-foreground">{new Date(reply.created_at).toLocaleDateString()}</span>
              </div>
              <p className="text-sm text-muted-foreground whitespace-pre-wrap">{reply.body}</p>
            </CardContent>
          </Card>
        ))}

        <div className="flex gap-2">
          <Textarea
            placeholder="Write a reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            rows={2}
            className="flex-1"
          />
          <Button onClick={handleReply} disabled={!replyText.trim()} size="icon" className="self-end">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Community</h1>
          <p className="text-muted-foreground flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="text-sm">{onlineCount} user{onlineCount !== 1 ? "s" : ""} online</span>
          </p>
        </div>
        <Dialog open={newPostOpen} onOpenChange={setNewPostOpen}>
          <DialogTrigger asChild>
            <Button><Plus className="mr-2 h-4 w-4" /> New Post</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create a Post</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input placeholder="Post title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
              <Select value={newCategory} onValueChange={setNewCategory}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {categories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
              <Textarea placeholder="Write your post..." value={newBody} onChange={(e) => setNewBody(e.target.value)} rows={5} />
              <Button onClick={handleCreatePost} disabled={!newTitle.trim() || !newBody.trim()} className="w-full">Post</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Category filters */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setSelectedCategory("all")}
          className={cn(
            "px-3 py-1.5 rounded-full text-sm transition-colors",
            selectedCategory === "all" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
          )}
        >
          All
        </button>
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setSelectedCategory(c)}
            className={cn(
              "px-3 py-1.5 rounded-full text-sm transition-colors",
              selectedCategory === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Posts */}
      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3].map(i => (
            <Card key={i} className="card-elevated animate-pulse">
              <CardContent className="p-4 h-24" />
            </Card>
          ))}
        </div>
      ) : filteredPosts.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <MessageSquare className="h-12 w-12 mx-auto mb-3 opacity-50" />
          <p>No posts yet. Start the conversation!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="card-elevated cursor-pointer hover:border-primary/30 transition-all"
              onClick={() => openPost(post)}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                    <h3 className="font-semibold text-foreground truncate">{post.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">by {post.author_name}</p>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground ml-4">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-xs">{post.reply_count}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Community;
