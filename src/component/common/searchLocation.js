import React, { useState } from 'react'
import { BiSearchAlt2 } from "react-icons/bi"

const SearchLocation = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null);


    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setQuery(inputValue);
    
        // Use Google Places Autocomplete API to fetch suggestions
        const autoCompleteService = new window.google.maps.places.AutocompleteService();
        autoCompleteService.getPlacePredictions(
          { input: inputValue,
            componentRestrictions: { country: 'IN' }, },
          (predictions, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              setSuggestions(predictions);
              console.log(predictions)
            }
          }
        );
    };

    
  const handlePlaceSelect = (place) => {
    // Get the place details using the Place Details service
    const placeService = new window.google.maps.places.PlacesService(document.createElement('div'));
    placeService.getDetails(
      { placeId: place.place_id },
      (result, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          // Store the selected place in state
          setSelectedPlace(result);
        }
      }
    );
  };

  return (
    <div className='search-container-head'>
      <div className="input-group search-bar-wrapper">
        <span className="input-group-text" id="global-search"><BiSearchAlt2/></span>
        <input type='search'
         value={query}
         onChange={handleInputChange}
         className='form-control' 
         id="globalSearch" 
         placeholder='Search for Sports venues, Wedding venues & Party halls' 
         aria-label='Search for Sports venues, Wedding venues & Party halls' 
         aria-describedby="global-search"/>

         {query !== '' && query  && query.length > 1 ?  
         <ul className='suggestionList'>
         
         {suggestions.map((suggestion) => {
 
             let suggetionData = []
 
             if(suggestion.description.includes(',')){
                 suggetionData = suggestion.description.split(',', 2);
             }
 
         return <>
         {suggetionData.length == 2
         ? 
 
          (
             <li key={suggestion.place_id} onClick={() => handlePlaceSelect(suggestion)} className='suggestion-item'>
                <p className='suggestion-heading'>{suggetionData[0]}</p>
                <p className='suggestion-desc'>{suggetionData[1]}</p>
           </li>
         )
         :
          (<li key={suggestion.place_id} onClick={() => handlePlaceSelect(suggestion)} className='suggestion-item'>
            <p className='suggestion-heading'>{suggestion.description}</p>
             
         </li>)
         }
         </>
         }
         )}

         </ul>
         :
         null
         }
      </div>
    </div>
  )
}

export default SearchLocation