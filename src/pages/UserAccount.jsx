import React, { useEffect, useState } from "react";
import ContentContainer from "../components/ContentContainer";
import OpportunityItem from "../components/OpportunityItem";
import Button from "../components/Button";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const UserAccount2 = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
  }

  const [bookmarks, setBookmarks] = useState([]);
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/v1/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setUser(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    const fetchInterestedEvents = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/v1/bookmarks`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        console.log(data, `HHHHHHHHHHH`);
        // Map the API data to match with our structure
        const mappedData = data.map((item) => ({
          id: item.event._id,
          title: item.event.title,
          date: new Date(item.event.startDate).toLocaleDateString(),
          location: item.event.address,
          description: item.event.description,
          mainImageUrl:
            item.event.eventImages[0] || "placeholder-image-url.jpg",
          latitude: item.event.coordinates[0],
          longitude: item.event.coordinates[1],
          category: item.event.category,
        }));
        if (mappedData && mappedData.length > 0) {
          setBookmarks(mappedData);
        }
      } catch (error) {
        console.error("Error fetching interested events:", error);
      }
    };
    fetchUser();
    fetchInterestedEvents();
  }, []);
  const handleRemoveEvent = async (eventId) => {
    try {
      await fetch(
        `${
          import.meta.env.VITE_REACT_APP_BACKEND_URL
        }/api/v1/bookmarks/${eventId}`,
        { method: "DELETE" }
      );
      const updatedEvents = bookmarks.filter((event) => event._id !== eventId);
      setBookmarks(updatedEvents);
    } catch (error) {
      console.error("Error removing event:", error);
    }
  };

  // Handle Logout
  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!user) {
    return <></>;
  }

  return (
    <ContentContainer heading={`Hi ${user.firstName} ${user.lastName}`}>
      <p style={styles.email}>{`${user.userName}`}</p>
      <Button
        onClick={handleLogout}
        className="flex items-center justify-center space-x-1 w-auto"
      >
        <ArrowLeftCircleIcon aria-hidden="true" className="h-5 w-5" />
        <span>Logout</span>
      </Button>
      <div style={styles.bookmarks}>
        {bookmarks.length == 0 && <h1>You have no bookmarked events</h1>}
        {bookmarks.map((bookmark, index) => (
          <OpportunityItem
            key={index}
            opportunity={bookmark}
            // onRemove={handleRemoveEvent}
          />
        ))}
      </div>
    </ContentContainer>
  );
};

const styles = {
  email: {
    fontSize: "18px",
    color: "blue",
    marginBottom: "16px",
  },
  bookmarks: {
    marginTop: "36px",
  },
};
export default UserAccount2;
