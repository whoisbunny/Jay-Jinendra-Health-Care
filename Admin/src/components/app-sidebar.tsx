"use client";
import { Calendar, Home, Inbox, Search, Settings, Users } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { logoutUser } from "@/redux/reducers/authReducer";
import useAuthRedirect from "@/hooks/useAuthRedirect";

// Menu items.
const items = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Clients", url: "/client", icon: Users },
  { title: "General Settings", url: "/general-settings", icon: Settings },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
];

export function AppSidebar() {
  useAuthRedirect();
  const router = useRouter();
  const pathname = usePathname();
  const dispatch: AppDispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser()).then((action) => {
      if (logoutUser.fulfilled.match(action)) {
        console.log("Logout successful");
        router.push("/");
      } else {
        console.log("Logout failed");
      }
    });
  };
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <Sidebar className="bg-white dark:bg-gray-800">
      <SidebarHeader className="bg-white dark:bg-gray-800">
        <div className="bg-white dark:bg-gray-800 p-4 shadow-md rounded-lg border">
          <Link href={"/profile"} className="flex items-center space-x-4">
            <Image
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auhref=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              width={48}
              height={48}
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {user ? user?.name : "John Doe"}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {user ? user.email : "johndoe@example.com"}
              </p>
            </div>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-white dark:bg-gray-800">
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu className="gap-3">
              {items.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title} className="">
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={`flex items-center gap-2 p-2 rounded-md transition ${
                          isActive
                            ? "bg-gray-700 text-white font-semibold"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-white dark:bg-gray-800">
        <Button
          variant="ghost"
          className="dark:bg-gray-800 shadow-md border"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
