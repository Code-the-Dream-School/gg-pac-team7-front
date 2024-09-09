import React from "react";
import ImageHer from "../../public/her.jpeg";
import ImageHim from "../../public/him2.jpeg";
import ContentContainer from "../components/ContentContainer";

const user = {
  firstName: "Person",
  lastName: "Doe",
  email: "email@example.com",
};

const bookmarks = [
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

const UserAccount = () => {
  return (
    <ContentContainer heading={`Hi ${user.firstName} ${user.lastName}`}>
      <p style={styles.email}>{`${user.email}`}</p>
      {bookmarks.map((bookmark, index) => (
        <BookmarkedEvent key={index} bookmark={bookmark} />
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

export default UserAccount;
