import React from "react";

const About : React.FC= () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-[url('/path-to-image.jpg')] h-[350px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold uppercase">
          About Jay Jinendra Health Care
        </h1>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <p className="text-lg md:text-xl text-center text-gray-700 mb-6">
          Healthcare at home is the need of the hour in India, considering the
          changing lifestyle, family structure, and healthcare affordability.
        </p>

        <p className="text-lg md:text-xl text-gray-700 text-center">
          At **Jay Jinendra Health Care**, we understand your requirements and
          provide the **best hospital-quality healthcare services** to you and
          your loved ones **at an affordable price**.
        </p>
      </section>

      {/* Our Services */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            Our Expertise
          </h2>
          <p className="text-lg text-center text-gray-600 mb-10">
            Our highly trained team of **doctors, nurses, attendants, and
            physiotherapists** offer a broad spectrum of services, from
            **elderly care to post-operative care, including oncology and
            neurology care**.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card */}
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Elderly Care
              </h3>
              <p className="text-gray-600">
                Compassionate care for senior citizens at home.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Post-Operative Care
              </h3>
              <p className="text-gray-600">
                Professional care to ensure smooth recovery after surgery.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Neurology & Oncology
              </h3>
              <p className="text-gray-600">
                Specialized home care for critical patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth & Expansion */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Growth & Expansion
          </h2>
          <p className="text-lg text-gray-700">
            Founded in **2014 in Ahmedabad**, we now operate in Ahmedabad,
            Gandhinagar, Vadodara, Surat, Rajkot, and Bharuch.
          </p>

          <p className="text-lg text-gray-700 mt-4">
            We have **served over 10,000 patients** and currently handle more
            than **10,000 patient services per month**.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Home Healthcare Services?
        </h2>
        <p className="text-lg">Get in touch with our expert team today!</p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default About;
