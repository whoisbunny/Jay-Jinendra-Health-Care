import Image from "next/image";
import Link from "next/link";
import React from "react";
import headerIcon from "@/public/image/icons/header-icon.svg";
import img1 from "@/public/image/banner-img1.png";
import img from "@/public/image/banner-img.png";
const Hero = () => {
  return (
    <>
      {/* <section className="relative text-white py-8 md:pt-16 px-8 bg-cover bg-center bg-no-repeat bg-banner h-96">
        <div className="container   flex flex-col md:flex-row  ">
          <div className=" text-center md:text-left flex flex-col justify-center items-start gap-4 w-120  ">
            <h1 className="text-lg md:text-xl  mb-4">
              Welcome to Jay Jinendra Health Care
            </h1>
            
            <p className="text-lg md:text-xl font-bold mb-6 flex-wrap">
              Providing trusted and professional caretakers for your loved ones.
            </p>
            <Link
              href="/"
              className="bg-primary1  px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition text-white md:mx-0 mx-auto"
            >
              Book a Caregiver
            </Link>
          </div>

          
        </div>
      </section> */}
      <section className="banner-section   relative text-secondary1 py-8 md:pt-16  px-8 ">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center ">
          <div className="md:w-1/2 text-center md:text-left  flex flex-col justify-center items-start gap-4  ">
            <h1 className="flex text-4xl md:text-6xl font-bold mb-4">
              Welcome to Jay Jinendra Health Care
              <Image
                src={headerIcon}
                className="header-icon"
                alt="header-icon"
                loading="lazy"
              />
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Providing trusted and professional caretakers for your loved ones.
            </p>
            <Link
              href="/"
              prefetch={true}
              className="btn px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition md:mx-0 mx-auto "
            >
              Book a Caregiver
            </Link>
          </div>

          <div className="md:w-1/2 banner-img  relative hidden mt-8 md:mt-0 md:flex justify-center">
            <Image
              src={img}
              alt="Caretaker with Elderly Lady"
              width={400}
              height={300}
              loading="lazy"
              className="w-full max-w-md border-none"
            />
            <div className="banner-img1">
              <Image
                src={img1}
                className=""
                alt="checkup-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
