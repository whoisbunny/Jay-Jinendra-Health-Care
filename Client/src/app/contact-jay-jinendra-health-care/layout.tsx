import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Jay Jinendra Health Care",
  description:
    "Get in touch with Jay Jinendra Health Care. Contact us for any inquiries or questions you may have about health care, baby care, or elder care.",
  robots: "index, follow",
  keywords:
    "Jay Jinendra Health Care, Contact, Health Care, Baby Care, Elder Care, Inquiries",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
