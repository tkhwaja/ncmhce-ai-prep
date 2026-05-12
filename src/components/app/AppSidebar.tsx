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

const navItems: { title: string; url: string; icon: TceIconName }[] = [
  { title: "Dashboard", url: "/dashboard", icon: "dashboard" },
  { title: "Narratives", url: "/narratives", icon: "narrative" },
  { title: "Study Plan", url: "/study-plan", icon: "study-plan" },
  { title: "Learning Library", url: "/library", icon: "library" },
  { title: "Flashcards", url: "/flashcards", icon: "flashcards" },
  { title: "Analytics", url: "/analytics", icon: "analytics" },
  { title: "Study Tools", url: "/tools", icon: "tools" },
  
  { title: "Exam Info", url: "/exam-info", icon: "exam-info" },
];

const AppSidebar = () => {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

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
                      {!collapsed && <span>{item.title}</span>}
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
