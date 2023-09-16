import React, { lazy } from 'react'
import { Default } from '../layouts/default'
import LocationAwareMap from '../common/googlemap'
import '../../css/homepage.css'
import { BiSearchAlt2 } from "react-icons/bi"
import { MdSportsTennis, MdOutlineSportsCricket, MdOutlineSportsFootball, MdOutlineSportsTennis } from 'react-icons/md'
import { CiLocationOn, CiViewTable } from 'react-icons/ci'
import { AiFillStar } from 'react-icons/ai'
import { IoMdAddCircleOutline } from 'react-icons/io'
import FacilityIcon from '../../assets/addFacility.svg'

const Homepage = () => {
  return (
    <Default>
      {/* Google map section */}
    <section>
    <LocationAwareMap/>
    </section>
    {/* End google map section */}
    {/* Search section */}
    <section className='search-wrapper-h py-3'>
    <div className='container'>
      <div className='row'>
        {/* <div className='col-3'>
          <label htmlFor='searchText' className='mb-1'>Search</label>
          <div className="input-group">
            <label className="input-group-text" id="basic-addon1" htmlFor='searchText'>
              <BiSearchAlt2 className='custom-icons-h'/>
            </label>
            <input type="text" aria-describedby="basic-addon1" className='form-control' id="searchText" placeholder='Type your search'/>
          </div>
        </div> */}
        <div className='col-6'>
          <label className='mb-1'>Sports</label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon2" data-bs-toggle="dropdown">
              <MdSportsTennis className='custom-icons-h'/>
            </span>
            <div className="dropdown custom-dropdown-h" id="basic-addon2">
              <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Type of sport
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="">Cricket</a></li>
                <li><a className="dropdown-item" href="">BasketBall</a></li>
                <li><a className="dropdown-item" href="">Badminton</a></li>
              </ul>
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
              <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Type of venue
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="">Party Hall</a></li>
                <li><a className="dropdown-item" href="">Marriege Hall</a></li>
                <li><a className="dropdown-item" href="">Club</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className='col-3'>
          <label className='mb-1'>All</label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon2" data-bs-toggle="dropdown">
              <CiViewTable className='custom-icons-h'/>
            </span>
            <div className="dropdown custom-dropdown-h" id="basic-addon2">
              <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Find by all
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="">Venue</a></li>
                <li><a className="dropdown-item" href="">Sports</a></li>
                <li><a className="dropdown-item" href="">Marriage hall</a></li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    </section>
    {/* end search section */}
    {/* Featured venue section */}
    <section className='featured-venue-h py-5 mb-5'>
      <div className='container'>
      <h2 className='main-heading'>~Featured Venue Near You~</h2>
      <div className='row'>
        <div className='col-3 venue-cart-container'>
          <div class="venue-card">
            <div className='venue-card-header'>
            <img src="/venue.png" class="card-img-top" alt="venue card" loading={lazy}/>
            <div className='venue-rating'>
              4.5 <AiFillStar className='ms-1'/>
            </div>
            <div className='venue-detail'>
              <h6 className='venue-name'>Name of the venue</h6>
              <p className='venue-distance'>(~0.5 Km)</p>
            </div>
            </div>
            <div class="venue-card-body">
            <div className='venue-icons'>
                <MdOutlineSportsCricket className="venue-icon"/>
                <MdOutlineSportsFootball className="venue-icon"/>
                <MdOutlineSportsTennis className="venue-icon"/>
              </div>
              <p className='venue-description'>Lorem ipsum dolor sit amet consectetur. Imperdiet id sed ut velit odio porttitor.</p>
              <button type='button' className='btn venue-booking-btn'>Book Now</button>
            </div>
          </div>
        </div>
        <div className='col-3 venue-cart-container'>
          <div class="venue-card">
            <div className='venue-card-header'>
            <img src="/venue.png" class="card-img-top" alt="venue card" loading={lazy}/>
            <div className='venue-rating'>
              4.5 <AiFillStar className='ms-1'/>
            </div>
            <div className='venue-detail'>
              <h6 className='venue-name'>Name of the venue</h6>
              <p className='venue-distance'>(~0.5 Km)</p>
            </div>
            </div>
            <div class="venue-card-body">
              <div className='venue-icons'>
                <MdOutlineSportsCricket className="venue-icon"/>
                <MdOutlineSportsFootball className="venue-icon"/>
                <MdOutlineSportsTennis className="venue-icon"/>
              </div>
              <p className='venue-description'>Lorem ipsum dolor sit amet consectetur. Imperdiet id sed ut velit odio porttitor.</p>
              <button type='button' className='btn venue-booking-btn'>Book Now</button>
            </div>
          </div>
        </div>
        <div className='col-3 venue-cart-container'>
          <div class="venue-card">
            <div className='venue-card-header'>
            <img src="/venue.png" class="card-img-top" alt="venue card" loading={lazy}/>
            <div className='venue-rating'>
              4.5 <AiFillStar className='ms-1'/>
            </div>
            <div className='venue-detail'>
              <h6 className='venue-name'>Name of the venue</h6>
              <p className='venue-distance'>(~0.5 Km)</p>
            </div>
            </div>
            <div class="venue-card-body">
            <div className='venue-icons'>
                <MdOutlineSportsCricket className="venue-icon"/>
                <MdOutlineSportsFootball className="venue-icon"/>
                <MdOutlineSportsTennis className="venue-icon"/>
              </div>
              <p className='venue-description'>Lorem ipsum dolor sit amet consectetur. Imperdiet id sed ut velit odio porttitor.</p>
              <button type='button' className='btn venue-booking-btn'>Book Now</button>
            </div>
          </div>
        </div>
        <div className='col-3 venue-cart-container'>
          <div class="venue-card">
            <div className='venue-card-header'>
            <img src="/venue.png" class="card-img-top" alt="venue card" loading={lazy}/>
            <div className='venue-rating'>
              4.5 <AiFillStar className='ms-1'/>
            </div>
            <div className='venue-detail'>
              <h6 className='venue-name'>Name of the venue</h6>
              <p className='venue-distance'>(~0.5 Km)</p>
            </div>
            </div>
            <div class="venue-card-body">
            <div className='venue-icons'>
                <MdOutlineSportsCricket className="venue-icon"/>
                <MdOutlineSportsFootball className="venue-icon"/>
                <MdOutlineSportsTennis className="venue-icon"/>
              </div>
              <p className='venue-description'>Lorem ipsum dolor sit amet consectetur. Imperdiet id sed ut velit odio porttitor.</p>
              <button type='button' className='btn venue-booking-btn'>Book Now</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    {/* end featured venue section */}
    {/* Add facility section */}
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
    {/* End add facility section */}
    {/* Recently added section */}
    <section className='recent-add-h'>
      <div className='container'>
      <h2 className='main-heading'>~Recently Added Venues~</h2>
        <div className='row'>
          <div className='col-2 recent-add-card-wrapper-h'>
            <div className='recent-add-card-h'>
              <h6 className='recent-add-care-heading-h'>Facility Name</h6>
              <img src='/venue-facility.png' alt="facility name" className='recent-add-img-h w-100' loading={lazy}/>
              <p className='recent-add-desc-h'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className='col-2 recent-add-card-wrapper-h'>
            <div className='recent-add-card-h'>
              <h6 className='recent-add-care-heading-h'>Facility Name</h6>
              <img src='/venue-facility.png' alt="facility name" className='recent-add-img-h w-100' loading={lazy}/>
              <p className='recent-add-desc-h'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className='col-2 recent-add-card-wrapper-h'>
            <div className='recent-add-card-h'>
              <h6 className='recent-add-care-heading-h'>Facility Name</h6>
              <img src='/venue-facility.png' alt="facility name" className='recent-add-img-h w-100' loading={lazy}/>
              <p className='recent-add-desc-h'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className='col-2 recent-add-card-wrapper-h'>
            <div className='recent-add-card-h'>
              <h6 className='recent-add-care-heading-h'>Facility Name</h6>
              <img src='/venue-facility.png' alt="facility name" className='recent-add-img-h w-100' loading={lazy}/>
              <p className='recent-add-desc-h'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className='col-2 recent-add-card-wrapper-h'>
            <div className='recent-add-card-h'>
              <h6 className='recent-add-care-heading-h'>Facility Name</h6>
              <img src='/venue-facility.png' alt="facility name" className='recent-add-img-h w-100' loading={lazy}/>
              <p className='recent-add-desc-h'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className='col-2 recent-add-card-wrapper-h'>
            <div className='recent-add-card-h'>
              <h6 className='recent-add-care-heading-h'>Facility Name</h6>
              <img src='/venue-facility.png' alt="facility name" className='recent-add-img-h w-100' loading={lazy}/>
              <p className='recent-add-desc-h'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
        <h2 className='main-heading'>~Recently Added Sports~</h2>
        <div className='row'>
          <div className='col-2 recent-add-card-wrapper-h'>
            <div className='recent-add-card-h'>
              <h6 className='recent-add-care-heading-h'>Facility Name</h6>
              <img src='/facility.png' alt="facility name" className='recent-add-img-h w-100' loading={lazy}/>
              <p className='recent-add-desc-h'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className='col-2 recent-add-card-wrapper-h'>
            <div className='recent-add-card-h'>
              <h6 className='recent-add-care-heading-h'>Facility Name</h6>
              <img src='/facility.png' alt="facility name" className='recent-add-img-h w-100' loading={lazy}/>
              <p className='recent-add-desc-h'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className='col-2 recent-add-card-wrapper-h'>
            <div className='recent-add-card-h'>
              <h6 className='recent-add-care-heading-h'>Facility Name</h6>
              <img src='/facility.png' alt="facility name" className='recent-add-img-h w-100' loading={lazy}/>
              <p className='recent-add-desc-h'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className='col-2 recent-add-card-wrapper-h'>
            <div className='recent-add-card-h'>
              <h6 className='recent-add-care-heading-h'>Facility Name</h6>
              <img src='/facility.png' alt="facility name" className='recent-add-img-h w-100' loading={lazy}/>
              <p className='recent-add-desc-h'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className='col-2 recent-add-card-wrapper-h'>
            <div className='recent-add-card-h'>
              <h6 className='recent-add-care-heading-h'>Facility Name</h6>
              <img src='/facility.png' alt="facility name" className='recent-add-img-h w-100' loading={lazy}/>
              <p className='recent-add-desc-h'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className='col-2 recent-add-card-wrapper-h'>
            <div className='recent-add-card-h'>
              <h6 className='recent-add-care-heading-h'>Facility Name</h6>
              <img src='/facility.png' alt="facility name" className='recent-add-img-h w-100' loading={lazy}/>
              <p className='recent-add-desc-h'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end recently added section */}
    </Default>
  )
}

export default Homepage