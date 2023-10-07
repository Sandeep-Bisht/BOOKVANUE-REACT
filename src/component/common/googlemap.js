import React, { useState, useEffect } from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import Loader from './loader';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

const LocationAwareMap = ({height, disableDefaultUI, draggable, zoomControl, scrollwheel, disableDoubleClickZoom, styles, markerIcon, markerPosition, onMarkerDragEnd, markerDraggable, markerTitle, markers, nearbyMarkers}) => {
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

  const [markersData,setMarkersData] = useState(markers)
  const [isLoading,setIsLoading] = useState(true)

  const getFacilities = async ({lat,lng}) =>{
    await axios.post( `${BASE_URL}/searchLocation`, {lat,lng})
  .then((response) => {
    setMarkersData(response.data.facility)
    console.log(response.data.facility,'data is this')
    setIsLoading(false)
  })
  .catch((err) => {
    setIsLoading(false)
  });
}

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleMapsApiKey,
  });

  const [location, setLocation] = useState(null);
  // Function to handle location change
  const handleLocationUpdate = (position) => {
    if(nearbyMarkers){
      getFacilities({ lat: position.coords.latitude, lng: position.coords.longitude })
    }
    else{
      setIsLoading(false)
    }

    setLocation(position);
  };

  // Use the Geolocation API to get the user's current location
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(handleLocationUpdate,
        (error) => {
          console.error("Error getting location:", error);
        });
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
    {isLoaded && !isLoading ?
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
      <>
      <MarkerF
          title={markerTitle == undefined ? "Your Location" : markerTitle}
          position={markerPosition == undefined ? { lat: location.coords.latitude, lng: location.coords.longitude } : markerPosition ? markerPosition : { lat: location.coords.latitude, lng: location.coords.longitude }}
          icon={{
              url: markerIcon == undefined ? "/Location.svg" : markerIcon
          }}
          onDragEnd={onMarkerDragEnd == undefined ? null : onMarkerDragEnd}
          draggable={markerDraggable == undefined ? false : markerDraggable}
        />
        
        {
        Array.isArray(markersData) && markersData.length > 0 ? 
        markersData.map((item)=>{
          return (
            <MarkerF
            title={item.official_name}
            position={{lat: item.lat, lng: item.long}}
            icon={{
            url: item.url ? item.url :"/Location.svg"
            }}
          />
          )
        })
        :
        null
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
