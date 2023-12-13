import React from 'react'
import "../../css/BecomeProvider.css";

 const FooterProvider = ({ backClick, nextClick }) =>{
  return (
    <div className="footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 p-0">
          <div className="footer-line"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
        <div className="my-componenet-button ps-5">
          <button className="get-started-button " type='button' onClick={()=>backClick()}>
          Back
          </button>
        </div>
        </div>
        <div className="col-md-6 footer-next-button">
        <div className="my-componenet-button ps-5">
          <button className="get-started-button" type='button' onClick={()=>nextClick()}>
          Next
          </button>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FooterProvider