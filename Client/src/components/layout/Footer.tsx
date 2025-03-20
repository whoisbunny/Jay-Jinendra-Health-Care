import { Link } from "react-router-dom";
// import LIGO from "../assets/images/P2CARE.png";

import dayjs from "dayjs";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

const Footer = () => {


  return (
    <footer className="bg-secondary text-secondary1 pt-10 pb-5">
      <div className="container px-6 mx-auto ">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div>
            <Link to="/">
              {/* <img src={LIGO} className="w-40" alt="logo" /> */}
              <h1>Web site</h1>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4 ">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-secondary1">
                  About
                </Link>
              </li>

              <li>
                <Link to="/service" className="text-secondary1">
                  Service
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-secondary1">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-xl font-semibold mb-4 ">Contact Us</h2>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <MapPin size={18} /> Adddress
              </p>
              <p className="flex items-center gap-2">
                <Phone size={18} /> Address 2
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} /> Email
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              {/* {contact?.facebook && ( */}
              <a
                // href={contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} className="" />
              </a>
              {/* )} */}
              {/* {contact?.instagram && ( */}
              <Link
                // href={contact.instagram}
                to={"/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} className="" />
              </Link>
              {/* )} */}
              {/* {contact?.twitter && ( */}
              <a
                // href={contact.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={24} className="" />
              </a>
              {/* )} */}
              {/* {contact?.linkedin && ( */}
              <a
                // href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} className="" />
              </a>
              {/* )} */}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center border-t border-gray-300 mt-8 pt-6 text-center text-sm">
          <p>&copy; {dayjs().year()} All Rights Reserved</p>
          <div className="flex justify-center space-x-4 ">
            <Link to="/privacypolicy" className="text-secondary1 ">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/termsandconditions" className=" text-secondary1">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
