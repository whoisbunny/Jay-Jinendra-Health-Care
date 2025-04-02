import React from "react";

interface ServiceCardProps {
  generalName: string;
  description: string;
  secondLanguageName: string;
  _id: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  generalName,
  description,
  secondLanguageName,
  _id,
}) => {
  return (
    <div key={_id} className="rounded-lg border shadow-md p-4 bg-white">
      <h2 className="text-xl font-semibold text-gray-800">{generalName}</h2>
      <p className="text-sm text-gray-500 italic">{secondLanguageName}</p>
      <p className="mt-2 text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceCard;
