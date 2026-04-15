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
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Brain,
  CalendarCheck,
  BarChart3,
  Layers,
  BookOpen,
  FileText,
  Users,
  Wrench,
} from "lucide-react";
import { useLocation } from "react-router-dom";

const navItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Simulations", url: "/simulations", icon: Brain },
  { title: "Study Plan", url: "/study-plan", icon: CalendarCheck },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Flashcards", url: "/flashcards", icon: Layers },
  { title: "Learning Library", url: "/library", icon: BookOpen },
  { title: "Study Tools", url: "/tools", icon: Wrench },
  { title: "Exam Info", url: "/exam-info", icon: FileText },
  { title: "Community", url: "/community", icon: Users },
];

const AppSidebar = () => {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <div className="p-4">
          <NavLink to="/dashboard" className="text-lg font-bold text-foreground tracking-tight">
            {collapsed ? (
              <span className="text-primary text-xl">C</span>
            ) : (
              <>TCE<span className="text-primary">.com</span></>
            )}
          </NavLink>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                    <NavLink to={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
