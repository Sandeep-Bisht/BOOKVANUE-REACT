import React, { lazy, useEffect, useState } from 'react'
import { Default } from '../layouts/default'
import LocationAwareMap from '../common/googlemap'
import '../../css/homepage.css'
import { MdSportsTennis } from 'react-icons/md'
import { CiLocationOn } from 'react-icons/ci'
import { AiFillStar } from 'react-icons/ai'
import { IoMdAddCircleOutline } from 'react-icons/io'
import FacilityIcon from '../../assets/addFacility.svg'
import CricketIcon from '../../assets/cricket.svg';
import SoccerIcon from '../../assets/soccer.svg'
import BadmintonIcon from '../../assets/badminton.svg'
import BasketballIcon from '../../assets/basketball.svg'
import VolleyballIcon from '../../assets/volleyball.svg'
import GolfIcon from '../../assets/golf.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loader from '../common/loader'
import truncateString from '../../utils/truncateString'

const BASE_URL = process.env.REACT_APP_API_ENDPOINT;
const IMG_URL = process.env.REACT_APP_IMG_URL;

const Homepage = () => {
    const [isLoading,setIsLoading] = useState(true)
  const [featuredFacility,setFeaturedFacility] = useState([])
  const [recentFacility,setRecentFacility] = useState([])
  const [sports,setSports] = useState([])
  const [venues,setVenues] = useState([])
  const [locationPermitted,setLocationPermitted] = useState(false)
  const [currentLocation,setCurrentLocation] = useState(null)

  useEffect(()=>{
    checkLocationPermission();
  },[])

  const checkLocationPermission = () =>{
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLocationPermitted(true)
        setCurrentLocation({lat:latitude,lng:longitude})
        getInitialData({lat:latitude,lng:longitude})
        // You can use latitude and longitude as needed
      }, function(error) {
        getInitialData()
        switch(error.code) {
          case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
          case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
        }
      });
    } else {
      getInitialData()
    }
  }

  
  const getInitialData = async(coords) =>{
    const featuredVenues = coords ? axios.post( `${BASE_URL}/searchLocation`, {...coords, count:4}) : axios.get(`${BASE_URL}/get-featured-facility/4`);
    const recentVenues = axios.get(`${BASE_URL}/get-recent-facility/3`);
    const sports = axios.get(`${BASE_URL}/get-all-sports`);
    const venues = axios.get(`${BASE_URL}/get-all-venues`);
    // you could also use destructuring to have an array of responses
    await axios.all([featuredVenues, recentVenues, sports, venues]).then(axios.spread(function(res1, res2, res3, res4) {
      setFeaturedFacility(res1.data.facility);
      setRecentFacility(res2.data.facility)
            setSports(res3.data.data)
            setVenues(res4.data.data)
      setIsLoading(false)
    }));
  }

  return (<>
    {isLoading ?
        <Loader/>
      :
      <Default>
      <section>
        <div className='customize-map-box-shadow-h'></div>
        <LocationAwareMap nearbyMarkers={currentLocation &&  featuredFacility.length > 0 ? true : false}/>
      </section>
      <section className='search-wrapper-h py-3'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <label className='mb-1'>Sports</label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon2" data-bs-toggle="dropdown">
                <MdSportsTennis className='custom-icons-h'/>
              </span>
              <div className="dropdown custom-dropdown-h" id="basic-addon2">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"  disabled={sports.length > 0 ? false : true}>
                  Type of sport
                </button>
                {sports.length > 0 ? 
                <ul className="dropdown-menu">
                  {sports.map((item,index)=>{
                    return <li key={index}><a className="dropdown-item" href="">{item.name}</a></li>
                  })}
                </ul>
                : null}
              </div>
            </div>
          </div>
          <div className='col-6'>
            <label className='mb-1'>Venue</label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon2" data-bs-toggle="dropdown">
                <CiLocationOn className='custom-icons-h'/>
              </span>
              <div className="dropdown custom-dropdown-h" id="basic-addon2">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" disabled={venues.length > 0 ? false : true}>
                  Type of venue
                </button>
                {venues.length > 0 ? 
                <ul className="dropdown-menu">
                  {venues.map((item,index)=>{
                  return <li key={index}><a className="dropdown-item" href="">{item.name}</a></li>
                })}
                </ul>
                : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      {featuredFacility.length > 0 ?
      <section className='featured-venue-h py-5 mb-5'>
        <div className='container'>
        <h2 className='main-heading'>~Featured Facility {locationPermitted ? " Near You" : null}~</h2>
        <div className='row'>
          {featuredFacility.map((item,index)=>{
            const imgURL = item.featured_image.replace(/\\\//g, '/');
            return (<div className='col-3 venue-cart-container' key={`${item.official_name}-${index}`}>
            <div className="venue-card">
              <div className='venue-card-header'>
              <img src={`${IMG_URL}${imgURL}`} className="card-img-top" alt="venue card" loading={lazy}/>
              <div className='venue-rating'>
                4.5 <AiFillStar className='ms-1'/>
              </div>
              <div className='venue-detail'>
                <h6 className='venue-name'>{item.official_name}</h6>
                <p className='venue-distance'>(~0.5 Km)</p>
              </div>
              </div>
              <div className="venue-card-body">
              <div className='venue-icons'>
                <span className='me-3'>
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9415 13.0974C14.592 12.4432 15.1089 11.6632 15.4623 10.8029C15.8156 9.94251 15.9984 9.0189 15.9999 8.08567C16.0046 7.23397 15.844 6.38979 15.5272 5.60213C15.2105 4.81447 14.744 4.09901 14.1548 3.49728C13.4651 2.80291 12.6306 2.27749 11.7139 1.96052C10.7972 1.64355 9.82223 1.54326 8.86221 1.6672C8.61492 1.08301 8.17827 0.603942 7.6259 0.310789C7.07353 0.0176363 6.43924 -0.0716616 5.83 0.0579553C5.22077 0.187572 4.67387 0.528173 4.28153 1.02232C3.88919 1.51646 3.67542 2.13391 3.67628 2.77053C3.67763 3.3599 3.86467 3.93312 4.20965 4.40513C3.85132 4.8522 3.54962 5.3438 3.31172 5.86823L3.29883 5.90421C2.88861 6.83327 2.68913 7.84523 2.71532 8.86433C2.7415 9.88344 2.99268 10.8833 3.45004 11.789L0.789091 14.0436C0.560284 14.2416 0.372894 14.4849 0.238143 14.7587C0.103391 15.0326 0.0240499 15.3315 0.00487105 15.6374C-0.0153527 15.9372 0.0275529 16.238 0.130689 16.5194C0.233825 16.8007 0.394789 17.0562 0.602706 17.2684C0.626594 17.3062 0.654941 17.3409 0.687107 17.3716C1.08592 17.7728 1.62238 17.9983 2.1817 18C2.21686 18 2.25437 18 2.29071 18C2.58434 17.9834 2.8716 17.9058 3.13499 17.772C3.39838 17.6382 3.6324 17.451 3.82281 17.2217L6.05004 14.4574C6.93516 14.9215 7.911 15.176 8.9053 15.202C9.89959 15.2279 10.8869 15.0247 11.794 14.6073C11.8167 14.5985 11.839 14.5885 11.8608 14.5773C12.636 14.2165 13.3409 13.7151 13.9415 13.0974ZM13.3272 4.34277C13.8071 4.83345 14.1868 5.41681 14.4444 6.05895C14.702 6.70108 14.8323 7.38918 14.8277 8.08327C14.8258 8.85879 14.6733 9.62619 14.3789 10.3408C14.0844 11.0555 13.654 11.703 13.1127 12.2459C12.6966 12.663 12.2226 13.015 11.706 13.2905L4.57655 6.00255C4.72538 5.71651 4.89794 5.44407 5.09233 5.18825C5.48636 5.41447 5.92996 5.53494 6.38178 5.53843C7.08557 5.53649 7.7609 5.25393 8.26432 4.75076C8.76774 4.2476 9.0596 3.56347 9.0779 2.84368C9.85087 2.75466 10.6335 2.84338 11.3687 3.10335C12.1038 3.36333 12.773 3.788 13.3272 4.34636V4.34277ZM6.38295 1.20549C6.68664 1.20549 6.98349 1.29768 7.23593 1.47039C7.48837 1.6431 7.68504 1.88856 7.80104 2.17569C7.91704 2.46282 7.94715 2.77871 7.88756 3.08335C7.82797 3.388 7.68137 3.66771 7.4663 3.88707C7.25124 4.10642 6.97739 4.25555 6.67942 4.31558C6.38146 4.37561 6.07279 4.34384 5.79249 4.22429C5.51219 4.10473 5.27287 3.90278 5.10483 3.64399C4.93679 3.3852 4.84758 3.08122 4.84851 2.77053C4.85006 2.35511 5.01237 1.95723 5.29993 1.66393C5.5875 1.37064 5.9769 1.2058 6.38295 1.20549ZM6.22822 13.1802C6.10819 13.1015 5.96427 13.0703 5.82337 13.0924C5.68248 13.1144 5.55428 13.1883 5.46276 13.3001L2.91903 16.4541C2.83268 16.5561 2.72715 16.6392 2.60873 16.6986C2.49031 16.7579 2.36142 16.7922 2.22976 16.7995C2.10122 16.8061 1.9727 16.7861 1.85186 16.7408C1.73103 16.6955 1.62035 16.6257 1.52642 16.5357C1.50693 16.5103 1.48619 16.4858 1.46429 16.4625C1.36375 16.3645 1.28549 16.245 1.23505 16.1126C1.18461 15.9802 1.16323 15.838 1.17241 15.6962C1.19622 15.4101 1.32932 15.1451 1.54283 14.9587L4.58124 12.3898C4.69112 12.2961 4.7637 12.1645 4.78529 12.0198C4.80689 11.8751 4.776 11.7273 4.69847 11.6043C4.3026 10.956 4.04448 10.2297 3.94087 9.47271C3.83727 8.71568 3.8905 7.94482 4.09711 7.21021L10.5256 13.787C9.8072 13.9971 9.05378 14.0513 8.31371 13.946C7.57364 13.8406 6.86328 13.5781 6.22822 13.1754V13.1802Z" fill="#282524"/>
                </svg>
                </span>
                <span className='me-3'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.8455 8.69659L17.246 8.50271C16.9769 8.41327 16.7428 8.24106 16.5772 8.01063C16.4116 7.7802 16.3229 7.50331 16.3238 7.21944V5.36378C16.319 4.91475 16.1386 4.48546 15.8214 4.16792C15.5042 3.85039 15.0754 3.66987 14.6268 3.66507H12.7823C12.4987 3.66592 12.2221 3.57712 11.9919 3.41134C11.7617 3.24557 11.5897 3.01127 11.5004 2.74186L11.3067 2.14177C11.1949 1.82714 10.9939 1.55197 10.7283 1.34994C10.4627 1.1479 10.144 1.02778 9.81125 1.00426C9.4785 0.98075 9.14611 1.05487 8.85479 1.21755C8.56346 1.38023 8.32584 1.62441 8.17102 1.9202L3.55973 11.1523L2.14868 12.5372C1.60678 13.06 1.23442 13.7339 1.07993 14.4712C0.92544 15.2086 0.995953 15.9754 1.28232 16.6722C1.56868 17.3689 2.05767 17.9634 2.68581 18.3785C3.31394 18.7935 4.05221 19.0099 4.80478 18.9996C5.80028 18.9986 6.75502 18.6037 7.46088 17.901L8.82582 16.5347L18.0484 11.9186C18.3525 11.7672 18.6048 11.5289 18.7735 11.2339C18.9421 10.9388 19.0195 10.6003 18.9958 10.2612C18.9721 9.92206 18.8484 9.59762 18.6403 9.32895C18.4323 9.06028 18.1492 8.85948 17.8271 8.75198L17.8455 8.69659ZM14.6268 5.04989C14.7149 5.04989 14.7993 5.08491 14.8616 5.14724C14.9239 5.20957 14.9588 5.2941 14.9588 5.38225V7.21021C14.9672 7.52623 15.0296 7.83848 15.1433 8.13343L9.27773 11.4016L8.56759 10.6907L11.86 4.86525C12.1547 4.97903 12.4666 5.04148 12.7823 5.04989H14.6268ZM8.54914 15.076L4.92467 11.4478L5.71781 9.85983L10.1354 14.282L8.54914 15.076ZM9.36995 2.53875C9.40016 2.48003 9.44673 2.43133 9.50402 2.39856C9.56131 2.36579 9.62687 2.35035 9.69274 2.35411C9.76574 2.35166 9.83741 2.37407 9.89604 2.41767C9.95467 2.46126 9.99679 2.52348 10.0155 2.59414L10.2184 3.19423C10.3213 3.53212 10.4906 3.84602 10.7164 4.11745L7.53466 9.72135L6.3265 8.5581L9.36995 2.53875ZM3.12627 16.8763C2.68248 16.4299 2.43334 15.8258 2.43334 15.196C2.43334 14.5663 2.68248 13.9621 3.12627 13.5158L4.04853 12.5925L7.43321 15.9161L6.51095 16.8393C6.2921 17.0659 6.03051 17.2467 5.74133 17.3714C5.45215 17.496 5.14114 17.562 4.82632 17.5654C4.51149 17.5688 4.19912 17.5097 3.90729 17.3914C3.61547 17.2731 3.35 17.098 3.12627 16.8763ZM17.4489 10.6261L11.4358 13.6727L10.2738 12.5002L15.9364 9.35207C16.1939 9.57288 16.4913 9.74213 16.8126 9.8506L17.3936 9.97985C17.4548 9.99999 17.5086 10.038 17.548 10.089C17.5875 10.14 17.6108 10.2017 17.6149 10.266C17.6329 10.336 17.6262 10.41 17.5959 10.4756C17.5657 10.5412 17.5138 10.5944 17.4489 10.6261Z" fill="#282524"/>
                </svg>
                </span>
                <span className='me-3'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9375 8.1875L10.875 7.375C10.25 6.875 9.24998 6.875 8.56248 7.375L7.49998 8.1875C6.87498 8.6875 6.62498 9.5 6.87498 10.25L7.31248 11.625C7.56248 12.4375 8.24998 12.9375 9.12498 12.9375H10.375C11.1875 12.9375 11.9375 12.4375 12.1875 11.625L12.625 10.25C12.8125 9.4375 12.5625 8.625 11.9375 8.1875ZM11.375 9.8125L11 11.1875C10.9375 11.4375 10.6875 11.625 10.375 11.625H9.12498C8.87498 11.625 8.62498 11.4375 8.49998 11.1875L8.06248 9.8125C7.99998 9.5625 8.06248 9.3125 8.24998 9.125L9.31248 8.3125C9.43748 8.25 9.56248 8.1875 9.68748 8.1875C9.81248 8.1875 9.93748 8.25 10.0625 8.3125L11.125 9.125C11.375 9.3125 11.5 9.5625 11.375 9.8125Z" fill="#282524"/>
                <path d="M18 9.31429C17.8857 7.88571 17.3714 6.51429 16.5143 5.37143C15.5429 3.94286 14.0571 2.91429 12.4 2.4C11.6 2.11429 10.8 2 10 2C9.6 2 9.2 2.05714 8.8 2.11429C8.4 2.17143 8 2.28571 7.6 2.4C5.94286 2.85714 4.45714 3.94286 3.48571 5.37143L3.14286 5.88571C2.4 7.08571 2 8.51429 2 9.94286V10C2 11.7143 2.51429 13.3714 3.54286 14.7429C4.51429 16.0571 5.88571 17.0286 7.42857 17.5429H7.48571C8.28571 17.8857 9.14286 18 10 18C10.8571 18 11.7143 17.8857 12.5143 17.6H12.5714C12.9714 17.4857 13.3143 17.3143 13.7143 17.1429C14.8 16.5714 15.7143 15.7714 16.4571 14.8C17.4857 13.3714 18 11.7143 18 10V9.31429ZM15.7143 7.77143L16.0571 6.8V6.85714L16.2286 7.2C16.2286 7.25714 16.2857 7.31429 16.2857 7.37143L16.4571 7.88571L16.6286 8.4C16.6286 8.45714 16.6286 8.51429 16.6857 8.57143C16.6857 8.68571 16.7429 8.8 16.7429 8.97143V9.02857L15.8857 8.45714C15.7143 8.28571 15.6571 8 15.7143 7.77143ZM8.91429 3.25714C8.97143 3.25714 9.08571 3.25714 9.14286 3.2C9.25714 3.2 9.37143 3.2 9.42857 3.14286H10.4571C10.5714 3.14286 10.6857 3.14286 10.7429 3.2C10.8 3.2 10.9143 3.2 10.9714 3.25714H11.0286L10.2286 3.88571C10 4.05714 9.71429 4.05714 9.54286 3.88571L8.85714 3.25714H8.91429ZM3.2 8.97143C3.2 8.85714 3.25714 8.74286 3.25714 8.62857C3.25714 8.57143 3.25714 8.51429 3.31429 8.45714L3.48571 7.94286V7.88571C3.54286 7.71429 3.6 7.6 3.65714 7.42857C3.65714 7.37143 3.71429 7.31429 3.77143 7.25714C3.82857 7.14286 3.88571 7.02857 3.88571 6.97143C3.88571 6.97143 3.88571 6.91429 3.94286 6.91429L4.28571 7.77143C4.4 8 4.28571 8.28571 4.05714 8.45714L3.2 8.97143ZM6.91429 16.1143C6.8 16.0571 6.68571 16 6.62857 15.9429C6.57143 15.8857 6.51429 15.8857 6.45714 15.8286C6.34286 15.7714 6.17143 15.6571 6.05714 15.5429C6.05714 15.5429 6 15.5429 6 15.4857C5.82857 15.3714 5.71429 15.2571 5.54286 15.1429C5.48571 15.1429 5.48571 15.1429 5.42857 15.0857C5.31429 14.9714 5.2 14.9143 5.14286 14.8V14.7429L6.17143 14.6857C6.4 14.6857 6.62857 14.8571 6.74286 15.0857L6.91429 16.1143ZM14.8571 14.8C14.7429 14.9143 14.6857 14.9714 14.5714 15.0286C14.5714 15.1429 14.5143 15.1429 14.4571 15.2C14.3429 15.3143 14.1714 15.4286 14 15.5429C13.9429 15.5429 13.9429 15.6 13.8857 15.6C13.7714 15.6571 13.6571 15.7714 13.5429 15.8286C13.4857 15.8857 13.4286 15.8857 13.3714 15.9429C13.2571 16 13.2 16.0571 13.0857 16.1143H13.0286L13.3143 15.1429C13.3714 14.9143 13.6 14.7429 13.8857 14.7429L14.8571 14.8ZM15.7714 13.6571L13.8857 13.6C13.1429 13.6 12.4571 14.1143 12.2286 14.8571L11.7143 16.6286C10.5714 16.9143 9.42857 16.9143 8.28571 16.6286L7.77143 14.8571C7.54286 14.1143 6.85714 13.6 6.05714 13.6L4.17143 13.6571C3.54286 12.6857 3.2 11.5429 3.14286 10.4L4.68571 9.37143C5.31429 8.91429 5.6 8.11429 5.31429 7.37143L4.74286 5.65714C5.48571 4.74286 6.45714 4.05714 7.48571 3.65714L8.97143 4.8C9.25714 5.02857 9.65714 5.14286 10 5.14286C10.3429 5.14286 10.7429 5.02857 11.0286 4.8L12.5143 3.65714C13.6 4.05714 14.5143 4.8 15.2571 5.65714L14.6286 7.42857C14.3429 8.17143 14.6286 8.97143 15.2571 9.42857L16.8 10.4571C16.7429 11.6 16.4 12.6857 15.7714 13.6571Z" fill="#282524"/>
                </svg>
                </span>
                </div>
                <p className='venue-description'>
                  {truncateString(item.description,200)}
                </p>
                <Link to={`/facility/${item.slug}`} className='btn venue-booking-btn'>Book Now</Link>
              </div>
            </div>
          </div>)
          })}
        </div>
        </div>
      </section> : null}
      
      <section className='add-facility-h'>
        <div className='container'>
          <div className='row'>
            <div className='col-7 d-flex align-items-center'>
              <div className='facility-content-f p-5'>
                <h2 className='facility-heading-f'>Looking to Add your Facility?</h2>
                <p className='facility-description-f'>Lorem ipsum dolor sit amet consectetur. Imperdiet id sed ut velit odio porttitor. Mi maecenas mauris scelerisque enim non felis elementum.</p>
                <button type='button' className='btn facility-button-f'>Click to Add your Facilities
                  <IoMdAddCircleOutline className='ms-2 add-icon'/>
                </button>
              </div>
            </div>
            <div className='col-5'>
              <div className='add-facility-icon-wrapper-f'>
                <img src={FacilityIcon} alt='Add Facility' className='add-facility-icon-f'  loading={lazy}/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='recent-add-h'>
        <div className='container'>
        <h2 className='main-heading'>~Recently Added Sports~</h2>
          <div className='row g-3'>
          <div className='col-2 recent-add-sport-card-wrapper-h'>
              <div className='recent-add-sport-card-h'>
                <img src={CricketIcon} alt="Cricket" className='recent-add-sport-img-h w-50 mb-3' loading={lazy}/>
                <h6 className='recent-add-sport-card-heading-h'>Cricket</h6>
                <p className='recent-add-sport-desc-h'>Lorem ipsum dolor sit amet consectetur. Imperdiet id sed ut velit odio porttitor.</p>
              </div>
            </div>
            <div className='col-2 recent-add-sport-card-wrapper-h'>
              <div className='recent-add-sport-card-h'>
                <img src={SoccerIcon} alt="Cricket" className='recent-add-sport-img-h w-50 mb-3' loading={lazy}/>
                <h6 className='recent-add-sport-card-heading-h'>Soccer</h6>
                <p className='recent-add-sport-desc-h'>Lorem ipsum dolor sit amet consectetur. Imperdiet id sed ut velit odio porttitor.</p>
              </div>
            </div>
            <div className='col-2 recent-add-sport-card-wrapper-h'>
              <div className='recent-add-sport-card-h'>
                <img src={BadmintonIcon} alt="Cricket" className='recent-add-sport-img-h w-50 mb-3' loading={lazy}/>
                <h6 className='recent-add-sport-card-heading-h'>Badminton</h6>
                <p className='recent-add-sport-desc-h'>Lorem ipsum dolor sit amet consectetur. Imperdiet id sed ut velit odio porttitor.</p>
              </div>
            </div>
            <div className='col-2 recent-add-sport-card-wrapper-h'>
              <div className='recent-add-sport-card-h'>
                <img src={BasketballIcon} alt="Cricket" className='recent-add-sport-img-h w-50 mb-3' loading={lazy}/>
                <h6 className='recent-add-sport-card-heading-h'>Basketball</h6>
                <p className='recent-add-sport-desc-h'>Lorem ipsum dolor sit amet consectetur. Imperdiet id sed ut velit odio porttitor.</p>
              </div>
            </div>
            <div className='col-2 recent-add-sport-card-wrapper-h'>
              <div className='recent-add-sport-card-h'>
                <img src={VolleyballIcon} alt="Cricket" className='recent-add-sport-img-h w-50 mb-3' loading={lazy}/>
                <h6 className='recent-add-sport-card-heading-h'>Volleyball</h6>
                <p className='recent-add-sport-desc-h'>Lorem ipsum dolor sit amet consectetur. Imperdiet id sed ut velit odio porttitor.</p>
              </div>
            </div>
            <div className='col-2 recent-add-sport-card-wrapper-h'>
              <div className='recent-add-sport-card-h'>
                <img src={GolfIcon} alt="Cricket" className='recent-add-sport-img-h w-50 mb-3' loading={lazy}/>
                <h6 className='recent-add-sport-card-heading-h'>Golf</h6>
                <p className='recent-add-sport-desc-h'>Lorem ipsum dolor sit amet consectetur. Imperdiet id sed ut velit odio porttitor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {recentFacility.length > 0 ? 
      <section className='recent-add-h recent-venue-h pt-5'>
        <div className='container'>
        <h2 className='main-heading pt-5'>~Recently Added Facilities~</h2>
          <div className='row'>
          {recentFacility.map((item,index)=>{
            const imgURL = item.featured_image.replace(/\\\//g, '/');
            return(
            <div className='col-4 recent-add-card-wrapper-h' key={`${item.official_name}-${index}`}>
              <div className='recent-add-card-h p-4'>
                <img src={`${IMG_URL}${imgURL}`} alt="facility name" className='recent-add-img-h w-100' loading={lazy}/>
                <h6 className='recent-add-card-heading-h'>{item.official_name}</h6>
                <p className='recent-add-desc-h'>{truncateString(item.description,200)}</p>
              </div>
            </div>)
          })}
          </div>
        </div>
      </section>: null}
      
      {/* end recently added section */}
      </Default>
    }
    </>
    
  )
}

export default Homepage