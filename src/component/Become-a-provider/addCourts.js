import React from "react";
import "../../css/BecomeProvider.css";
import FooterProvider from "./footerProvider";
import { useNavigate } from "react-router-dom";

const AddYourCourts = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="add-service-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form>
                <div className="row">
                  <div className="col-lg-12 mt-lg">
                    <h2 className="common-form-heading inner-heading">
                      <span> Courts</span>
                    </h2>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-3">
                      <label className="form-label">Court Name</label>
                      <input
                        type="text"
                        name="courtName"
                        className="form-control"
                      />
                      {/* {errors.name && (
                            <span className="text-danger">
                              {errors.name.message}
                            </span>
                          )} */}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-3">
                      <label className="form-label">Start Time</label>
                      <input
                        type="time"
                        name="startTime"
                        className="form-control"
                      />
                      {/* <Controller
                            name="Time"
                            control={control}
                            defaultValue=""
                            rules={validationRules.Time}
                            render={({ field }) => (
                              <input
                                {...field}
                                type="time"
                                className="form-control"
                              />
                            )}
                          />
                          {errors.Time && (
                            <span className="text-danger">
                              {errors.Time.message}
                            </span>
                          )} */}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <label className="form-label">End Time</label>

                    <input
                      type="time"
                      name="courtName"
                      className="form-control"
                    />
                    {/* <Controller
                          name="selectedtime"
                          control={control}
                          defaultValue=""
                          rules={validationRules.selectedtime}
                          render={({ field }) => (
                            <input
                              {...field}
                              type="time"
                              className="form-control"
                            />
                          )}
                        />
                        {errors.selectedtime && (
                          <span className="text-danger">
                            {errors.selectedtime.message}
                          </span>
                        )} */}
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-3">
                      <div>
                        <label
                          htmlFor="description"
                          className="d-block form-label"
                        >
                          Description:
                        </label>
                        <textarea
                          rows="5"
                          className="w-100 form-control"
                        ></textarea>
                        {/* <Controller
                              name="description"
                              control={control}
                              defaultValue=""
                              rules={validationRules.description}
                              render={({ field }) => (
                                <textarea
                                  className="w-100 form-control"
                                  {...field}
                                  style={{ height: "auto", minHeight: "160px" }}
                                />
                              )}
                            />
                            {errors.description && (
                              <span className="text-danger">
                                {errors.description.message}
                              </span>
                            )} */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label htmlFor="price" className="d-block form-label">
                            Price
                          </label>

                          <input
                            type="number"
                            name="courtName"
                            className="form-control"
                          />
                          {/* <Controller
                                name="price"
                                control={control}
                                defaultValue=""
                                rules={validationRules.price}
                                render={({ field }) => (
                                  <input
                                    className="form-control"
                                    type="number"
                                    {...field}
                                  />
                                )}
                              />
                              {errors.price && (
                                <span className="text-danger">
                                  {errors.price.message}
                                </span>
                              )} */}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label htmlFor="price" className="d-block form-label">
                            Duration
                          </label>

                          <input
                            type="number"
                            name="courtName"
                            className="form-control"
                          />
                          {/* <Controller
                                name="duration"
                                control={control}
                                defaultValue=""
                                rules={validationRules.duration}
                                render={({ field }) => (
                                  <input
                                    className="form-control"
                                    type="number"
                                    {...field}
                                  />
                                )}
                              />
                              {errors.duration && (
                                <span className="text-danger">
                                  {errors.duration.message}
                                </span>
                              )} */}
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">Break Start</label>

                          <input
                            type="time"
                            name="courtName"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">Break End</label>

                          <input
                            type="time"
                            name="courtName"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 text-center">
                        <label className="form-label invisible d-block">
                          Break End
                        </label>
                        <button
                          type="button"
                          className="btn btn-success border-0 w-20"
                        >
                          Add
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </form>
            </div>
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
        </div>
      </section>

      {/* <div>Add Your Courts</div>
    <button type='button'>Finish</button> */}
      <FooterProvider
        backClick={() => navigate("/become-a-provider")}
        nextClick={() => navigate("/become-a-provider/add-courts")}
      />
    </>
  );
};

export default AddYourCourts;
