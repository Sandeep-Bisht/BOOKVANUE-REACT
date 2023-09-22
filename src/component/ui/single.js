import React, { useState } from 'react'
import { Default } from '../layouts/default'
import '../../css/single.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Calendar from 'react-calendar';
import { AiFillStar } from 'react-icons/ai'
import LocationAwareMap from '../common/googlemap';

const Single = () => {

    const [value, onChange] = useState(new Date());

    const handleScroll = (e) =>{
        
        const activeSlideElement = document.querySelector(`.thumb:nth-child(${e + 1})`);

        if (activeSlideElement) {
            activeSlideElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

    }
    

  return (
    <Default>
        <section className='container single-page-container mt-3'>
            <div className='row mb-5'>
                <div className='col-12'>
                    <h3 className='title-heading-si'>Name of the venue on the selected page~</h3>
                </div>
                <div className='col-8 img-carousel-container-si'>
                <Carousel
                    emulateTouch={true}
                    infiniteLoop={true}
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    autoPlay={true}
                    renderThumbs={(item)=> item}
                    onChange={(e)=>handleScroll(e)}
                    className='pb-1'
                    >
                          <div className='carousel-img-wrapper-si'>
                              <img src="/venue.png" className='carousel-img-si' alt='carousel' />
                              <div className='img-overlay-si'>
                                  <h4 className='overlay-title-si'>Hockey</h4>
                              </div>
                          </div>
                          <div 
                          className='carousel-img-wrapper-si'>
                              <img src="/facility.png" className='carousel-img-si' alt='carousel' />
                              <div className='img-overlay-si'>
                                  <h4 className='overlay-title-si'>Tennis</h4>
                              </div>
                          </div>
                          <div className='carousel-img-wrapper-si'>
                              <img src="/venue.png" className='carousel-img-si' alt='carousel' />
                              <div className='img-overlay-si'>
                                  <h4 className='overlay-title-si'>Badminton</h4>
                              </div>
                          </div>
                          <div className='carousel-img-wrapper-si'>
                              <img src="/facility.png" className='carousel-img-si' alt='carousel' />
                              <div className='img-overlay-si'>
                                  <h4 className='overlay-title-si'>BasketBall</h4>
                              </div>
                          </div>
                          <div className='carousel-img-wrapper-si'>
                              <img src="/venue.png" className='carousel-img-si' alt='carousel' />
                              <div className='img-overlay-si'>
                                  <h4 className='overlay-title-si'>Cricket</h4>
                              </div>
                          </div>
                          <div className='carousel-img-wrapper-si'>
                              <img src="/facility.png" className='carousel-img-si' alt='carousel' />
                              <div className='img-overlay-si'>
                                  <h4 className='overlay-title-si'>Football</h4>
                              </div>
                          </div>
                </Carousel>
                <div className='card mt-4'>
                    <div className='d-flex px-4 py-3 align-items-center described-si'>
                    <p className='m-0 location-name-si'>
                        Location Name 
                    </p>
                    <h6 className='rating-icon-si ms-4'>
                        <AiFillStar className='me-1'/>
                        4.5
                    </h6>
                    <span className='mx-4 rating-text-si'>(18 ratings)</span>
                    <span>
                        <a href='#' className='rate-venue-si'>Rate Venue</a>
                    </span>
                    </div>
                </div>
                <div className='mt-5 nav-tabs-si'>
                <ul class="nav nav-tabs" id="singlePageTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                        Overview
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                        Available Sports
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Amenities</button>
                </li>
                </ul>
                <div class="tab-content" id="singlePageTabContent">

                <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                <div className='tab-container-si'>
                    <h4 className='heading-si'>About the venue</h4>
                    <p className='desc-si'>Lorem ipsum dolor sit amet consectetur. Quisque fringilla non donec vestibulum mi enim. Semper arcu enim nunc sed lectus integer purus eleifend. Pellentesque maecenas porttitor facilisis pellentesque mauris id varius.</p>
                    <h4 className='heading-si'>Location Map</h4>
                    <LocationAwareMap/>
                </div>
                </div>

                <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                    <h2>profile</h2>
                Lorem ipsum dolor sit amet consectetur. Quisque fringilla non donec vestibulum mi enim. Semper arcu enim nunc sed lectus integer purus eleifend. Pellentesque maecenas porttitor facilisis pellentesque mauris id varius.
                </div>
                <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                    <h2>Contact</h2>
                Lorem ipsum dolor sit amet consectetur. Quisque fringilla non donec vestibulum mi enim. Semper arcu enim nunc sed lectus integer purus eleifend. Pellentesque maecenas porttitor facilisis pellentesque mauris id varius.
                </div>
                </div>
                </div>
                </div>
                <div className='col-4'>
                    <div className='configure-container-si'>
                    <div className='card p-3 mb-3'>
                        <p className='heading-si'>Available Sports</p>
                        <div className='d-flex flex-wrap'>
                        <span className='me-3 desc-si'>
                        <span className='me-1 icon-si'>
                            <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.6203 0.594324L16.775 0.0390829C16.3067 -0.101747 15.802 0.150141 15.6477 0.59976C15.5272 0.951885 15.6449 1.35273 15.9926 1.58567L10.0251 18.5083C9.80353 19.1421 9.24269 19.6106 8.56402 19.738C8.40416 19.7677 3.02269 20.7618 2.80119 20.8024C1.55048 21.0326 0.580184 21.9589 0.324961 23.1669L0.0249206 24.5753C-0.14614 25.3933 0.588601 26.1354 1.4579 25.9783C1.65699 25.9431 3.31994 25.6397 4.93808 25.3445C6.55616 25.052 8.12658 24.7649 8.13779 24.7622C9.92693 24.4508 11.3824 23.2184 11.9348 21.5445L18.295 2.29525C18.7212 2.31964 19.0858 2.06232 19.2092 1.69937C19.3663 1.23624 19.1026 0.737897 18.6203 0.594324ZM2.2768 25.2795C1.54485 25.4122 1.39062 25.442 1.34296 25.4474C0.883065 25.5259 0.48203 25.1305 0.574609 24.6836L0.874649 23.2752C1.08216 22.2839 1.88139 21.5228 2.90497 21.3359C2.96104 21.3251 3.03395 21.3115 3.12653 21.2953L2.2768 25.2795ZM11.3992 21.3793C10.9113 22.8609 9.62405 23.9523 8.03685 24.2313C8.03122 24.2313 7.94148 24.2476 7.79009 24.2747L8.57249 20.2878C9.60448 20.0955 10.2775 19.4725 10.5552 18.6843L16.5142 1.78878L17.751 2.15986L11.3992 21.3793ZM20 24.3045V24.9193C20 25.5151 19.4952 26 18.8783 26H13.9371C13.3202 26 12.8182 25.5152 12.8182 24.9193V24.3045C12.8182 23.7086 13.3202 23.2238 13.9371 23.2238H18.8783C19.4952 23.2237 20 23.7086 20 24.3045Z" fill="black"/>
                            </svg>
                        </span>
                        Hockey</span>
                        <span className='me-3 desc-si'>
                        <span className='me-1 icon-si'>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.1126 10.9036C22.0073 10.9036 23.5499 9.36305 23.5499 7.45455C23.5499 5.5466 22.0078 4 20.1126 4C18.2103 4 16.665 5.5466 16.665 7.45455C16.665 9.36305 18.2109 10.9036 20.1126 10.9036ZM28 19.3213V14.9544L23.3608 12.305C22.5749 11.9046 21.7012 11.7688 20.8281 11.9558C20.4706 12.03 20.1343 12.1686 19.7562 12.3798C19.715 12.3913 18.3376 13.0013 17.5371 14.8774L14.3425 21.3305C14.3425 21.3305 11.195 21.9427 9.87769 22.1979L9.55541 22.3909L8.74024 19.4313C8.40279 18.228 9.66157 16.4834 9.7087 16.4124C10.5417 15.1887 10.7698 13.5766 10.3321 11.98C9.93348 10.5362 9.02568 9.31905 7.84382 8.6343C6.91923 8.10685 5.87982 7.96165 4.93627 8.22235C4.20343 8.4242 3.55021 8.85705 3.0454 9.4791L2.65487 10.0566C1.97565 11.2572 1.81911 12.762 2.21181 14.2135C2.61046 15.671 3.50796 16.8832 4.69578 17.5586L4.98015 17.7099C5.01806 17.7126 6.97448 18.5134 7.31463 19.6624C7.3103 19.6684 7.82811 21.5472 8.25059 23.0784L7.92885 23.2269L7.99169 23.2693C7.89636 23.4172 7.72899 23.745 7.7409 24.0805C7.7409 24.1872 7.74957 24.2939 7.76961 24.3973C7.94998 25.3461 8.87565 25.9797 9.82136 25.7866L15.858 24.6074C15.858 24.6074 16.3715 24.4506 16.5914 24.2934C16.8746 24.0915 17.088 23.668 17.088 23.668L18.6745 20.4654C18.6745 20.4654 19.7681 25.6409 19.7892 25.7366L19.5374 26H27.772L27.5656 24.7884C27.5656 24.7763 27.3062 23.6273 27.3062 23.6273C27.3148 23.6356 26.5999 20.4032 26.0533 17.8732C26.6199 18.2026 27.1879 18.5293 27.7573 18.8533L28 19.3213ZM7.24801 16.6671C6.63649 16.8321 5.98327 16.7319 5.35713 16.3816C4.48509 15.8866 3.81128 14.9654 3.52258 13.8538C3.21493 12.7461 3.32705 11.6115 3.82374 10.737L4.10106 10.331C4.42821 9.9279 4.8247 9.6584 5.30026 9.52475C6.81903 9.1106 8.49162 10.3723 9.03218 12.343C9.56462 14.3048 8.76732 16.2518 7.24801 16.6671Z" fill="black"/>
                            </svg>    
                        </span>Tennis</span>
                        <span className='me-3 desc-si'>
                        <span className='me-1 icon-si'>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15 4C8.92879 4 4 8.92879 4 15C4 21.0712 8.92879 26 15 26C21.0712 26 26 21.0712 26 15C26 8.92879 21.0712 4 15 4ZM14.7124 17.244C12.7599 18.8233 10.5741 20.2517 8.27193 21.6031C9.98321 23.3466 12.3663 24.4286 15 24.4286C15.4942 24.4286 15.9798 24.3901 16.4528 24.317C16.8323 21.8766 16.2516 19.3151 14.7124 17.244ZM17.5009 14.7022C16.9973 15.2263 16.4669 15.7339 15.9138 16.2257C17.618 18.4744 18.3424 21.2307 18.0871 23.9108C19.4542 23.437 20.6784 22.6568 21.6786 21.6526C21.6668 21.6291 21.655 21.6047 21.6448 21.5788C20.5904 18.96 19.2083 16.6681 17.5009 14.7022ZM13.6824 16.0725C11.4824 13.9511 8.50136 13.1088 5.683 13.5472C5.60993 14.0202 5.57143 14.5058 5.57143 15C5.57143 16.9981 6.19371 18.8508 7.256 20.3774C9.55107 19.0409 11.7377 17.6361 13.6824 16.0725ZM19.5697 12.2406C19.2523 12.679 18.9168 13.1064 18.5648 13.5236C20.2839 15.4714 21.6982 17.7256 22.8069 20.2847C23.8306 18.7769 24.4286 16.958 24.4286 15C24.4286 14.8083 24.4231 14.6174 24.4113 14.4288C22.6827 14.1145 21.0154 13.3846 19.5697 12.2406ZM8.34736 8.32143C7.34321 9.32086 6.56379 10.5458 6.08921 11.9129C9.2305 11.6136 12.4771 12.6609 14.8876 15.0542C15.429 14.5726 15.946 14.0752 16.4371 13.5606C14.2316 11.3574 11.5586 9.62336 8.41964 8.35443C8.39529 8.345 8.37093 8.33321 8.34736 8.32143ZM21.7383 8.40786C21.369 9.28786 20.9361 10.1262 20.4458 10.9276C21.5599 11.8344 22.8328 12.4488 24.163 12.7701C23.7568 11.0981 22.9043 9.59979 21.7383 8.40786ZM15.5712 5.58871C15.3826 5.57693 15.1917 5.57143 15 5.57143C13.042 5.57143 11.2223 6.16936 9.71371 7.19314C12.7254 8.50214 15.3174 10.2299 17.486 12.3804C17.8089 11.9899 18.1169 11.5892 18.4084 11.1775C16.8865 9.57386 15.9413 7.62371 15.5712 5.58871ZM17.2299 5.837C17.5764 7.27014 18.2623 8.63729 19.2884 9.81036C19.7465 9.02386 20.1456 8.19807 20.4796 7.32829C19.5155 6.63843 18.4163 6.12536 17.2299 5.837Z" fill="black"/>
                            </svg>
                        </span>
                        Basketball</span>
                        </div>
                    </div>
                    <div className='card p-3 mb-3'>
                        <p className='heading-si'>Timing</p>
                        <p className='desc-si mb-0'>5.30 am to 09 pm</p>
                    </div>
                    <div className='card p-4 mb-3 px-4'>
                        <Calendar onChange={onChange} 
                            value={value}
                            className="common-calendor-si"
                        />
                    </div>
                    <button type='button' className='btn book-now-btn-si mt-2'>Book Now</button>
                    </div>
                </div>
            </div>
        </section>
    </Default>
  )
}

export default Single


