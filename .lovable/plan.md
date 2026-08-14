# Community: Study Partners + Private Messaging

Add a Study Partners directory and a real messaging system (1-on-1 and group chats) with in-app notifications, alongside the existing discussion board.

## What the user sees

**Community page gets three tabs**
1. **Discussions** — the existing board, unchanged.
2. **Study Partners** — opt-in member cards with tags and a "Message" button.
3. **Messages** — private 1-on-1 and group conversations, with an unread badge.

**Study Partner card**
- Display name, short blurb ("what I'm looking for", 240 chars)
- Tags: exam track (NCE / NCMHCE), target exam month, gender (optional, self-reported, includes "prefer not to say"), age range (18-24, 25-34, 35-44, 45+), timezone/state, study style (evenings, weekends, 1-on-1, small group), focus areas (diagnosis, ethics, treatment planning, etc.)
- Filter bar across the top for track, exam month, study style, focus area
- Only members who toggle "Looking for a study partner" appear. Everything is opt-in and editable from Profile or a setup card in the tab.

**Messaging**
- Message someone directly from their card — creates (or reopens) a 1-on-1 conversation.
- Group chats: name the group, add members picked from the directory, up to 12 people. Any member can invite; creator can rename and remove.
- Live message delivery (no refresh), typing-free simple layout, own vs other message styling, per-conversation read state.
- Users can still choose to share an email or handle inside a message; no contact details are exposed publicly.

**Notifications**
- Bell icon in the app header with an unread count, showing new messages and group invites; clicking opens the conversation.
- Unread badge on the Community nav item and the Messages tab.
- Real-time while the app is open. Email notifications for missed messages are out of scope for this pass (can be added later on top of the existing email queue).

**Safety**
- Block and report on every profile and conversation. Blocked users can't message you and drop out of your directory view.
- Reports land in a table the admin side can review.

## Technical notes

New tables (all with grants, RLS, and updated_at triggers):
- `study_partner_profiles` — one row per user: `is_listed`, `display_name`, `blurb`, `exam_track`, `target_exam_month`, `gender`, `age_range`, `timezone`, `study_styles[]`, `focus_areas[]`. Readable by authenticated users only when `is_listed = true`; writable only by the owner.
- `conversations` — `type` ('direct' | 'group'), `title`, `created_by`.
- `conversation_members` — `conversation_id`, `user_id`, `role`, `last_read_at`, `joined_at`. Unique on (conversation, user).
- `messages` — `conversation_id`, `sender_id`, `body`, `created_at`.
- `user_blocks` — `blocker_id`, `blocked_id`.
- `community_reports` — `reporter_id`, `reported_user_id`, `conversation_id`, `reason`.

RLS uses a `SECURITY DEFINER` helper `is_conversation_member(_conversation_id, _user_id)` to avoid recursive policy checks: members can read/insert messages only in their own conversations; direct-message creation is blocked when either side has a block in place.

Realtime: enable replica identity + publication for `messages` and `conversation_members`. Existing `realtime.messages` RLS policies already permit per-user private channels and `community-*` topics; conversation channels will be named to fit those patterns.

Unread counts come from comparing `messages.created_at` to the member's `last_read_at`, exposed through a small `unread_counts` view or an RPC so the header badge is one query.

Frontend:
- `src/pages/Community.tsx` becomes a tabbed shell; existing board moves into `src/components/community/DiscussionsTab.tsx` unchanged.
- New: `StudyPartnersTab.tsx`, `PartnerCard.tsx`, `PartnerFilters.tsx`, `PartnerProfileForm.tsx`, `MessagesTab.tsx`, `ConversationList.tsx`, `MessageThread.tsx`, `NewGroupDialog.tsx`, `BlockReportMenu.tsx`.
- Chat surface built from AI Elements primitives (`conversation`, `message`, `prompt-input`) so the transcript, bubbles, and composer match the platform's established look.
- Notification bell in `AppHeader.tsx` backed by a `useUnreadMessages` hook subscribed to the realtime channel.
- Track awareness: the directory defaults its filter to the user's `active_exam_track` but lets them browse both.
