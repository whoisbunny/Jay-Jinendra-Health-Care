"use client"; 
import { useState } from "react";
import Image from "next/image";
import faqImg from "@/public/image/faq-img.png";
import icon2 from "@/public/image/icons/smiling-icon.svg";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const FAQList = [
    {
      question: "What is your return policy?",
      answer:
        "Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.",
    },
    {
      question: "How do I track my order?",
      answer:
        "You can track your order using the tracking number provided in your order confirmation email.",
    },
    {
      question: "Can I purchase items again?",
      answer:
        "Yes, you can purchase items again by visiting our store and placing a new order.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship internationally. Shipping charges and delivery times may vary depending on the destination.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section faq-section-inner py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h6 className="text-gray-500 text-lg uppercase">Get Your Answer</h6>
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <Image
              src={faqImg}
              className="w-full rounded-lg shadow-lg"
              alt="FAQ"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-md flex items-center gap-2">
              <Image
                src={icon2}
                alt="icon"
                className="w-10 h-10"
                loading="lazy"
              />
              <div>
                <h4 className="text-xl font-bold text-primary1">
                  <span className="count-digit">1</span>k+
                </h4>
                <p className="text-secondary1">Happy Patients</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="faq-info space-y-4">
            {FAQList.map((el, i) => (
              <div
                key={i}
                className="border-b border-gray-300 pb-4 hover:cursor-pointer"
              >
                <button
                  onClick={() => toggleAccordion(i)}
                  className="flex justify-between w-full text-left py-3 text-lg font-medium text-gray-800 focus:outline-none transition-all"
                >
                  {el.question}
                  <span
                    className={`transform transition-transform ${
                      openIndex === i ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ⌵
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 mt-2">{el.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
