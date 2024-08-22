import React from "react";
import { useParams } from "react-router-dom";
import {MapPinIcon, CalendarDaysIcon, HeartIcon} from "@heroicons/react/24/outline";
import { opportunities } from "../util/data";

function OpportunityDetails() {
  const { id } = useParams();

  const opportunityData = opportunities.find(
    (opportunity) => opportunity.id === parseInt(id)
  );

  if (!opportunityData) {
    return (
      <div className="container mx-auto max-w-3xl px-4 py-8">
        <div>Opportunity not found</div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full h-72 overflow-hidden shadow-md mb-8">
        <img
          src={opportunityData.mainImageUrl}
          alt="Location"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="container mx-auto max-w-3xl px-4 py-8">
        <h1 className="text-center text-3xl font-bold mb-4">
          {opportunityData.title}
        </h1>

        <div className="flex items-center justify-center space-x-6 mb-8 font-medium text-slate-700">
          <div className="flex items-center space-x-1">
            <MapPinIcon aria-hidden="true" className="h-6 w-6" />
            <span>{opportunityData.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <CalendarDaysIcon aria-hidden="true" className="h-6 w-6" />
            <span>{opportunityData.date}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1 sm:gap-8 mb-8 p-1 sm:p-8">
          {opportunityData.galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={'desc'}
              className="w-full h-48 object-cover rounded"
            />
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-extrabold mb-4">About the program:</h2>
          <p>{opportunityData.description}</p>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <a
            href={opportunityData.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 text-black font-bold py-4 px-5 rounded-full border-2 border-gray-200"
          >
            <span>I'M INTERESTED</span>
          </a>
          <button className="text-black font-bold py-4 px-5 rounded-full flex items-center space-x-1 border-2 border-gray-300">
            <HeartIcon aria-hidden="true" className="h-6 w-6" />
            <span>SAVE TO LIST</span>
          </button>
        </div>

        <h2 className="text-2xl font-extrabold mb-4">Location:</h2>

        <div className="w-full h-96">
          <iframe
            src={`https://www.google.com/maps?q=${opportunityData.latitude},${opportunityData.longitude}&hl=es;z=14&output=embed`}
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default OpportunityDetails;
