// "use client";
// import { Geist, Geist_Mono } from "next/font/google";
// import type { Metadata } from "next";
// import "./globals.css";
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";
// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import Loading from "@/components/Loading";
// // import { Metadata } from "next";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Jay Jinendra Health Care - Best Caretaker Services",
//   description:
//     "Hire professional caretakers and home nurses for elderly and patient care. 24/7 assistance available.",
//   keywords:
//     "caretaker services, home nursing, patient care, elderly assistance, best home care services",
//   robots: "index, follow",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const [loading, setLoading] = useState<boolean>(false);
//   const pathname = usePathname();
//   useEffect(() => {
//     setLoading(true);
//     const timer = setTimeout(() => setLoading(false), 500); // Simulate loading delay
//     return () => clearTimeout(timer);
//   }, [pathname]);
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
//       >
//         {/* {children} */}
//         <Header />
//         <main>
//           {loading && <Loading />}
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClientLayout from "@/components/ClientLayout";
import ContactIcons from "@/components/ContactIcons";

export const metadata: Metadata = {
  title: "Jay Jinendra Health Care - Best Caregiver Services",
  description:
    "Hire professional caretakers and home nurses for elderly and patient care. 24/7 assistance available.",
  keywords:
    "caretaker services, home nursing, patient care, elderly assistance, best home care services",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased h-screen">
        <ClientLayout>
          <Header />
          <main>{children}</main>
          <ContactIcons />

          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
