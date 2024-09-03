import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserAccount = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/api/user/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  const addBookmark = async (newBookmark) => {
    try {
      const response = await axios.put(`/api/user/${userId}`, { bookmark: newBookmark });
      setUser(response.data);
    } catch (error) {
      console.error('Error adding bookmark:', error);
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>User Account</h1>
      <UserProfile user={user} />
      <BookmarkedEvents events={user.bookmarks} addBookmark={addBookmark} />
    </div>
  );
};

const UserProfile = ({ user }) => (
  <div>
    <h2>{user.firstName} {user.lastName}</h2>
    <p>Email: {user.email}</p>
    <p>Bio: {user.bio}</p>
  </div>
);

const BookmarkedEvents = ({ events, addBookmark }) => {
  const [newEvent, setNewEvent] = useState({
    title: '',
    startDate: '',
    endDate: '',
    address: '',
    coordinates: { lat: '', lng: '' }
  });

  const handleAddBookmark = () => {
    addBookmark(newEvent);
    setNewEvent({
      title: '',
      startDate: '',
      endDate: '',
      address: '',
      coordinates: { lat: '', lng: '' }
    });
  };

  return (
    <div>
      <h3>Bookmarked Events</h3>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h4>{event.title}</h4>
            <p>Start Date: {event.startDate}</p>
            <p>End Date: {event.endDate}</p>
            <p>Address: {event.address}</p>
            <p>Coordinates: {event.coordinates.lat}, {event.coordinates.lng}</p>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Start Date"
          value={newEvent.startDate}
          onChange={(e) => setNewEvent({ ...newEvent, startDate: e.target.value })}
        />
        <input
          type="text"
          placeholder="End Date"
          value={newEvent.endDate}
          onChange={(e) => setNewEvent({ ...newEvent, endDate: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address"
          value={newEvent.address}
          onChange={(e) => setNewEvent({ ...newEvent, address: e.target.value })}
        />
        <input
          type="text"
          placeholder="Latitude"
          value={newEvent.coordinates.lat}
          onChange={(e) => setNewEvent({ ...newEvent, coordinates: { ...newEvent.coordinates, lat: e.target.value } })}
        />
        <input
          type="text"
          placeholder="Longitude"
          value={newEvent.coordinates.lng}
          onChange={(e) => setNewEvent({ ...newEvent, coordinates: { ...newEvent.coordinates, lng: e.target.value } })}
        />
        <button onClick={handleAddBookmark}>Add Bookmark</button>
      </div>
    </div>
  );
};

export default UserAccount;
