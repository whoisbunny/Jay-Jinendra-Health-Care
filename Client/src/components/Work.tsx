import React from "react";
import Image from "next/image";
import workImg1 from "@/public/image/work-img.png";
import work1 from "@/public/image/icons/work-01.svg";
import work2 from "@/public/image/icons/work-02.svg";
import work3 from "@/public/image/icons/work-03.svg";
import work4 from "@/public/image/icons/work-04.svg";

const Work = () => {
  const services = [
    {
      icon: work1,
      title: "Search Doctor",
      text: "Find the best doctors near you.",
    },
    {
      icon: work2,
      title: "Check Doctor Profile",
      text: "orem ipsum dolor consectetur adipiscing elit, tempor incididunt labore dolore magna aliqua..",
    },
    {
      icon: work3,
      title: "Schedule Appointment",
      text: "Book appointments at your convenience.",
    },
    {
      icon: work4,
      title: "Get Your Solution",
      text: "Receive the best medical solutions.",
    },
  ];

  return (
    <section className="testimonial-section bg-gray-100  ">
      <div className="container mx-auto md:px-6 ">
        <div className=" flex">
          <div className="hidden lg:block md:hiddden md:w-1/4 ">
            <div className="work-img">
              <Image
                src={workImg1}
                className="img-fluid"
                alt="doctor-image"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:md:w-3/4 flex flex-col items-start md:px-4 py-4">
            <div className="mb-4 px-8">
              <p className=" font-semibold  text-primary1  mb-1">
                How it Works
              </p>
              <h2 className="md:text-4xl text-2xl text-blackText font-[600]">
                4 easy steps to get your solution
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 text-center md:px-6 px-2">
              {services.map((service, index) => (
                <div
                  key={index}
                  className=" hover:cursor-pointer  text-wrap  rounded-lg    flex items-center justify-center "
                >
                  <span className=" hover:border hover:border-primary1 w-1/4 flex items-center   h-16 bg-[#e0e7ff] rounded-md mx-4">
                    <Image
                      src={service.icon}
                      alt={`${service.title}-icon`}
                      className="mx-auto "
                      loading="lazy"
                    />
                  </span>
                  <div className="w-3/4 text-start">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-gray-600">{service.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
