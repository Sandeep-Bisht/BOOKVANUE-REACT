import React, { useState, useEffect } from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import Loader from './loader';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

const LocationAwareMap = ({height, disableDefaultUI, draggable, zoomControl, scrollwheel, disableDoubleClickZoom, styles, markerIcon, markerPosition, onMarkerDragEnd, markerDraggable, markerTitle, markers, nearbyMarkers, loaderStyle}) => {
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  
  const [markersData,setMarkersData] = useState(markers == undefined ? null : [...markers])
  const [isLoading,setIsLoading] = useState(false)

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
      setIsLoading(true)
      getFacilities({ lat: position.coords.latitude, lng: position.coords.longitude })
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

  console.log(markersData,'markers data is this')

  return (
    <>
    {isLoaded && !isLoading ?
    <GoogleMap
    mapContainerStyle={mapContainerStyle}
    center={markerPosition == undefined ? location ? { lat: location.coords.latitude, lng: location.coords.longitude } : { lat: 30.3317463, lng: 78.0289588 } : markerPosition}
    zoom={(location || markerPosition) ? 13 : 12} // Adjust the zoom level as needed
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
    {(location || markerPosition) && (
      <>
      <MarkerF
          key={'bookvenue'}
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
          console.log(item,'item getting mapped')
          return (
            <MarkerF
            key={item.slug}
            title={item.official_name}
            position={{lat: parseFloat(item.lat), lng: parseFloat(item.long)}}
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
  <Loader className={loaderStyle}/>
   }</>
  );
};

export default LocationAwareMap;
