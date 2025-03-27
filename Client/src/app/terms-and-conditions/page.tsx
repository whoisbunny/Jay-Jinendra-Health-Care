import {  NextPage } from "next";
import Breadcrumb from "@/components/Breadcrumb";

const TermsAndConditions: NextPage = () => {
  return (
    <>

      <div className="min-h-screen bg-white ">
        <Breadcrumb
          location={"Terms and Conditions"}
          heading={"Terms and Conditions"}
        />

        <div className=" p-6 flex justify-center">
          <div className=" bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-bold text-center mb-4">
              Terms and Conditions
            </h1>
            <p className="text-gray-700 mb-4">
              Welcome to Jai Jinendra Healthcare! Please read our terms and
              conditions carefully before using our caregiver booking services.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              1. Service Agreement
            </h2>
            <p className="text-gray-600">
              By booking a caregiver, you agree to our service terms, including
              payment, cancellation, and responsibilities.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              2. Privacy Policy
            </h2>
            <p className="text-gray-600">
              Your personal data is protected under our privacy policy. We do
              not share your information with third parties without consent.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Liability</h2>
            <p className="text-gray-600">
              Jai Jinendra Healthcare is not responsible for any medical
              complications or service disputes arising from caregiver
              assignments.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              4. Modifications
            </h2>
            <p className="text-gray-600">
              We reserve the right to update these terms and conditions at any
              time. Please review them regularly.
            </p>

            <p className="text-gray-700 mt-6">
              If you have any questions, contact us at{" "}
              <span className="text-blue-600">
                support@jaijinendrahealthcare.com
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
