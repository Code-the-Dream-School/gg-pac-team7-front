import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  MapPinIcon,
  CalendarDaysIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Alert from "../components/Alert";

function OpportunityDetails() {
  const { id } = useParams(); // Get ID from URL params
  const [opportunityData, setOpportunityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false); // State for bookmark
  const [bookmarkId, setBookmarkId] = useState(null); // Store bookmark ID
  const [showLoginAlert, setShowLoginAlert] = useState(false); // For showing the alert
  const token = localStorage.getItem("token"); // Check if user is logged in

  useEffect(() => {
    const fetchOpportunityDetails = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/v1/events/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch opportunity details");
        }
        const data = await response.json();

        const mappedOpportunity = {
          id: data._id,
          title: data.title,
          date: new Date(data.startDate).toLocaleDateString(),
          location: data.address,
          description: data.description,
          mainImageUrl: data.eventImages[0] || "placeholder-image-url.jpg",
          latitude: data.coordinates[0],
          longitude: data.coordinates[1],
          galleryImages: data.galleryImages || [],
          link: data.link || "#",
        };

        setOpportunityData(mappedOpportunity);
        setLoading(false);

        // Check if the event is already bookmarked
        if (token) {
          const bookmarkResponse = await fetch(
            `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/v1/bookmarks`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const bookmarks = await bookmarkResponse.json();
          const bookmark = bookmarks.find(
            (bookmark) => bookmark.event._id === id
          ); // Check event._id
          if (bookmark) {
            setIsBookmarked(true);
            setBookmarkId(bookmark._id); // Store bookmark ID for deletion
          }
        }
      } catch (error) {
        setError("Failed to load opportunity details");
        setLoading(false);
      }
    };

    fetchOpportunityDetails();
  }, [id, token]);

  const handleBookmarkClick = async () => {
    if (!token) {
      setShowLoginAlert(true);

      setTimeout(() => {
        setShowLoginAlert(false);
      }, 5000);
      return;
    }

    try {
      if (isBookmarked) {
        // If already bookmarked, remove bookmark
        const response = await fetch(
          `${
            import.meta.env.VITE_REACT_APP_BACKEND_URL
          }/api/v1/bookmarks/${bookmarkId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          setIsBookmarked(false);
          setBookmarkId(null);
        }
      } else {
        // Add bookmark
        const response = await fetch(
          `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/v1/bookmarks`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ event: id }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          setIsBookmarked(true);
          setBookmarkId(data._id); // Store the new bookmark ID for future removal
        }
      }
    } catch (error) {
      console.error("Error handling bookmark:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!opportunityData) {
    return <div>Opportunity not found</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!opportunityData) {
    return <div>Opportunity not found</div>;
  }

  return (
    <>
      {showLoginAlert && (
        <div className="fixed top-10 left-0 right-0 z-50 flex justify-center">
          <div className="w-full md:max-w-md">
            <Alert
              type="info"
              title="You need to log in to add this event to your list."
            />
          </div>
        </div>
      )}
      <div className="w-full h-72 overflow-hidden shadow-md mb-8">
        <img
          src={opportunityData.mainImageUrl}
          alt={opportunityData.title}
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
          {opportunityData.galleryImages?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery image ${index + 1}`}
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
            <span>Learn More</span>
          </a>
          <button
            onClick={handleBookmarkClick}
            className={`${
              isBookmarked ? "bg-red-500 text-white" : "text-black bg-gray-200"
            } font-bold py-4 px-5 rounded-full flex items-center space-x-1 border-2 border-gray-300`}
          >
            <HeartIcon aria-hidden="true" className="h-6 w-6" />
            <span>
              {isBookmarked ? "Remove from Favorites" : "Add to Favorites"}
            </span>
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
