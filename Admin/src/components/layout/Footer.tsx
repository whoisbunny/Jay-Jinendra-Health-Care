import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100  dark:bg-gray-900 text-white py-4 w-full shadow-md">
      <div className="container mx-auto text-center">
        <p className="text-gray-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Admin Panel. All rights reserved.
        </p>
        <p className="mt-2">
          <a
            href="/privacy"
            className="text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300"
          >
            Privacy Policy
          </a>{" "}
          |
          <a
            href="/terms"
            className="text-gray-400 hover:text-white ml-2 dark:text-gray-500 dark:hover:text-gray-300"
          >
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
