import React, { useState, useEffect } from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import Loader from './loader';

const LocationAwareMap = ({height, disableDefaultUI, draggable, zoomControl, scrollwheel, disableDoubleClickZoom, styles, markerIcon, markerPosition, onMarkerDragEnd, markerDraggable, markerTitle, markers}) => {
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
    options={{disableDefaultUI: disableDefaultUI == undefined ? true : disableDefaultUI,
              draggable: draggable == undefined ? false : draggable,
              zoomControl: zoomControl == undefined ? false : zoomControl, 
              scrollwheel: scrollwheel == undefined ? false : scrollwheel, 
              disableDoubleClickZoom: disableDoubleClickZoom == undefined ? true : disableDoubleClickZoom,
              styles: styles == undefined ? [
              { 
                featureType: "poi",
                stylers: [
                  { "visibility": "off" }
                ]
              }
              ]
              :
              styles
            }}
  >
    {location && (
      <>{
        Array.isArray(markers) && markers.length > 0 ? 
        markers.map((item)=>{
          return (
            <MarkerF
            title={item.title}
            position={item.position}
            icon={{
            url: item.url
            }}
          />
          )
        })
        :
        <MarkerF
          title={markerTitle == undefined ? "Your Location" : markerTitle}
          position={markerPosition == undefined ? { lat: location.coords.latitude, lng: location.coords.longitude } : markerPosition}
          icon={{
              url: markerIcon == undefined ? "/Location.svg" : markerIcon
          }}
          onDragEnd={onMarkerDragEnd == undefined ? null : onMarkerDragEnd}
          draggable={markerDraggable == undefined ? false : markerDraggable}
        />
      }
      
      </>
    )}
  </GoogleMap>
  :
  <Loader/>
   }</>
  );
};

export default LocationAwareMap;
