import React, { lazy } from 'react'
import '../../css/footer.css'
import Logo from '../../assets/logo.png'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { CiTwitter } from 'react-icons/ci'
import { BiLogoLinkedin } from 'react-icons/bi'

export const Footer = () => {
  return (
    <footer className='bg-dark py-5'>
      <div className='container'>
        <div className='row py-3'>
          <div className='col-3'>
            <div className='footer-logo'>
              <img src={Logo} alt="Book Venue" loading={lazy} height='50'/>
            </div>
          </div>
          <div className='col-6 d-flex align-items-center justify-content-center'>
            <div className='footer-links-wrapper'>
              <ul className='footer-links-list'>
                <li className='footer-link'>
                  <a className='footer-link-text' href=''>Home</a>
                </li>
                <li className='footer-link'>
                  <a className='footer-link-text' href=''>About us</a>
                </li>
                <li className='footer-link'>
                  <a className='footer-link-text' href=''>Contact us</a>
                </li>
                <li className='footer-link'>
                  <a className='footer-link-text' href=''>Login</a>
                </li>
                <li className='footer-link'>
                  <a className='footer-link-text' href=''>Signup</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-3 d-flex justify-content-end align-items-center'>
            <div className='footer-social-icons'>
              <FaFacebookF className='footer-social-icon'/>
              <FaInstagram className='footer-social-icon'/>
              <CiTwitter className='footer-social-icon'/>
              <BiLogoLinkedin className='footer-social-icon'/>
            </div>
          </div>
        </div>
        <hr className='footer-seprator'/>
        <div className='row footer-bottom'>
          <div className='col-1'>
            <a href='' className='footer-bottom-text'>FAQs</a>
           </div>
           <div className='col-1'>
            <a href='' className='footer-bottom-text'>Privacy Policy</a>
           </div>
           <div className='col-2'>
            <a href='' className='footer-bottom-text justify-content-center'>Terms of Service</a>
           </div>
           <div className='col-2'>
            <a href='' className='footer-bottom-text'>Cancellation Policy</a>
           </div>
           <div className='col-3'>
            <p className='footer-bottom-text m-0'>© 2023 Booknow Services Private Limited. All Rights Reserved.</p>
           </div>
           <div className='col-3'>
            <p className='footer-bottom-text  justify-content-end'>Designed & Developed by <a className='btn' href="">GIKS India Pvt LTD</a></p>
           </div>
        </div>
      </div>
    </footer>
  )
}