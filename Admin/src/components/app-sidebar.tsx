import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { menuItems } from "@/constants/constants";
import { Button } from "./ui/button";

export function AppSidebar() {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="bg-white dark:bg-gray-800 p-4 shadow-md rounded-lg">
          <Link to={"/profile"} className="flex items-center space-x-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auhref=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                John Doe
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                johndoe@example.com
              </p>
            </div>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className=" p-4">
          <SidebarMenu className="space-y-2">
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.id} className="">
                <SidebarMenuButton asChild isActive={path === item.path}>
                  <NavLink to={item.path} className="flex items-center gap-4">
                    <item.icon className="h-6 w-6" />
                    {item.name}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button variant={'ghost'} className="dark:bg-gray-800 shadow-md" onClick={handleLogout}>Logout</Button>
      </SidebarFooter>
    </Sidebar>
  );
}
