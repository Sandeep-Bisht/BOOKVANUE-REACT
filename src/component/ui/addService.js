import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import LocationAwareMap from "../common/googlemap";
import { useForm, Controller } from "react-hook-form";
import SearchLocation from "../common/searchLocation";
import { FileUpload } from "primereact/fileupload";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Dropdown } from "primereact/dropdown";

const AddService = () => {
 

 

  


  return (
    <>
      <section className="bg-info">
        <div className="container">
          <div className="row ">
            <h4 className=" fw-bold "> Add Service</h4>
           
          </div>
        </div>
       
      </section>
    </>
  );
};

export default AddService;
