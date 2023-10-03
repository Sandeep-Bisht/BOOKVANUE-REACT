import React, { useState, useEffect } from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import Loader from './loader';

const LocationAwareMap = ({height}) => {
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleMapsApiKey,
  });

  const [location, setLocation] = useState(null);
  // Function to handle location change
  const handleLocationUpdate = (position) => {
    setLocation(position);
  };

  // Use the Geolocation API to get the user's current location
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(handleLocationUpdate);
    } else {
        alert('Geolocation is not available in this browser.');
    }
  }, []);

  // Google Maps API key (replace with your own)
  

  // Map options
  const mapContainerStyle = {
    width: '100%',
    height: height ? height : '70vh',
  };

  return (
    <>
    {isLoaded ?
    <GoogleMap
    mapContainerStyle={mapContainerStyle}
    center={location ? { lat: location.coords.latitude, lng: location.coords.longitude } : { lat: 30.3317463, lng: 78.0289588 }}
    zoom={location ? 15 : 12} // Adjust the zoom level as needed
    options={{disableDefaultUI: true,
              draggable: false,
              zoomControl: false, 
              scrollwheel: false, 
              disableDoubleClickZoom:true,
              styles:[
              { 
                featureType: "poi",
                stylers: [
                  { "visibility": "off" }
                ]
              }
              ]
            }}
  >
    {location && (
      <MarkerF
        title="Your Location"
        position={{ lat: location.coords.latitude, lng: location.coords.longitude }}
        icon={{
            url:"/Location.svg"
        }}
      />
    )}
  </GoogleMap>
  :
  <Loader/>
   }</>
  );
};

export default LocationAwareMap;
