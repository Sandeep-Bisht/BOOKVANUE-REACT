import React from 'react'
import BootstrapModal from '../common/bootstrapmodal'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { Toast } from 'primereact/toast';
import { ImSpinner7 } from 'react-icons/im'
import { MdModeEdit } from 'react-icons/md'
import { useContext } from 'react';
import { FaRegUser } from 'react-icons/fa'
import { FaPersonChalkboard } from 'react-icons/fa6'
import { Context as AuthContext }  from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

export const Login = () => {
    const navigate = useNavigate();
    const { state, userLoggedIn } = useContext(AuthContext);
    const [otpView,setOtpView] = useState(false);
    const [mobile,setMobile] = useState('');
    const [OTP,setOTP] = useState('');
    const toast = useRef(null);
    const buttonRef = useRef(null);
    const [resendCountdown, setResendCountdown] = useState(60);
    const [signupUserType,setSignupUserType] = useState('user')
  

    const resetLoginState = () =>{
      setOtpView(false);
      setMobile('');
      setOTP('');
      setResendCountdown(60)
      setSignupUserType('user')
  }

    const handleChange = (e) =>{
  
      if( e.target.id == 'mobile' &&  /^[0-9]{0,10}$/.test(e.target.value)){
        setMobile(e.target.value)
      }
  
      if(e.target.id == 'otp' &&  /^[0-9]{0,6}$/.test(e.target.value)){
        setOTP(e.target.value)
      }
  
    }
  
    useEffect(()=>{
        resetLoginState()
    },[state.loginState,state.currentmodal])

    useEffect(() => {
      let intervalId;
  
      if (resendCountdown > 0) {
        intervalId = setInterval(() => {
          setResendCountdown(resendCountdown - 1);
        }, 1000);
      }
  
      return () => clearInterval(intervalId);
    }, [resendCountdown]);
  
  
    const handleResendOTP = () => {
      if(mobile !== '' && /^[0-9]{10}$/.test(mobile)){
        sendOTP.mutate({mobile,url:'/login'})
      }
      else{
        setOtpView(false)
        toast.current.show({severity:'error', summary: 'Error', detail:`Invalid Mobile No.`, life: 2000});
      }
    };
  
    const sendOTP = useMutation(
      ({url,...formData}) => fetch(`${BASE_URL}${url}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .catch((error) => {
          throw error;
        }),
      {
        onSuccess: (data) => {
            toast.current.show({severity:'success', summary: 'Success', detail:`${data.message}`, life: 2000});
            setOtpView(true);
            setResendCountdown(60);
        },
        onError: (error) => {
          toast.current.show({severity:'error', summary: 'Error', detail:`${error.message}`, life: 2000});
        }
      }
    );
  
    const verifyOTP = useMutation(
      ({url,...formData}) => fetch(`${BASE_URL}${url}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .catch((error) => {
          throw error;
        }),
      {
        onSuccess: (data) => {
            toast.current.show({severity:'success', summary: 'Success', detail:`${data.message}`, life: 2000});
            if(data){
              try{
              buttonRef.current.click();
              userLoggedIn(
                {
                    token:data.token
                  }
              )
              resetLoginState();
              navigate('/management/dashboard');
              }
              catch(error){
                console.log(error,'error while logging in')
                throw new Error('Something went wrong while trying to loggen in.');
              }

            }
            else{
              toast.current.show({severity:'error', summary: 'Error', detail:`something went wrong while logging in.`, life: 2000});
            }
          
        },
        onError: (error) => {
          toast.current.show({severity:'error', summary: 'Error', detail:`${error.message}`, life: 2000});
        }
      }
    );
  
    const handleLogin = () =>{
      if(mobile !== '' && /^[0-9]{10}$/.test(mobile)){
        sendOTP.mutate({mobile,url:'/login'})
      }
      else{
        toast.current.show({severity:'error', summary: 'Error', detail:`Invalid Mobile No.`, life: 2000});
      }
    }
  
    const handleOTP = () =>{
      if(OTP !== '' && /^[0-9]{6}$/.test( OTP)){
        verifyOTP.mutate({
          'mobile':mobile,
          'otp':OTP,
          'url':'/verify-otp'
        })
      }
      else{
        toast.current.show({severity:'error', summary: 'Error', detail:`Invalid OTP.`, life: 2000});
      }
    }

    const handleSignUp = () =>{
      if(mobile !== '' && /^[0-9]{10}$/.test(mobile) && (signupUserType == 'user' || signupUserType == 'vendor')){
        sendOTP.mutate({mobile,role:signupUserType,url:'/register'})
      }
      else{
        toast.current.show({severity:'error', summary: 'Error', detail:`Invalid Mobile No.`, life: 2000});
      }
    }

    const handleSignupOTP = () =>{
      if(OTP !== '' && /^[0-9]{6}$/.test( OTP) && mobile){
        verifyOTP.mutate({
          'mobile':mobile,
          'otp':OTP,
          'url':'/verify-register-user'
        })
      }
      else{
        toast.current.show({severity:'error', summary: 'Error', detail:`Invalid OTP.`, life: 2000});
      }
    }
    
  return (
    <>
    <Toast ref={toast} position="bottom-right"/>
    <button  ref={buttonRef} type="button" className="btn d-none" data-bs-dismiss="modal" data-bs-target="#loginModal" aria-label="Close"></button>
    <BootstrapModal modalId="loginModal" centered className="login-modal-container">
      {state.currentmodal == 'login' ? <div className='modal-wrapper-login p-5 text-center'>
                <div className='px-5'>
                <h2 className='login-modal-heading'>Login to BookVenue</h2>
                <p className='login-modal-info mb-4'>Please enter your mobile number</p>
                {otpView 
                ?
                <>
                <div className="input-group login-modal-inputGroup">
                  <input type="text" value={`+91 ${mobile}`} className="form-control" readOnly/>
                  <span className="input-group-text cursor-pointer" onClick={()=>{setOtpView(false)}}> 
                    <MdModeEdit/>
                  </span>
                  </div>
                  {resendCountdown > 0 ? 
                  <div className='mt-2 mb-3 w-100 text-start'>
                  <span className='desc-text me-2'>Resend OTP in {resendCountdown} seconds</span>
                  </div>
                  : 
                  <span className='primary-hover-text cursor-pointer mt-2 mb-3 d-flex w-fit' onClick={()=>handleResendOTP()}>Resend OTP</span>
                  }
                  <div className="input-group login-modal-inputGroup mb-4">
                  <input 
                    id="otp" 
                    type="text" 
                    value={OTP} 
                    onChange={(e)=>handleChange(e)} 
                    className="form-control" 
                    placeholder="Enter OTP" 
                    aria-label="Enter OTP" 
                    aria-describedby="otp"
                  />
                  </div>
                  <button type='button' className='btn btn-primary w-100 login-modal-button' onClick={()=>handleOTP()} disabled={verifyOTP.isLoading ? true : false}>
                    {verifyOTP.isLoading ? <>
                      Submit
                      <ImSpinner7 className='pi-spin ms-2'/>
                      </> : 'Submit'}
                  </button>
                </>
                :
                <>
                  <div className="input-group mb-3 login-modal-inputGroup">
                  <span className="input-group-text" id="mobileNo">
                  +91
                  </span>
                  <input 
                    id="mobile" 
                    type="text" 
                    value={mobile} 
                    onChange={(e)=>handleChange(e)} 
                    className="form-control" 
                    placeholder="Mobile Number" 
                    aria-label="Mobile Number" 
                    aria-describedby="mobileNo"
                  />
                  </div>
                  <button 
                      type='button' 
                      className='btn btn-primary w-100 login-modal-button' 
                      onClick={()=>handleLogin()}
                      disabled ={sendOTP.isLoading ? true : false}
                  >
                    {
                      sendOTP.isLoading ? <>
                      Get OTP
                      <ImSpinner7 className='pi-spin ms-2'/>
                      </> : 'Get OTP'
                    }
                  </button>
                </>
                }
                </div>
              </div> 
              :
              
              <div className='modal-wrapper-login p-5 text-center'>
              <div className='px-5'>
              <h2 className='login-modal-heading'>~New Registration~</h2>
              <p className='login-modal-info mb-4'>Select the type of registration</p>
                <div className='row'>
                  <div className='col-6'>
                  <button type='button' className={`btn choose-user-type-sign ${signupUserType == 'user' ? 'active' :''}`} onClick={()=>setSignupUserType('user')} disabled ={(sendOTP.isLoading || otpView) ? true : false}>
                    <span className='user-type-icon-sign'>
                    <FaRegUser/>
                    </span>
                    <span className='user-type-text-sign'>
                    Continue as a Normal user
                    </span>
                  </button>
                  </div>
                  <div className='col-6'>
                  <button  type='button' className={`btn choose-user-type-sign ${signupUserType == 'vendor' ? 'active' :''}`} onClick={()=>setSignupUserType('vendor')} disabled ={(sendOTP.isLoading || otpView) ? true : false}>
                  <span className='user-type-icon-sign'>
                  <FaPersonChalkboard />
                    </span>
                    <span className='user-type-text-sign'>
                    Continue as a facility provider
                    </span>
                  </button>
                  </div>
                </div>
                {otpView 
                ?
                <>
                <div className='row mt-5'>
                  <div className='col-6'>
                    <div className="input-group login-modal-inputGroup mb-4">
                    <input 
                      id="otp" 
                      type="text" 
                      value={OTP} 
                      onChange={(e)=>handleChange(e)} 
                      className="form-control" 
                      placeholder="Enter OTP" 
                      aria-label="Enter OTP" 
                      aria-describedby="otp"
                    />
                    </div>
                    {resendCountdown > 0 ? 
                    <div className='mt-2 mb-3 w-100 text-start'>
                    <span className='desc-text me-2'>Resend OTP in {resendCountdown} seconds</span>
                    </div>
                    : 
                    <span className='primary-hover-text cursor-pointer mt-2 mb-3 d-flex w-fit' onClick={()=>handleResendOTP()}>Resend OTP</span>
                    }
                  </div>
                  <div className='col-6'>
                  <button type='button' className='btn btn-primary w-100 login-modal-button' onClick={()=>handleSignupOTP()} disabled={verifyOTP.isLoading ? true : false}>
                    {verifyOTP.isLoading ? <>
                      Submit
                      <ImSpinner7 className='pi-spin ms-2'/>
                      </> : 'Submit'}
                  </button>
                  </div>
                </div>
                </>
                :
                <>
                <div className='row mt-5'>
                  <div className='col-6'>
                    <div className="input-group login-modal-inputGroup">
                    <span className="input-group-text" id="mobileNo">
                    +91
                    </span>
                    <input 
                      id="mobile" 
                      type="text" 
                      value={mobile} 
                      onChange={(e)=>handleChange(e)} 
                      className="form-control" 
                      placeholder="Mobile Number" 
                      aria-label="Mobile Number" 
                      aria-describedby="mobileNo"
                    />
                    </div>
                  </div>
                  <div className='col-6'>
                  <button 
                      type='button' 
                      className='btn btn-primary w-100 login-modal-button h-100' 
                      onClick={()=>handleSignUp()}
                      disabled ={sendOTP.isLoading ? true : false}
                  >
                    {
                      sendOTP.isLoading ? <>
                      Get OTP
                      <ImSpinner7 className='pi-spin ms-2'/>
                      </> : 'Get OTP'
                    }
                  </button>
                  </div>
                </div>
                </>
                }
              </div>
            </div> 
              }
            </BootstrapModal>
            </>
  )
}