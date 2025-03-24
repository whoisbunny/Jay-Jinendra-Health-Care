import {Phone } from "lucide-react";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Head from "next/head";
import Work from "@/components/Work";
import Service from "@/components/Service";
import Link from "next/link";
import WhyChooseUs from "@/components/WhyChoseUs";
const Home = () => {
  return (
    <>
      <Head>
        <title>Home Care Services | Jay Jinendra</title>
        <meta
          name="description"
          content="Professional home care services for your loved ones. Certified caregivers, safe and secure, and highly rated by families."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="home care, caregivers, professional care, safe care, secure care, certified caregivers, family care, Jay Jinendra, home care services, elderly care, senior care, health care, in-home care, personal care, caregiving services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Hero />
        {/* Features Section */}
        {/* <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: UserCheck,
                title: "Professional Caregivers",
                text: "Certified and experienced caretakers.",
              },
              {
                icon: ShieldCheck,
                title: "Safe & Secure",
                text: "Background-checked and verified staff.",
              },
              {
                icon: Star,
                title: "5-Star Service",
                text: "Highly rated by families and clients.",
              },
            ].map((feature, index) => (
              <div key={index} className="p-6 border rounded-lg shadow-md">
                <feature.icon
                  size={40}
                  className="mx-auto text-primary1 mb-4"
                />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </section> */}
        <WhyChooseUs/>
        {/* Services Section */}
        <Service />
        <Work />
        <section className="bg-white text-secondary1 text-center py-12">
          <h2 className="text-3xl font-bold mb-4">Need a Caregiver?</h2>
          <p className="text-lg mb-6">Get in touch with us today!</p>
          <Link
            href="/contact-jay-jinendra-health-care"
            className="btn px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Contact Us <Phone size={18} className="inline-block ml-2" />
          </Link>
        </section>
        <Testimonials />
        {/* Call to Action Section */}
      </div>
    </>
  );
};

export default Home;
