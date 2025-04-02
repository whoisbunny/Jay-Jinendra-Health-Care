"use client";
import {  Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ClientLayout from "@/components/ClientLayout";

import { Provider } from "react-redux";
import { store } from "@/redux/store";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Choose weights
  variable: "--font-poppins", // CSS Variable for global usage
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Get the current route

  const isLoginPage = pathname === "/"; // Check if the current route is "/"

  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppins.variable} antialiased`}>
        <SidebarProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             <Provider store={store}>

            {!isLoginPage && <AppSidebar />}
            <div className="flex flex-col min-h-screen w-full">
              <ClientLayout>
                {!isLoginPage && <Header />}

              <main className="min-h-screen bg-gray-100 dark:bg-gray-900">{children}</main>

                {!isLoginPage && <Footer />}
              </ClientLayout>
            </div>
             </Provider>
          </ThemeProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
