import React, { useState, useEffect } from 'react';
import { LoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';
import Loader from './loader';

const LocationAwareMap = () => {

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
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

  // Map options
  const mapContainerStyle = {
    width: '100%',
    height: '70vh',
  };

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey} loadingElement={<Loader/>}>
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
            title="Hello word"
            position={{ lat: location.coords.latitude, lng: location.coords.longitude }}
            icon={{
                url:"/Location.svg"
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default LocationAwareMap;
