import Image from "next/image";
import Link from "next/link";
import React from "react";
import shape6 from "../public/image/shape-06.png";
import shape7 from "../public/image/shape-07.png";
import wayImg from "../public/image/way-img.png";

const WaySection = () => {
  return (
    <>
      <section className="way-section">
        <div className="container">
          <div className="way-bg">
            <div className="way-shapes-img">
              <div className="way-shapes-left">
                <Image src={shape6} alt="shape-image" loading="lazy" />
              </div>
              <div className="way-shapes-right">
                <Image src={shape7} alt="shape-image" loading="lazy" />
              </div>
            </div>
            <div className="flex items-end">
              <div className="col-lg-7 col-md-12">
                <div className="section-inner-header way-inner-header mb-0">
                  <h2 className="text-4xl font-semibold text-white  ">
                    {"Be on Your Way to Feeling Better with the Jay Jinendra "}
                  </h2>
                  <p>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    }
                  </p>
                  <Link href="/" className="btn btn-primary">
                    Contact With Us
                  </Link>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="way-img">
                  <Image
                    src={wayImg}
                    className="img-fluid"
                    loading="lazy"
                    alt="doctor-way-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WaySection;
