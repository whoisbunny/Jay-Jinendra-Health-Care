import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Caregiver | Jai Jinendra Healthcare",
  description:
    "Book a professional caregiver for daily, day-shift, or night-shift care at Jai Jinendra Healthcare.",
  keywords:
    "caregiver booking, healthcare, patient care, Jai Jinendra, elderly care, baby care, nursing care",
  robots: "index, follow",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
