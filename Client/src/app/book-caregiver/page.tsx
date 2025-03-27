"use client";
import { useState } from "react";
import { NextPage } from "next";
import Breadcrumb from "@/components/Breadcrumb";


const CaregiverBooking: NextPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    serviceType: "",
    shift: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
     
      <div className="min-h-screen bg-white ">
        <Breadcrumb location={"book-caregiver"} heading={"Book a Caregiver"} />
        <div className="flex text-center justify-center items-center h-full">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-4">
              Book a Caregiver
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <textarea
                name="address"
                placeholder="Address"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
              <select
                name="serviceType"
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select Service Type</option>
                <option value="elderly-care">Elderly Care</option>
                <option value="patient-care">Patient Care</option>
                <option value="child-care">Baby Care</option>
                <option value="disabled-care">Disabled Care</option>
                <option value="nursing-care">Nursing Care</option>
              </select>
              <select
                name="shift"
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select Shift</option>
                <option value="day-shift">Day Shift</option>
                <option value="night-shift">Night Shift</option>
                <option value="daily">24*7 Shift</option>
                <option value="hourly">Hourly Shift (Per Hour)</option>
              </select>
              <textarea
                name="message"
                placeholder="Additional Details"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  required
                  className="mr-2"
                />
                <label htmlFor="terms" className="text-sm">
                  I agree to the{" "}
                  <a
                    href="/terms-and-conditions"
                    className="text-blue-500 underline"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
              <button type="submit" className="btn rounded-lg">
                Submit Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaregiverBooking;
