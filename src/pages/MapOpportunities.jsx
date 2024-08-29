import React, { useRef, useCallback, useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

// Define the libraries needed for Google Maps
const libraries = ['marker']; 

function MapOpportunities({ opportunities, googleMapsApiKey }) {
  // Reference to hold the map instance.
  const mapRef = useRef(null);

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
    if (opportunities.length === 1) {
      const { latitude, longitude } = opportunities[0];
      map.setCenter({ lat: latitude, lng: longitude });
      map.setZoom(zoomLevelForSingleMarker);

      const marker = new window.google.maps.Marker({
        map,
        position: { lat: latitude, lng: longitude },
        title: opportunities[0].title,
      });
      map.markers.push(marker);
    } else {
      // If multiple opportunities, fit the map to show all markers.
      const bounds = new window.google.maps.LatLngBounds();

      opportunities.forEach((opportunity) => {
        const { latitude, longitude } = opportunity;
        bounds.extend({ lat: latitude, lng: longitude });

        const marker = new window.google.maps.Marker({
          map,
          position: { lat: latitude, lng: longitude },
          title: opportunity.title,
        });
        map.markers.push(marker);
      });

      // Adjust the map to fit all the markers within the bounding box.
      map.fitBounds(bounds);
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
    />
  );
}

export default MapOpportunities;
