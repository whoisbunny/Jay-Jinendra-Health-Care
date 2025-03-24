import Breadcrumb from "@/components/Breadcrumb";
import WaySection from "@/components/WaySection";
import Image from "next/image";
import React from "react";

import img2 from "@/public/image/about-img2.jpg";
import img1 from "@/public/image/about-img1.jpg";
import img3 from "@/public/image/about-img3.jpg";
import icon1 from "@/public/image/icons/phone-icon.svg";
import FAQ from "@/components/FAQ";
import Head from "next/head";

const AboutPage: React.FC = () => {
  return (

    <>
    <Head>
      <title>About Jay Jinendra Health Care</title>
      <meta name="description" content="Learn more about Jay Jinendra Health Care, our mission, vision, and the services we offer including elder care, baby care, and more to ensure the best care for your loved ones." />
      <meta name="keywords" content="Jay Jinendra Health Care, patient care, health services, elder care, baby care, about us" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
      <div className="min-h-screen bg-white ">
        <Breadcrumb location={"About Jay Jinendra"} heading={"About Us"} />
        <div className="container mx-auto py-12 px-6">
          <section className="about-section">
            <div className="container">
              <div className="block lg:flex  md:items-center ">
                <div className="w-full md:w-full lg:w-1/2">
                  <div className="about-img-info">
                    <div className="flex flex-row gap-6">
                      <div className="w-full  md:w-full  ">
                        {/* w-full md:w-1/2 */}
                        <div className="about-inner-img">
                          <div className="about-img">
                            <Image
                              src={img1}
                              className="w-full h-auto"
                              alt="about-image"
                              loading="lazy"
                            />
                          </div>
                          <div className="about-img">
                            <Image
                              src={img2}
                              className="w-full h-auto"
                              alt="about-image2"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        {/* w-full md:w-1/2 */}
                        <div className="about-inner-img">
                          <div className="about-box">
                            <h4>Over 2+ Years Experience</h4>
                          </div>
                          <div className="about-img">
                            <Image
                              src={img3}
                              className="w-full h-auto"
                              alt="about-image"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-full lg:w-1/2">
                  {/* w-full md:w-full lg:w-1/2 */}
                  <div className="section-inner-header about-inner-header">
                    <h6 className="text-primary1 font-semibold">
                      About Our Company
                    </h6>
                    <h2>
                      {
                        "We Are Always Ensure Best Medical Treatment For Your Health"
                      }
                    </h2>
                  </div>
                  <div className="about-content">
                    <div className="about-content-details">
                      <p>
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.."
                        }
                        .
                      </p>
                    </div>
                    <div className="about-contact flex w-full items-center ">
                      <div className="about-contact-icon ">
                        <span className="mt-3 w-24 h-24 mb-4 rounded-full  text-white   bg-primary1    flex justify-center items-center ">
                          <Image src={icon1} alt="phone-image" loading="lazy" />
                        </span>
                      </div>
                      <div className="about-contact-text">
                        <p>Need Emergency?</p>
                        <h4>{"99999999"}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <WaySection />
          <FAQ />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
