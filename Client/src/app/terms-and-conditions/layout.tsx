import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Jai Jinendra Healthcare",
  description:
    "Read our terms and conditions before booking a caregiver at Jai Jinendra Healthcare.",
  robots: "index, follow",
  keywords:
    "terms and conditions, Jai Jinendra Healthcare, caregiver booking, privacy policy, liability, service agreement",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
