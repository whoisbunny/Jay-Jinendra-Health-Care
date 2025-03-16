import { SidebarProvider } from "@/components/ui/sidebar";
// import { ModeToggle } from "@/components/mode-toggle";
import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
// { children }: { children: React.ReactNode }
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className=" h-screen w-full">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </SidebarProvider>
  );
}
