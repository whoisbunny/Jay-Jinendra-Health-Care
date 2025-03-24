import Image from "next/image";
import choose01 from "../public/content/choose-01.svg";
import choose02 from "../public/content/choose-02.svg";
import choose03 from "../public/content/choose-03.svg";
import choose04 from "../public/content/choose-04.svg";

const WhyChooseUs = () => {
  const whyChooseUs = [
    {
      shorttitle: "Qualified Staff of Doctors",
      shortdescription:
        "Our highly trained and professional staff ensures the best care and treatment.",
      icon: choose01,
      _id: "65cb4c03297c66d95a61dc45",
    },
    {
      shorttitle: "24/7 Emergency Support",
      shortdescription:
        "We are available round the clock to provide emergency healthcare services.",
      icon: choose02,
      _id: "65cb4c03297c66d95a61dc46",
    },
    {
      shorttitle: "Advanced Medical Equipment",
      shortdescription:
        "We use the latest medical technology to provide top-notch healthcare solutions.",
      icon: choose03,
      _id: "65cb4dff297c66d95a61dc7e",
    },
    {
      shorttitle: "Personalized Home Care",
      shortdescription:
        "Our caretakers provide personalized home care for patients and elderly individuals.",
      icon: choose04,
      _id: "65cb4dff297c66d95a61dc7f",
    },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="md:block flex flex-col justify-center items-center bg-white shadow-lg rounded-lg p-6 text-center why-choose-us-card"
            >
              <span className=" w-24 h-24 mb-4 rounded-full  text-white   bg-primary1    flex justify-center items-center ">
                <Image
                  src={item.icon}
                  alt="choose-image"
                  width={40}
                  height={40}
                  loading="lazy"

                  //   className="hover:scale-110 transform transition duration-300 ease-in-out"
                />
              </span>
              <h4 className="text-lg font-semibold text-secondary1 mb-2">
                {item.shorttitle}
              </h4>
              <p className="text-secondary1 text-sm">{item.shortdescription}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


