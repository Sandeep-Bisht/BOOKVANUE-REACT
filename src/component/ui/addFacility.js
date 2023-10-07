import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import { FileUpload } from 'primereact/fileupload';
import { InputTextarea } from "primereact/inputtextarea";

const AddFacility = () => {

    const [formData, setFormData] = useState({})
    const [selectedType, setSelectedType] = useState([])


    const facilityType = [
        { name: 'Sports' },
        { name: 'Venue' },
    ];

    const handleChange = (e) => {
        let formDataCopy = { ...formData }
        formDataCopy[e.target.id] = e.target.value;
        setFormData(formDataCopy)
    }

    const handleUpload = (e) => {
        console.log(e, 'event is this')
    }

    return (
        <section>
            <div className='container'>
                <div className='row '>
                    <h4 className='text-center'> Add Facility</h4>
                    <div className='col-12 mt-5'>
                        <div className='row'>
                            <div className='col-lg-3 mb-5'>
                                <div className=" form-row">
                                    <span className="p-float-label">
                                        <InputText className='form-input' id="officialName" value={formData.officialName} onChange={(e) => handleChange(e)} />
                                        <label htmlFor="officialName">Official Name</label>
                                    </span>
                                </div>
                            </div>
                            <div className='col-lg-3 mb-5'>
                                <div className=" form-row">
                                    <span className="p-float-label">
                                        <InputText className='form-input' id="alias" value={formData.alias} onChange={(e) => handleChange(e)} />
                                        <label htmlFor="alias">Alias</label>
                                    </span>
                                </div>
                            </div>
                            <div className='col-lg-3 mb-5'>
                                <div className=" form-row">
                                    <span className="p-float-label">
                                        <MultiSelect value={selectedType} onChange={(e) => setSelectedType(e.value)} 
                                        options={facilityType} optionLabel="name" 
                                        className="w-full md:w-20rem form-input" />
                                        <label htmlFor="ms-cities">Select Type</label>
                                    </span>
                                </div>
                            </div>
                            <div className='col-lg-3 mb-5'>
                                {/* <div className="card flex justify-content-center">
                                    <span className="p-float-label">
                                        <InputText className='form-control' id="location" value={formData.location} onChange={(e) => handleChange(e)} />
                                        <label htmlFor="location">Location</label>
                                    </span>
                                </div> */}
                                <div className='form-row'> 
                                <button className='common-location-btn form-input  btn' type='button'>
                                        location<span className='ms-2'><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.2917 6.83333C8.45 6.83333 6.95833 8.325 6.95833 10.1667C6.95833 12.0083 8.45 13.5 10.2917 13.5C12.1333 13.5 13.625 12.0083 13.625 10.1667C13.625 8.325 12.1333 6.83333 10.2917 6.83333ZM17.7417 9.33333C17.3583 5.85833 14.6 3.1 11.125 2.71667V1.83333C11.125 1.375 10.75 1 10.2917 1C9.83333 1 9.45833 1.375 9.45833 1.83333V2.71667C5.98333 3.1 3.225 5.85833 2.84167 9.33333H1.95833C1.5 9.33333 1.125 9.70833 1.125 10.1667C1.125 10.625 1.5 11 1.95833 11H2.84167C3.225 14.475 5.98333 17.2333 9.45833 17.6167V18.5C9.45833 18.9583 9.83333 19.3333 10.2917 19.3333C10.75 19.3333 11.125 18.9583 11.125 18.5V17.6167C14.6 17.2333 17.3583 14.475 17.7417 11H18.625C19.0833 11 19.4583 10.625 19.4583 10.1667C19.4583 9.70833 19.0833 9.33333 18.625 9.33333H17.7417ZM10.2917 16C7.06667 16 4.45833 13.3917 4.45833 10.1667C4.45833 6.94167 7.06667 4.33333 10.2917 4.33333C13.5167 4.33333 16.125 6.94167 16.125 10.1667C16.125 13.3917 13.5167 16 10.2917 16Z" fill="white" />
                                        </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className='col-lg-6 mb-5'>
                                <div className="card">
                                    <FileUpload name="images[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={5000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>}
                                        onUpload={(e) => handleUpload(e)}
                                        onSelect={(e) => handleUpload(e)}
                                        onClear={(e) => handleUpload(e)}
                                    />
                                </div>
                            </div>
                            <div className='col-6 mb-5'>
                                <span className="p-float-label">
                                    <InputTextarea autoResize id="description" className='w-100' value={formData.description} onChange={(e) => handleChange(e)} rows={7} cols={30} />
                                    <label htmlFor="description">Description</label>
                                </span>
                            </div>
                            <div className='col-6 mb-5'>
                                <label>Featured Image</label>
                                <div className="card">
                                    <FileUpload name="featuredImage" url={'/api/upload'} accept="image/*" maxFileSize={5000000} emptyTemplate={<div className="flex align-items-center flex-column">
                                        <i className="pi pi-image mt-3 p-5" style={{ fontSize: '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)' }}></i>
                                        <span style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }} className="my-5">
                                            Drag and Drop Image Here
                                        </span>
                                    </div>}
                                        onUpload={(e) => handleUpload(e)}
                                        onSelect={(e) => handleUpload(e)}
                                        onClear={(e) => handleUpload(e)}
                                    />
                                </div>
                            </div>
                            <div className='col-12 d-flex align-items-center justify-content-center'>
                                <button type='button' className='btn primary-btn'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row d-none'>
                    <div className='col-md-12'>
                        <div className='form-wrapper'>
                            <div className='row'>
                                <div className='col-lg-3'>
                                    <div class="form-row">

                                        <input type="text" class="form-input"
                                            placeholder='Official Name'

                                        />

                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div class="form-row">

                                        <input type="text" class="form-input"
                                            placeholder='Alias'

                                        />

                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div class="form-row">

                                        <div class="select-wrapper position-relative">
                                            <select class="form-select form-input " name="pselect">
                                                <option selected="">Select</option>
                                                <option value="LAW Entrance Exam">LAW Entrance Exam</option>
                                                <option value="Judicial Exam">Judicial Exam</option>
                                                <option value="UGC-NET">UGC-NET</option>
                                                <option value="UPSC/PPSC Exam">UPSC/PPSC Exam</option>
                                                <option value="LAW Subjective Coaching">LAW Subjective Coaching</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <button className='common-location-btn form-input  btn' type='button'>
                                        location<span><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.2917 6.83333C8.45 6.83333 6.95833 8.325 6.95833 10.1667C6.95833 12.0083 8.45 13.5 10.2917 13.5C12.1333 13.5 13.625 12.0083 13.625 10.1667C13.625 8.325 12.1333 6.83333 10.2917 6.83333ZM17.7417 9.33333C17.3583 5.85833 14.6 3.1 11.125 2.71667V1.83333C11.125 1.375 10.75 1 10.2917 1C9.83333 1 9.45833 1.375 9.45833 1.83333V2.71667C5.98333 3.1 3.225 5.85833 2.84167 9.33333H1.95833C1.5 9.33333 1.125 9.70833 1.125 10.1667C1.125 10.625 1.5 11 1.95833 11H2.84167C3.225 14.475 5.98333 17.2333 9.45833 17.6167V18.5C9.45833 18.9583 9.83333 19.3333 10.2917 19.3333C10.75 19.3333 11.125 18.9583 11.125 18.5V17.6167C14.6 17.2333 17.3583 14.475 17.7417 11H18.625C19.0833 11 19.4583 10.625 19.4583 10.1667C19.4583 9.70833 19.0833 9.33333 18.625 9.33333H17.7417ZM10.2917 16C7.06667 16 4.45833 13.3917 4.45833 10.1667C4.45833 6.94167 7.06667 4.33333 10.2917 4.33333C13.5167 4.33333 16.125 6.94167 16.125 10.1667C16.125 13.3917 13.5167 16 10.2917 16Z" fill="white" />
                                        </svg>
                                        </span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddFacility