import { useForm } from "react-hook-form";
import { FaLocationCrosshairs } from "react-icons/fa6";
import Select from "react-select";
import { Dialog } from "primereact/dialog";
import LocationAwareMap from "../common/googlemap";
import SearchLocation from "../common/searchLocation";
import { Button } from "primereact/button";
import "../../css/BecomeProvider.css";
import { useNavigate } from "react-router-dom";
import FooterProvider from "./footerProvider";
import React, { useState } from "react";

const Addfacility = () => {
  const { register, handleSubmit } = useForm();
  const [previewImage, setPreviewImage] = useState(null);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
  };
  const handleImageChange = (event) => {
    console.log('handle image change called')
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
    console.log(previewImage,'preview image is this')
  };

  return (
    <>
      <div>
        <section className="actual-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
              <div className="row form">
                <div className="col-md-6">
                  <label>Facility Type</label>
                  <Select
                    {...register("facility")}
                    class="inputField"
                    name="facility"
                    isMulti
                    required
                    id="dropdown"
                  ></Select>
                </div>
                <div className="col-md-6">
                  <label>Official Name</label>
                  <input
                    type="text"
                    name="officialName"
                    placeholder="Official Name"
                    className="inputField"
                    {...register("officialName", { required: true })}
                  />
                </div>
                <div className="col-md-6">
                  <label>Alias</label>
                  <input
                    name="alias"
                    type="text"
                    placeholder="Alias"
                    className="inputField"
                    {...register("alias")}
                  />
                </div>
                <div className="col-md-6">
                  <label>Amenities</label>
                  <Select
                    {...register("amenities")}
                    class="inputField"
                    name="amenities"
                    id="dropdown"
                    placeholder="Amenities"
                  />
                </div>
                <div className="col-md-6">
                  <label>Address</label>
                  <input
                    className="inputField"
                    name="address"
                    placeholder="Address"
                    {...register("address", {
                      required: true,
                    })}
                  />
                </div>{" "}
                <div className="col-md-6">
                  <label>Featured Image</label>
                  <input
                    className="form-control-file"
                    name="featured_image"
                    type="file"
                    onChange={handleImageChange}
                    {...register("featured_image", {
                      required: true,
                    })}
                  />
                  {previewImage && (
                    <img
                      src={previewImage}
                      alt="Preview"
                      style={{ maxWidth: "100px", marginTop: "10px" }}
                    />
                  )}{" "}
                  {/* Display the image preview */}
                </div>
                <div className="col-md-2">
                  <label>Latitude</label>
                  <input
                    readOnly={true}
                    placeholder="Latitude"
                    className="inputField"
                  />
                </div>
                <div className="col-md-2">
                  <label>Longitude</label>
                  <input
                    readOnly={true}
                    className="inputField"
                    placeholder="Longitude"
                    {...register("longitude", {})}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <button type="button" class="formButton submit w-30 mt-4">
                    Location&nbsp;&nbsp;
                    <i>
                      <FaLocationCrosshairs />
                    </i>
                  </button>
                </div>
                <div className="col-md-5 mb-3">
                  <label>Description</label>
                  <textarea
                    className="inputField"
                    name="description"
                    placeholder="Description"
                    rows="3"
                    {...register("description")}
                  ></textarea>
                </div>
                <div className="col-md-12">
                  <button
                    className="formButton submit"
                    type="submit"
                    name="submit"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
          <Dialog
            className=" search-location-popup"
            header="Select Location"
            // visible={visible}
            style={{ width: "50vw" }}
          >
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="card flex justify-content-center h-100">
                  <SearchLocation className="w-100 h-100" />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="card flex justify-content-center">
                  <Button
                    label="Use Current Location"
                    severity="secondary"
                    className="common-location-btn form-input  btn "
                  />
                  <span class="ms-2 pop-icon">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2917 6.83333C8.45 6.83333 6.95833 8.325 6.95833 10.1667C6.95833 12.0083 8.45 13.5 10.2917 13.5C12.1333 13.5 13.625 12.0083 13.625 10.1667C13.625 8.325 12.1333 6.83333 10.2917 6.83333ZM17.7417 9.33333C17.3583 5.85833 14.6 3.1 11.125 2.71667V1.83333C11.125 1.375 10.75 1 10.2917 1C9.83333 1 9.45833 1.375 9.45833 1.83333V2.71667C5.98333 3.1 3.225 5.85833 2.84167 9.33333H1.95833C1.5 9.33333 1.125 9.70833 1.125 10.1667C1.125 10.625 1.5 11 1.95833 11H2.84167C3.225 14.475 5.98333 17.2333 9.45833 17.6167V18.5C9.45833 18.9583 9.83333 19.3333 10.2917 19.3333C10.75 19.3333 11.125 18.9583 11.125 18.5V17.6167C14.6 17.2333 17.3583 14.475 17.7417 11H18.625C19.0833 11 19.4583 10.625 19.4583 10.1667C19.4583 9.70833 19.0833 9.33333 18.625 9.33333H17.7417ZM10.2917 16C7.06667 16 4.45833 13.3917 4.45833 10.1667C4.45833 6.94167 7.06667 4.33333 10.2917 4.33333C13.5167 4.33333 16.125 6.94167 16.125 10.1667C16.125 13.3917 13.5167 16 10.2917 16Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card flex justify-content-center">
                  <LocationAwareMap
                    //function
                    markerDraggable={true}
                    markerTitle="Your location"
                    height="60vh"
                  />
                </div>
              </div>

              <div className="col-md-12">
                <p className="text-danger">Select location first.</p>
              </div>

              <div className="col-md-12 mt-lg-4">
                <div className="select-location-btn-wrapper">
                  <div className="left">
                    <Button
                      onClick={() => {
                        // setVisible(false);
                      }}
                      label="Cancel"
                      className="common-location-btn form-input cancel "
                    />
                  </div>
                  <div className="right">
                    <Button
                      label="Confirm"
                      // onClick={() => handleConfirmLocation()}
                      className="common-location-btn form-input  "
                    />
                  </div>
                </div>
              </div>
            </div>
          </Dialog>
        </section>
      </div>
      <FooterProvider
      
        backClick={() => navigate("/become-a-provider")}
        nextClick={() => navigate("/become-a-provider/add-services")}
      />
    </>
  );
};

export default Addfacility;
