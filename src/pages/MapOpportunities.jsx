import React, { useRef, useCallback, useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import { Link } from "react-router-dom"; // Import Link if you want to use React Router

// Define the libraries needed for Google Maps
const libraries = ['places'];
const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function MapOpportunities({ opportunities }) {
  // Reference to hold the map instance.
  const mapRef = useRef(null);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null); // State for the selected marker (opportunity)

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const zoomLevelForSingleMarker = 15;

  // Load the Google Maps API and the required libraries.
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: googleMapsApiKey,
    libraries: libraries,
  });

  // Callback to handle the map load event.
  const onLoad = useCallback((map) => {
    mapRef.current = map; // Store the map instance in the ref.

    if (opportunities.length > 0) {
      updateMarkers(map, opportunities); // Update markers based on opportunities.
    }
  }, [opportunities]);

  // Function to update the markers on the map based on the opportunities.
  const updateMarkers = (map, opportunities) => {
    // Clear previous markers from the map.
    map.markers = map.markers || [];
    map.markers.forEach(marker => marker.setMap(null));
    map.markers = [];

    // If no opportunities, do not add any markers.
    if (opportunities.length === 0) {
      return;
    }

    // If only one opportunity, center the map on it and add a single marker.
    if (opportunities.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();

      opportunities.forEach((opportunity) => {
        const { latitude, longitude, title } = opportunity;

        // Create and place a marker on the map.
        const marker = new window.google.maps.Marker({
          map,
          position: { lat: latitude, lng: longitude },
          title: title,
        });

        // Add click event to open InfoWindow with opportunity details
        marker.addListener('click', () => {
          setSelectedOpportunity(opportunity); // Set the selected opportunity to display in InfoWindow
        });

        map.markers.push(marker);

        // Extend the map bounds to include this location.
        bounds.extend({ lat: latitude, lng: longitude });
      });

      // If there's only one opportunity, center and zoom the map manually.
      if (opportunities.length === 1) {
        map.setCenter(bounds.getCenter());
        map.setZoom(zoomLevelForSingleMarker);
      } else {
        // If there are multiple opportunities, adjust the map to fit all markers.
        map.fitBounds(bounds);
      }
    }
  };

  // Effect to update the markers whenever the opportunities list changes.
  useEffect(() => {
    if (mapRef.current && opportunities.length >= 0) {
      const map = mapRef.current;
      updateMarkers(map, opportunities);
    }
  }, [opportunities]);

  if (loadError) {
    return <div>Error loading maps</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      onLoad={onLoad}
      onClick={() => setSelectedOpportunity(null)} // Close InfoWindow when clicking on the map
    >
      {selectedOpportunity && (
        <InfoWindow
          position={{
            lat: selectedOpportunity.latitude,
            lng: selectedOpportunity.longitude,
          }}
          onCloseClick={() => setSelectedOpportunity(null)} // Close InfoWindow when clicking the close button
        >
          <div>
            <a
              href={`/opportunities/${selectedOpportunity.id}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <h3>{selectedOpportunity.title}</h3>
              <p>{selectedOpportunity.description}</p>
              <p><strong>Date:</strong> {selectedOpportunity.date}</p>
              <p><strong>Location:</strong> {selectedOpportunity.location}</p>
            </a>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

export default MapOpportunities;