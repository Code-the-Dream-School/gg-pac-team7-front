import React from "react";
import ContentContainer from "../components/ContentContainer";

const user = {
  firstName: "John",
  lastName: "Doe",
  email: "email@example.com",
};

const bookmarks = [
  {
    title: `John Doe's Event`,
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    address: "123 Main St, Cityville",
    coordinates: { lat: "40.7128", lng: "-74.0060" },
  },
  {
    title: `John Doe's Event`,
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    address: "123 Main St, Cityville",
    coordinates: { lat: "40.7128", lng: "-74.0060" },
  },
];

const UserAccount = () => {
  // const [bookmark, setBookmark] = useState(null);
  // const [showBookmark, setShowBookmark] = useState(false);

  // const handleInputChange = (e) => {
  //   setUser({
  //     ...user,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleDisplayBookmark = () => {
  //   setBookmark({
  //     title: `John Doe's Event`,
  //     startDate: new Date().toISOString(),
  //     endDate: new Date().toISOString(),
  //     address: "123 Main St, Cityville",
  //     coordinates: { lat: "40.7128", lng: "-74.0060" },
  //   });
  //   setShowBookmark(true);
  // };

  return (
    <ContentContainer heading={`Hi ${user.firstName} ${user.lastName}`}>
      <div>
        {/* TODO FOR MICHAEL: Add a <p> to display the email */}

        {/* <h1>User Account</h1> */}
        {/* <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={user.firstName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={user.lastName}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>

        <button onClick={handleDisplayBookmark}>
          {showBookmark ? "Show Bookmark" : "Display Bookmark"}
        </button> */}

        {/* {showBookmark && bookmark && <BookmarkedEvent bookmark={bookmark} />} */}
        {bookmarks.map((bookmark) => (
          <BookmarkedEvent bookmark={bookmark} />
        ))}
      </div>
    </ContentContainer>
  );
};

const BookmarkedEvent = ({ bookmark }) => {
  return (
    <div>
      <h3>Bookmarked Event</h3>
      <div>
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

export default UserAccount;
