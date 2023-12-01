import React, { useEffect, useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';
import MyForm from "./customDatepicker";
import '../../css/form.css'
import DatePicker from "react-multi-date-picker";


const AddService = () => {
  const { control, handleSubmit } = useForm();
  const facility = ['facility 1', 'facility 2', 'facility 3'];
  const service = ['service 1', 'service 2', 'service 3'];

  const onSubmit = (data) => {
    console.log(data);
    // You can handle the form submission logic here
  };

  return (
    <>
      <section className="add-service-area">
        <div className="container">
          <div className="row ">
            <div className="col-md-12">
              <h1 className="common-form-heading">
                Add Service
              </h1>
            </div>

          </div>
          <div className="row">
            <div className="col-lg-12">
              <form onSubmit={handleSubmit(onSubmit)} className="common-form-wrapper">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="mb-3">
                      <label className="form-label">Choose Facility</label>
                      <Controller
                        name="selectedOption"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <select {...field} className="form-select">
                            {facility.map((facility, index) => (
                              <option key={index} value={facility}>
                                {facility}
                              </option>
                            ))}
                          </select>
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-3">
                      <label className="form-label">Choose Service</label>
                      <Controller
                        name="selectedOption"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <select {...field} className="form-select">
                            {service.map((service, index) => (
                              <option key={index} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-3">
                      <label className="form-label">Holidays</label>
                      <DatePicker
                        multiple 
                        minDate={new Date()}
                      />
                      {/* <Controller
                        name="selectedDate"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <input {...field} type="date" className="form-control" />}
                      /> */}
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="mb-3">
                      <div>
                        <label htmlFor="description" className="d-block form-label">Description:</label>
                        <Controller
                          name="description"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <textarea
                              className="w-100 form-control"
                              {...field}
                              style={{ height: 'auto', minHeight: '160px' }} // Set minimum height if needed
                              onChange={(e) => {
                                e.target.style.height = 'auto';
                                e.target.style.height = `${e.target.scrollHeight}px`;
                              }}
                            />
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="image-upload-wrapper mb-3">
                      <div>
                        <label htmlFor="singleImage" className="form-label">Single Image Upload:</label>
                        <Controller
                          name="singleImage"
                          control={control}
                          defaultValue={null}
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
                      </div>
                      <div>
                        <label htmlFor="singleImage" className="form-label">multiple Image Upload:</label>
                        <Controller
                          name="multipleImages"
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
                  <div className="col-lg-12 mt-lg">
                    <h2 className="common-form-heading inner-heading">
                      <span> Courts</span>
                    </h2>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-3">
                      <label className="form-label">Court Name</label>
                      <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <input {...field} className="form-control" />}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-3">
                      <label className="form-label">Start Time</label>
                      <Controller
                        name="selectedDate"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <input {...field} type="date" className="form-control" />}
                      /></div>
                  </div>
                  <div className="col-lg-4">
                    <label className="form-label">End Time</label>
                    <Controller
                      name="selectedDate"
                      control={control}
                      defaultValue=""
                      render={({ field }) => <input {...field} type="date" className="form-control" />}
                    />
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-3">
                      <div>
                        <label htmlFor="description" className="d-block form-label">Description:</label>
                        <Controller
                          name="description"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <textarea
                              className="w-100 form-control"
                              {...field}
                              style={{ height: 'auto', minHeight: '160px' }} // Set minimum height if needed
                              onChange={(e) => {
                                e.target.style.height = 'auto';
                                e.target.style.height = `${e.target.scrollHeight}px`;
                              }}
                            />
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label htmlFor="price" className="d-block form-label">Price</label>
                          <Controller
                            name="price"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <input
                                className="form-control"
                                type="text"
                                {...field}

                              // Add any additional styling or attributes as needed
                              />
                            )}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label htmlFor="price" className="d-block form-label">Duration</label>
                          <Controller
                            name="price"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <input
                                className="form-control"
                                type="text"
                                {...field}

                              // Add any additional styling or attributes as needed
                              />
                            )}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">Break Start</label>
                          <Controller
                            name="selectedDate"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <input {...field} type="date" className="form-control" />}
                          /></div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">Break End</label>
                          <Controller
                            name="selectedDate"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <input {...field} type="date" className="form-control" />}
                          /></div>
                      </div>
                      <div className="col-lg-4 text-center">
                        <label className="form-label invisible d-block">Break End</label>
                        <button type="btn" className="btn btn-success border-0 w-100">Add</button>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">Break Start</label>
                          <Controller
                            name="selectedDate"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <input {...field} type="date" className="form-control" />}
                          /></div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">Break End</label>
                          <Controller
                            name="selectedDate"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <input {...field} type="date" className="form-control" />}
                          /></div>
                      </div>
                      <div className="col-lg-4 text-center">
                        <label className="form-label invisible d-block">Break End</label>
                        <button type="btn" className="btn btn-danger w-100 border-0">Remove</button>
                      </div>
                    </div>
                  </div>

                  {/* 
                  <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <Controller
                      name="name"
                      control={control}
                      defaultValue=""
                      render={({ field }) => <input {...field} className="form-control" />}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <Controller
                      name="email"
                      control={control}
                      defaultValue=""
                      render={({ field }) => <input {...field} type="email" className="form-control" />}
                    />
                  </div> */}


                </div>


                <button type="submit" className="btn btn-primary">Submit</button>

              </form>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default AddService;
