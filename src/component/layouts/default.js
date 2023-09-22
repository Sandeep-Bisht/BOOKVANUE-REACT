import React from 'react'
import { Header } from '../ui/header'
import { Footer } from '../ui/footer'
import BootstrapModal from '../common/bootstrapmodal'

export const Default = ({children}) => {
  return (<>
            <Header/>
            {children}
            <BootstrapModal modalId="loginModal" centered className="login-modal-container">
              <div className='modal-wrapper-login p-5 text-center'>
                <div className='px-5'>
                <h2 className='login-modal-heading'>Login to BookVenue</h2>
                <p className='login-modal-info mb-4'>Please enter your mobile number</p>
                <div class="input-group mb-3 login-modal-inputGroup">
                  <span class="input-group-text" id="mobileNo">+91</span>
                  <input type="text" class="form-control" placeholder="Mobile Number" aria-label="Mobile Number" aria-describedby="mobileNo"/>
                </div>
                <button type='button' className='btn btn-primary w-100 login-modal-button'>Get OTP</button>
                </div>
              </div>
            </BootstrapModal>
            <Footer/>
          </>)
}