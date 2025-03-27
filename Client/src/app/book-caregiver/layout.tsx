import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Caregiver | Jay Jinendra Healthcare",
  description:
    "Book a professional caregiver for daily, day-shift, or night-shift care at Jay Jinendra Healthcare.",
  keywords:
    "caregiver booking, healthcare, patient care, Jay Jinendra, elderly care, baby care, nursing care",
  robots: "index, follow",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
