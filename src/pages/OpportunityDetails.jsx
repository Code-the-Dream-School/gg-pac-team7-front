import React from "react";
import { MapPinIcon, CalendarDaysIcon, HeartIcon } from "@heroicons/react/24/outline";

function OpportunityDetails() {
  const opportunityData = {
    title: "Green Guardians: Community Tree Planting Initiative",
    location: "Los Angeles",
    date: "August 30",
    latitude: 34.0522,
    longitude: -118.2437,
    link: "https://google.com",
    mainImageUrl: "../public/image1.webp",
    galleryImages: [
      "../public/image1.webp",
      "../public/image1.webp",
      "../public/image1.webp",
      "../public/image1.webp",
    ],
    description: (
      <>
        <p className="mb-4">
          Join us in our mission to create a greener future through the "Green Guardians" community tree planting initiative. This program is dedicated to restoring local ecosystems, improving air quality, and providing habitats for wildlife by planting native trees in urban and rural areas. By participating, you will help combat climate change, reduce carbon footprints, and create a lasting legacy of environmental stewardship.
        </p>
        <p className="mb-4">
          The "Green Guardians" initiative focuses on engaging local communities in hands-on environmental conservation. Volunteers of all ages are welcome to participate in tree planting events, where they will learn about the importance of native species, sustainable forestry practices, and the impact of trees on local ecosystems. Each tree planted is a step toward a healthier, more resilient environment for future generations.
        </p>
        <p className="mb-4">
          Whether you are a seasoned environmentalist or new to the world of volunteering, the "Green Guardians" program offers a meaningful way to connect with nature and your community. Together, we can make a tangible difference in the fight against deforestation and environmental degradation. Join us today, and become a guardian of the green spaces that enrich our world.
        </p>
      </>
    ),
  };

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
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-48 object-cover rounded"
            />
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-extrabold mb-4">About the program:</h2>
          {opportunityData.description}
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <a href={opportunityData.link} target="_blank" rel="noopener noreferrer" className="bg-gray-200 text-black font-bold py-4 px-5 rounded-full border-2 border-gray-200">
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
