import React from "react";
import { Phone } from "lucide-react"; // Import icons from lucide-react
import whatsAppIcon from "../public/images.png"
import Image from "next/image";
const ContactIcons = () => {
  const phoneNumber = "+917801815082"; // Replace with your phone number
  const whatsappMessage =
    "Hello! I found your website https://jay-jinendra-health-care.vercel.app and i'm  interested to your service.";

  return (
    <div className="  fixed bottom-4 right-4  flex flex-col  gap-4 p-2   z-50 ">
      {/* WhatsApp Icon */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 text-xl  bg-white p-4 rounded-full shadow-lg"
      >
        <Image src={whatsAppIcon} alt="whatsapp us" className="w-8 h-8"/>
      </a>

      {/* Phone Call Icon */}
      <a
        href={`tel:${phoneNumber}`}
        className="text-blue-500 text-xl  p-4 rounded-full shadow-lg text-center bg-white flex justify-center items-center"
      >
        <Phone size={20} color="#007BFF" /> {/* Lucide-react Icon */}
      </a>
    </div>
  );
};

export default ContactIcons;
