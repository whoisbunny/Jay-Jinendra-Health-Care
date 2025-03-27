import React from "react";
import { Phone, MessageCircle } from "lucide-react"; // Import icons from lucide-react

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
        <MessageCircle size={24} color="#25D366" /> {/* Lucide-react Icon */}
      </a>

      {/* Phone Call Icon */}
      <a
        href={`tel:${phoneNumber}`}
        className="text-blue-500 text-xl  bg-white p-4 rounded-full shadow-lg"
      >
        <Phone size={24} color="#007BFF" /> {/* Lucide-react Icon */}
      </a>
    </div>
  );
};

export default ContactIcons;
