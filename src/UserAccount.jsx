import React, { useState, useEffect } from 'react';

const UserAccount = ({ userId }) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [bookmark, setBookmark] = useState({
    title: '',
    startDate: '',
    endDate: '',
    address: '',
    coordinates: { lat: '', lng: '' },
  });
  const [showBookmark, setShowBookmark] = useState(false);

  useEffect(() => {
  
  }, []);

  const handleAddBookmark = () => {
    const currentDateTime = new Date().toISOString();
    setBookmark({
      ...bookmark,
      title: `${user.firstName} ${user.lastName}'s Event`,
      startDate: currentDateTime,
      endDate: currentDateTime,
    });
    setShowBookmark(true);
  };

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookmarkChange = (e) => {
    setBookmark({
      ...bookmark,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>User Account</h1>
      <div>
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

      <BookmarkedEvent
        bookmark={bookmark}
        addBookmark={handleAddBookmark}
        showBookmark={showBookmark}
        handleBookmarkChange={handleBookmarkChange}
      />
    </div>
  );
};

const BookmarkedEvent = ({ bookmark, addBookmark, showBookmark, handleBookmarkChange }) => {
  return (
    <div>
      <h3>Bookmarked Event</h3>
      <button onClick={addBookmark}>
        {showBookmark ? 'Update Bookmark' : 'Add Bookmark'}
      </button>

      {showBookmark && (
        <div>
          <h4>{bookmark.title}</h4>
          <p>Start Date: {new Date(bookmark.startDate).toLocaleString()}</p>
          <p>End Date: {new Date(bookmark.endDate).toLocaleString()}</p>
          <p>Address: {bookmark.address}</p>
          <p>Coordinates: {bookmark.coordinates.lat}, {bookmark.coordinates.lng}</p>
        </div>
      )}

      <div>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={bookmark.address}
          onChange={handleBookmarkChange}
        />
        <input
          type="text"
          name="lat"
          placeholder="Latitude"
          value={bookmark.coordinates.lat}
          onChange={(e) => handleBookmarkChange({ target: { name: 'coordinates', value: { ...bookmark.coordinates, lat: e.target.value } } })}
        />
        <input
          type="text"
          name="lng"
          placeholder="Longitude"
          value={bookmark.coordinates.lng}
          onChange={(e) => handleBookmarkChange({ target: { name: 'coordinates', value: { ...bookmark.coordinates, lng: e.target.value } } })}
        />
      </div>
    </div>
  );
};

export default UserAccount;
