import React, { lazy } from 'react'
import '../../css/header.css'
import Logo from '../../assets/logo.png'
import { BiSearchAlt2 } from "react-icons/bi"
import { GiHamburgerMenu } from 'react-icons/gi'

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid mx-auto mx-sm-2 mx-md-4 mx-lg-5 border-bottom">
        <a className="navbar-brand">
          <img src={Logo} alt="Book Venue" loading={lazy} height='50'/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">
      </span>
    </button>
    <div className='search-container-head'>
      <div class="input-group search-bar-wrapper">
        <span class="input-group-text" id="global-search"><BiSearchAlt2/></span>
        <input type='search' className='form-control' id="globalSearch" placeholder='Search for Sports venues, Wedding venues & Party halls' aria-label='Search for Sports venues, Wedding venues & Party halls' aria-describedby="global-search"/>
      </div>
    </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="d-flex justify-content-between my-2 my-lg-0">
          <div className='action-container'>
          {/* Calender foor booking svg */}
          <svg  className='action-icon' width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.2 2.91935V0.5H17.6V2.91935H6.4V0.5H4.8V2.91935H0V25.5H24V2.91935H19.2ZM1.6 4.53226H4.8V6.95161H6.4V4.53226H17.6V6.95161H19.2V4.53226H22.4V10.9839H1.6V4.53226ZM22.4 23.8871H1.6V12.5968H22.4V23.8871Z" fill="#00BFB4"/>
          </svg>
          {/* Calender foor booking svg end */}
          <p className='action-text'>Book</p>
          <div class="vr mx-2 mx-xl-3"></div>
          </div>

          <div className='action-container'>

          <div className='action' data-bs-toggle="modal" data-bs-target="#loginModal">
          {/* login svg */}
          <svg className='action-icon' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.6693 14.1497L16.1084 9.34812C15.6675 8.88396 14.9378 8.88396 14.4969 9.34812C14.056 9.81227 14.056 10.5805 14.4969 11.0447L17.1118 13.7976H3.14023C2.5169 13.7976 2 14.3418 2 14.998C2 15.6542 2.5169 16.1984 3.14023 16.1984H17.1118L14.4969 18.9513C14.056 19.4155 14.056 20.1837 14.4969 20.6479C14.7249 20.888 15.0138 21 15.3027 21C15.5915 21 15.8804 20.888 16.1084 20.6479L20.6693 15.8463C21.1102 15.3821 21.1102 14.6139 20.6693 14.1497Z" fill="#00BFB4"/>
          <path d="M23.7692 2H19.1538C18.5231 2 18 2.50514 18 3.11429C18 3.72343 18.5231 4.22857 19.1538 4.22857H23.7692C24.8308 4.22857 25.6923 5.06057 25.6923 6.08571V23.9143C25.6923 24.9394 24.8308 25.7714 23.7692 25.7714H19.1538C18.5231 25.7714 18 26.2766 18 26.8857C18 27.4949 18.5231 28 19.1538 28H23.7692C26.1077 28 28 26.1726 28 23.9143V6.08571C28 3.82743 26.1077 2 23.7692 2Z" fill="#00BFB4"/>
          </svg>
          {/* login svg end */}
          <p className='action-text'>Login</p>
          </div>

          <div class="vr mx-2 mx-xl-3"></div>
          </div>

          <div className='action-container'>
          {/* sign up svg */}
          <svg className='action-icon' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_118_191)">
          <path d="M20.625 6.5625H26.25" stroke="#00BFB4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M23.4375 3.75V9.375" stroke="#00BFB4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5 23.9998C6.01386 22.2418 7.47168 20.782 9.22701 19.7671C10.9823 18.7522 12.9734 18.2179 15.0001 18.2179C17.0268 18.2179 19.0178 18.7523 20.7731 19.7672C22.5284 20.7821 23.9862 22.242 25 24M21.1901 13.8997C20.7491 15.0925 19.9737 16.1323 18.9571 16.8944C17.9405 17.6564 16.7258 18.1082 15.4591 18.1954C14.1924 18.2827 12.9275 18.0017 11.8164 17.3862C10.7052 16.7708 9.79503 15.847 9.19523 14.7259C8.59543 13.6048 8.33149 12.3341 8.43512 11.0664C8.53875 9.79864 9.00555 8.58784 9.77943 7.57944C10.5533 6.57105 11.6014 5.80793 12.7977 5.38177C13.994 4.95561 15.2877 4.88454 16.5233 5.17708" stroke="#00BFB4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_118_191">
          <rect width="30" height="30" fill="white"/>
          </clipPath>
          </defs>
          </svg>

          {/* sign up svg end */}
          <p  className='action-text'>Signup</p>
          </div>
        </div>
      </div>
      </div>
      </nav>
    </header>
  )
}
