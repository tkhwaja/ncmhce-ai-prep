import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavLink, useLocation } from "react-router-dom";
import TceIcon, { TceIconName } from "@/components/icons/TceIcon";
import SidebarPomodoro from "./SidebarPomodoro";
import { useExamTrack } from "@/contexts/ExamTrackContext";
import { useUnreadMessages } from "@/hooks/useUnreadMessages";

const AppSidebar = () => {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const { config } = useExamTrack();
  const navItems = config.nav as { title: string; url: string; icon: TceIconName }[];
  const { total: unreadMessages } = useUnreadMessages();


  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="flex flex-col h-full">
        <div className="p-4">
          <NavLink to="/dashboard" className="flex items-start gap-2 text-lg font-bold text-foreground tracking-tight">
            <TceIcon name="logo-mark" size={collapsed ? 24 : 22} className="text-primary mt-0.5" />
            {!collapsed && (
              <span className="flex flex-col leading-tight">
                <span>The Exam<span className="text-primary"> Path</span></span>
                <span className="text-[10px] font-normal italic text-muted-foreground">Formerly TheCounselorExam.com</span>
              </span>
            )}
          </NavLink>
        </div>
        <SidebarGroup className="flex-1">
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                    <NavLink to={item.url} className="flex items-center gap-2">
                      <TceIcon name={item.icon} size={18} />
                      {!collapsed && <span className="flex-1">{item.title}</span>}
                      {item.url === "/community" && unreadMessages > 0 && (
                        <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-semibold text-primary-foreground">
                          {unreadMessages > 9 ? "9+" : unreadMessages}
                        </span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Pomodoro pinned at bottom */}
        <div className="mt-auto">
          <SidebarPomodoro />
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
