import { Link } from "react-router-dom";
import { CheckCircle, UserCheck, ShieldCheck, Star, Phone } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}

      <section className="relative text-secondary1 bg-secondary  pt-20 ">
        <div className="container mx-auto  px-6 flex flex-col md:flex-row items-center justify-center py-16 ">
          {/* Left Text Content */}
          <div className="md:w-1/2  text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
              Welcome to Jay Jinendra Health Care
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Providing trusted and professional caretakers for your loved ones.
            </p>
            <Link
              to="/"
              className="bg-primary1 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Book a Caregiver
            </Link>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 hidden  mt-8 md:mt-0 md:flex justify-center">
            {/* <img
              src="https://files.oaiusercontent.com/file-GB8MgausFWBqnSyBoiNtnq?se=2025-03-19T19%3A01%3A24Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dad621360-01b9-4991-805c-77d6730a29da.webp&sig=MfdXs7zQAtWSWxBsBjS%2Blp3/9kAnDM3X3BV%2BwWjXg94%3D"
              alt="Caretaker with Elderly Lady"
              className="w-full max-w-md rounded-lg shadow-lg"
            /> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border rounded-lg shadow-md">
            <UserCheck size={40} className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold">Professional Caregivers</h3>
            <p className="text-gray-600">
              Certified and experienced caretakers.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <ShieldCheck size={40} className="mx-auto text-green-600 mb-4" />
            <h3 className="text-xl font-semibold">Safe & Secure</h3>
            <p className="text-gray-600">
              Background-checked and verified staff.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <Star size={40} className="mx-auto text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold">5-Star Service</h3>
            <p className="text-gray-600">
              Highly rated by families and clients.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <CheckCircle size={40} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold">24/7 Home Care</h3>
              <p className="text-gray-600">
                Round-the-clock support for your loved ones.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <CheckCircle size={40} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold">Elderly Care</h3>
              <p className="text-gray-600">Compassionate care for seniors.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <CheckCircle size={40} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold">Post-Surgery Assistance</h3>
              <p className="text-gray-600">Helping patients recover at home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div className="p-6 border rounded-lg shadow-md">
            <p className="text-gray-600 italic">
              "Amazing service! The caregivers are professional and kind."
            </p>
            <h4 className="mt-4 font-semibold">- Ramesh Patel</h4>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <p className="text-gray-600 italic">
              "Highly recommended. Our family felt at ease with their care."
            </p>
            <h4 className="mt-4 font-semibold">- Meera Shah</h4>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <p className="text-gray-600 italic">
              "Professional and reliable caregivers. We are grateful!"
            </p>
            <h4 className="mt-4 font-semibold">- Rajiv Mehta</h4>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Need a Caregiver?</h2>
        <p className="text-lg mb-6">Get in touch with us today!</p>
        <Link
          to="/contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Contact Us <Phone size={18} className="inline-block ml-2" />
        </Link>
      </section>
    </div>
  );
};

export default Home;
