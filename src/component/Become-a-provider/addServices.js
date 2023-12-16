import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useForm ,Controller } from "react-hook-form";
import "../../css/BecomeProvider.css";
import DatePicker from "react-multi-date-picker";
import FooterProvider from "./footerProvider";
import { useLoaderData } from "react-router-dom";



const AddYourServices = () => {
  const  getAllFacility  = useLoaderData()
  const [facility, setfacility] = useState(null);
  
  const handleFacilityChange = (facilityName) => {
    console.log(facilityName, "facilityname is this")
    setfacility(facilityName);
  };

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();


  const handleFormSubmit = (data) =>{
    let holidaysCopy = [...data.holidays];
    data['holidays'] = holidaysCopy.map ((item) => `${item.day < 10 ? '0' :''}${item.day}-${item.month < 10 ? '0' :''}${item.month}-${item.year}`);

    
    console.log(data,'data is this of form')
  }
  

  const navigate = useNavigate();
  return (
    <>
      <section className="add-service-area">
        <div className="container">
          <div className="row ">
            <div className="col-md-12">
              <h1 className="common-form-heading">Add Service</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form
               onSubmit={handleSubmit(handleFormSubmit)}
               >
                <div className="row">
                  <div className="col-lg-4">
                    <div className="mb-3">
                      <label className="form-label">Choose Facility</label>
                      <select
                        name="facility"
                        className="form-select"
                        {...register("facility")}
                        onChange={(e)=>handleFacilityChange(e.target.value)}
                        required
                      >
                         <option hidden>Choose Facility</option>
                            {getAllFacility &&
                              getAllFacility?.facility.length > 0 &&
                              getAllFacility?.facility.map((facility, index) =>{
                                return (
                                  <option
                                  key={index}
                                  value={facility.id}
                                >
                                  {facility.official_name}
                                </option>
                                )
                              } 
                              )}
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="mb-3">
                      <label className="form-label">Choose Service</label>
                      <select
                        name="services"
                        className="form-select"
                        {...register("services")}
                        onChange=""
                        required
                      >
                        <option selected hidden>
                          Choose Service
                        </option>
                      </select>
                    </div>
                  </div>

                  <>
                    <div className="col-lg-4">
                      <div className="mb-3">
                        <label className="form-label">Holidays</label>
                        <div className="custom-date-picker">
                          <Controller
                            name="holidays"
                            control={control}
                            defaultValue={[]}
                            render={({ field }) => (
                              <DatePicker
                                {...field}
                                format="DD-MM-YYYY"
                                placeholder="DD-MM-YYYY"
                                clear
                                minDate={new Date()}
                                multiple
                                className="form-control"
                              />
                            )}
                          />
                        </div>
                        {errors.holidays && (
                          <span className="text-danger">
                            {errors.holidays.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="mb-3">
                        <div>
                          <label
                            htmlFor="description"
                            className="d-block form-label"
                          >
                            Description:
                          </label>
                          <Controller
                            name="description"
                            defaultValue=""
                            control={control}
                            type="text"
                            render={({ field }) => (
                              <textarea
                                className="w-100 form-control"
                                {...field}
                                style={{ height: "auto", minHeight: "160px" }}
                              />
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="image-upload-wrapper mb-3">
                        <div>
                          <label htmlFor="featuredImage" className="form-label">
                            Featured Image
                          </label>
                          <Controller
                            name="featuredImage"
                            control={control}
                            defaultValue={null}
                            // rules={validationRules.featuredImage}
                            render={({ field }) => (
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                  const file = e.target.files[0];
                                  field.onChange(file);
                                }}
                              />
                            )}
                          />
                          {errors.featuredImage && (
                            <span className="text-danger">
                              {errors.featuredImage.message}
                            </span>
                          )}
                        </div>
                        <div>
                          <label htmlFor="otherImages" className="form-label">
                            Other Images:
                          </label>
                          <Controller
                            name="otherImages"
                            control={control}
                            defaultValue={[]}
                            render={({ field }) => (
                              <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={(e) => {
                                  const files = e.target.files;
                                  field.onChange(files);
                                }}
                              />
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                </div>
                <div className="col-md-12">
                  <button
                    className="formButton submit my-5"
                    type="submit"
                    name="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FooterProvider
        backClick={() => navigate("/become-a-provider")}
        nextClick={() => navigate("/become-a-provider/add-courts")}
   />
    </>
  );
};

export default AddYourServices;
