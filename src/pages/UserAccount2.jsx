import React, { useEffect, useState } from "react";
import ImageHer from "../../public/her.jpeg";
import ImageHim from "../../public/him2.jpeg";
import ContentContainer from "../components/ContentContainer";

const user = {
  firstName: "Person",
  lastName: "Doe",
  email: "email@example.com",
};

const staticBookmarks = [
  {
    title: `Jane Doe's Event`,
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    address: "123 Main St, Cityville",
    coordinates: { lat: "40.7128", lng: "-74.0060" },
    image: ImageHer,
  },
  {
    title: `John Doe's Event`,
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    address: "123 Main St, Cityville",
    coordinates: { lat: "40.7128", lng: "-74.0060" },
    image: ImageHim,
  },
];

const UserAccount2 = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
  
    const fetchInterestedEvents = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/v1/bookmarks`
        );
        const data = await response.json();
        console.log(data, `HHHHHHHHHHH`)
        if (data.bookmarks && data.bookmarks.length > 0) {
          setBookmarks(data.bookmarks); 
        } else {
          setBookmarks(staticBookmarks); 
        }
      } catch (error) {
        console.error("Error fetching interested events:", error);
        setBookmarks(staticBookmarks); 
      }
    };

    fetchInterestedEvents();
  }, []);

  const handleRemoveEvent = async (eventId) => {
    try {
  
      await fetch(
        `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/v1/bookmarks/${eventId}`,
        { method: "DELETE" }
      );
    
      const updatedEvents = bookmarks.filter((event) => event._id !== eventId);
      setBookmarks(updatedEvents);
    } catch (error) {
      console.error("Error removing event:", error);
    }
  };

  return (
    <ContentContainer heading={`Hi ${user.firstName} ${user.lastName}`}>
      <p style={styles.email}>{`${user.email}`}</p>
      {bookmarks.map((bookmark, index) => (
        <BookmarkedEvent key={index} bookmark={bookmark} onRemove={handleRemoveEvent} />
      ))}
    </ContentContainer>
  );
};

const BookmarkedEvent = ({ bookmark }) => {
  return (
    <div style={styles.bookmarkContainer}>
      <img src={bookmark.image} alt="Event" style={styles.image} />
      <div style={styles.textContainer}>
        <h4>{bookmark.title}</h4>
        <p>Start Date: {new Date(bookmark.startDate).toLocaleString()}</p>
        <p>End Date: {new Date(bookmark.endDate).toLocaleString()}</p>
        <p>Address: {bookmark.address}</p>
        <p>
          Coordinates: {bookmark.coordinates.lat}, {bookmark.coordinates.lng}
        </p>
      </div>
    </div>
  );
};

const styles = {
  email: {
    fontSize: "18px",
    color: "blue",
    marginBottom: "16px",
  },
  bookmarkContainer: {
    display: "flex",
    alignItems: "center",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px 0",
  },
  image: {
    width: "150px",
    height: "auto",
    borderRadius: "8px",
    marginRight: "16px",
  },
  textContainer: {
    flex: 1,
  },
};

export default UserAccount2;
