import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Jay Jinendra Healthcare",
  description:
    "Read our terms and conditions before booking a caregiver at Jay Jinendra Healthcare.",
  robots: "index, follow",
  keywords:
    "terms and conditions, Jay Jinendra Healthcare, caregiver booking, privacy policy, liability, service agreement",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
