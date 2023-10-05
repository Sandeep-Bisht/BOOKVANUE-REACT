import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import { FileUpload } from "primereact/fileupload";
import { InputTextarea } from "primereact/inputtextarea";
import { MdMyLocation } from "react-icons/md";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import LocationAwareMap from "../common/googlemap";

const AddFacility = () => {
  const [formData, setFormData] = useState({});
  const [selectedType, setSelectedType] = useState([]);
  const [visible, setVisible] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [position, setPosition] = useState([51.505, -0.09]); // Initial map position
  const [showMap, setShowMap] = useState(false)

  console.log("check location", latitude,longitude)

  const facilityType = [{ name: "Sports" }, { name: "Venue" }];

  const handleChange = (e) => {
    let formDataCopy = { ...formData };
    formDataCopy[e.target.id] = e.target.value;
    setFormData(formDataCopy);
  };

  const handleUpload = (e) => {
    console.log(e, "event is this");
  };

  const handleButtonClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setError(null);
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            setError("Allow access to location.");            
          } else if (error.code === error.POSITION_UNAVAILABLE) {
            setError("Location information is unavailable.");
          } else if (error.code === error.TIMEOUT) {
            setError("Request to get location timed out.");
          } else {
            setError("An unknown error occurred.");
          }
        }
      );
    } else {
      setError("Geolocation is not available in your browser");
    }
  };

  useEffect(()=> {
    if(error){
    openLocationSettings()
    }
  }, [error])

  const openLocationSettings = () => {
    // Provide instructions on how to open browser location settings.
    // Instructions may vary by browser.
    const browser = detectBrowser();
    switch (browser) {
      case 'Chrome':
        alert("To enable location access in Chrome, click on the three vertical dots in the top-right corner, go to 'Settings,' then 'Privacy and security,' and finally 'Site settings.' From there, you can enable location access.");
        break;
      case 'Firefox':
        alert("To enable location access in Firefox, click on the three horizontal lines in the top-right corner, go to 'Options,' then 'Privacy & Security,' and under 'Permissions,' click on 'Settings' next to 'Location.' From there, you can enable location access.");
        break;
      case 'Safari':
        alert("To enable location access in Safari, go to 'Safari' in the menu bar, select 'Preferences,' click on the 'Websites' tab, and then select 'Location' from the left panel. You can then enable location access for specific websites.");
        break;
      default:
        alert("To enable location access in your browser, please refer to your browser's settings.");
    }
  };

  const detectBrowser = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('chrome')) {
      return 'Chrome';
    } else if (userAgent.includes('firefox')) {
      return 'Firefox';
    } else if (userAgent.includes('safari')) {
      return 'Safari';
    } else {
      return 'Unknown';
    }
  };


  return (
    <section>
      <div className="container">
        <div className="row ">
          <h4 className="text-center"> Add Facility</h4>
          <div className="col-12 mt-5">
            <div className="row">
              <div className="col-6 mb-5">
                <div className="card flex justify-content-center">
                  <span className="p-float-label">
                    <InputText
                      className="form-control"
                      id="officialName"
                      value={formData.officialName}
                      onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor="officialName">Official Name</label>
                  </span>
                </div>
              </div>
              <div className="col-6 mb-5">
                <div className="card flex justify-content-center">
                  <span className="p-float-label">
                    <InputText
                      className="form-control"
                      id="alias"
                      value={formData.alias}
                      onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor="alias">Alias</label>
                  </span>
                </div>
              </div>
              <div className="col-6 mb-5">
                <span className="p-float-label">
                  <MultiSelect
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.value)}
                    options={facilityType}
                    optionLabel="name"
                    className="w-full md:w-20rem"
                  />
                  <label htmlFor="ms-cities">Select Type</label>
                </span>
              </div>
              <div className="col-6 mb-5">
                <div className="card flex justify-content-center">
                  {/* <span className="p-float-label">
                    <InputText
                      className="form-control"
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor="location">Location</label>
                    <MdMyLocation />
                  </span> */}
                  <Button
                    label={<MdMyLocation />}
                    onClick={() => setVisible(true)}
                  />
                </div>
              </div>
              <div className="col-6 mb-5">
                <div className="card">
                  <FileUpload
                    name="images[]"
                    url={"/api/upload"}
                    multiple
                    accept="image/*"
                    maxFileSize={5000000}
                    emptyTemplate={
                      <p className="m-0">
                        Drag and drop files to here to upload.
                      </p>
                    }
                    onUpload={(e) => handleUpload(e)}
                    onSelect={(e) => handleUpload(e)}
                    onClear={(e) => handleUpload(e)}
                  />
                </div>
              </div>
              <div className="col-6 mb-5">
                <span className="p-float-label">
                  <InputTextarea
                    autoResize
                    id="description"
                    className="w-100"
                    value={formData.description}
                    onChange={(e) => handleChange(e)}
                    rows={7}
                    cols={30}
                  />
                  <label htmlFor="description">Description</label>
                </span>
              </div>
              <div className="col-6 mb-5">
                <label>Featured Image</label>
                <div className="card">
                  <FileUpload
                    name="featuredImage"
                    url={"/api/upload"}
                    accept="image/*"
                    maxFileSize={5000000}
                    emptyTemplate={
                      <div className="flex align-items-center flex-column">
                        <i
                          className="pi pi-image mt-3 p-5"
                          style={{
                            fontSize: "5em",
                            borderRadius: "50%",
                            backgroundColor: "var(--surface-b)",
                            color: "var(--surface-d)",
                          }}
                        ></i>
                        <span
                          style={{
                            fontSize: "1.2em",
                            color: "var(--text-color-secondary)",
                          }}
                          className="my-5"
                        >
                          Drag and Drop Image Here
                        </span>
                      </div>
                    }
                    onUpload={(e) => handleUpload(e)}
                    onSelect={(e) => handleUpload(e)}
                    onClear={(e) => handleUpload(e)}
                  />
                </div>
              </div>
              <div className="col-12 d-flex align-items-center justify-content-center">
                <button type="button" className="btn primary-btn">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card flex justify-content-center">
        <Dialog
        className="text-center"
          header="Select Location"
          visible={visible}
          maximizable
          style={{ width: "50vw" }}
          onHide={() => setVisible(false)}
        >
            {!showMap ? 
          <div className="row">
            <div className="col-md-12 mb-3">
              <div className="card flex justify-content-center">
                  <InputText
                    className="form-control"
                    id="location"
                    onChange={(e) => handleChange(e)}
                    placeholder="Search Location"
                  />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card flex justify-content-center">
                <Button label="Use Current Location" severity="secondary" onClick={handleButtonClick}/>
                {error && (
        <div>
          <p>{error}</p>
          {error.includes("enable location access")           
          }
        </div>
      )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="card flex justify-content-center">
                <Button label="Choose From Map" onClick={()=>setShowMap(true)} />
              </div>
            </div>
          </div>  :
          <div className="row">
            <div className="col-md-12">
           < LocationAwareMap />
           <Button label="Back" onClick={()=>setShowMap(false)}/>
            </div>

          </div>
}
        </Dialog>
      </div>
    </section>
  );
};

export default AddFacility;
