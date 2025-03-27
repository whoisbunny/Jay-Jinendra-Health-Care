import BreadCrum from "@/components/Breadcrumb";
import { Mails, MapPin, PhoneCallIcon } from "lucide-react";

function Contact() {
  return (
    <>
      <div className="min-h-screen bg-white ">
        <BreadCrum location={"Contact"} heading={"Contact Us"} />
        <section className="container mx-auto py-12 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h6 className="text-lg text-primary1 mb-3">Get in touch</h6>
              <h2 className="text-3xl font-bold text-gray-800">
                Have Any Question?
              </h2>
              <div className="mt-6 space-y-4">
                <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
                  <MapPin className="text-xl text-primary1" />{" "}
                  <div>
                    <h4 className="text-lg font-semibold">Address</h4>
                    <p>{"Address"}</p>
                  </div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
                  <PhoneCallIcon className="text-xl text-primary1" />{" "}
                  <div>
                    <h4 className="text-lg font-semibold">Phone Number</h4>
                    <p>{"9666666"}</p>
                  </div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
                  <Mails className="text-xl text-primary1" />{" "}
                  <div>
                    <h4 className="text-lg font-semibold">Email Address</h4>
                    <p>{" Email"}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-8">
              <h6 className="text-center text-2xl font-bold  mb-3">
                Leave Us A message
              </h6>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Your Name"
                    name="name"
                    required
                  />
                </div>
                {/* <div>
                  <label className="block text-gray-700 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Email Address"
                    name="email"
                    required
                  />
                </div> */}
                <div>
                  <label className="block text-gray-700 font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Phone Number"
                    name="mobileNo"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">
                    Message
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your comments"
                    name="message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className=" px-4 btn text-white font-semibold py-3 rounded-lg transition-all duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        <div className="mt-8 w-full">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.478000801326!2d72.59861242509133!3d23.00621512918524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85c51048cefb%3A0x777f51782a8b7a1a!2sKankaria%20Lake!5e0!3m2!1sen!2sin!4v1742650635646!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.326668316218!2d72.59451377509147!3d23.01177497918131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85ddf1a6102b%3A0x8e2a16de575688d1!2sJay%20Jinendra%20Health%20Care!5e0!3m2!1sen!2sin!4v1742718691770!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
