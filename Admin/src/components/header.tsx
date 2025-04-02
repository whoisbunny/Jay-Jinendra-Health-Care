"use client";
import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow sticky top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <SidebarTrigger />
        {/* <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-100">
          Dashboard
        </h1> */}
        <div className="flex items-center space-x-4">

          <LanguageSwitcher/>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          aria-label="Toggle Dark Mode"
          >
          {theme === "light" ? (
            <Moon className="w-5 h-5 text-gray-800" />
          ) : (
            <Sun className="w-5 h-5 text-yellow-400" />
          )}
        </button>
          </div>
      </div>
    </header>
  );
};

export default Header;
