import React from "react";
import img1 from "@/public/slide1.webp";
import img2 from "@/public/slide2.png";
import img3 from "@/public/slide3.webp";
import Image from "next/image";
const Service = () => {
  return (
    <>
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "24/7 Home Care",
                text: "Round-the-clock support for your loved ones.",
                img: img1,
              },
              {
                title: "Elderly Care",
                text: "Compassionate care for seniorsvCompassionate care for seniors Compassionate care for seniors Compassionate care for seniors.",
                img: img2,
              },
              {
                title: "Post-Surgery Assistance",
                text: "Helping patients recover at home.",
                img: img3,
              },
            ].map((service, index) => (
              <div
                key={index}
                className=" border rounded-lg shadow-md bg-white"
              >
                {/* <CheckCircle size={40} className="mx-auto text-primary1 mb-4" /> */}
                <div className="img-sec mb-3">
                  <Image
                    src={service.img}
                    alt={service.title}
                    className="rounded "
                    loading="lazy"
                  />
                </div>
                <div className="content py-4 flex flex-col items-center justify-between gap-2 w-full">
                  <div>
                    {" "}
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-gray-600">{service.text}</p>
                  </div>

                  <button
                    type="button"
                    className="btn rounded-lg  font-semibold"
                  >
                    {" "}
                    Inquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
