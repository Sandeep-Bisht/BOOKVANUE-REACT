import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import { FileUpload } from 'primereact/fileupload';
import { InputTextarea } from "primereact/inputtextarea";

const AddFacility = () => {

    const [formData,setFormData] = useState({})
    const [selectedType,setSelectedType] = useState([])


    const facilityType = [
        { name: 'Sports' },
        { name: 'Venue' },
    ];

    const handleChange= (e) =>{
        let formDataCopy = {...formData}
        formDataCopy[e.target.id] = e.target.value;
        setFormData(formDataCopy)
    }

    const handleUpload = (e) =>{
        console.log(e,'event is this')
    }

  return (
    <section>
        <div className='container'>
            <div className='row '>
                <h4 className='text-center'> Add Facility</h4>
                <div className='col-12 mt-5'>
                    <div className='row'>
                        <div className='col-6 mb-5'>
                            <div className="card flex justify-content-center">
                                <span className="p-float-label">
                                    <InputText className='form-control' id="officialName" value={formData.officialName} onChange={(e) => handleChange(e)} />
                                    <label htmlFor="officialName">Official Name</label>
                                </span>
                            </div>
                        </div>
                        <div className='col-6 mb-5'>
                            <div className="card flex justify-content-center">
                                <span className="p-float-label">
                                    <InputText className='form-control'  id="alias" value={formData.alias} onChange={(e) => handleChange(e)} />
                                    <label htmlFor="alias">Alias</label>
                                </span>
                            </div>
                        </div>
                        <div className='col-6 mb-5'>
                        <span className="p-float-label">
                            <MultiSelect value={selectedType} onChange={(e) => setSelectedType(e.value)} options={facilityType} optionLabel="name" className="w-full md:w-20rem" />
                            <label htmlFor="ms-cities">Select Type</label>
                        </span>
                        </div>
                        <div className='col-6 mb-5'>
                            <div className="card flex justify-content-center">
                                <span className="p-float-label">
                                    <InputText className='form-control'  id="location" value={formData.location} onChange={(e) => handleChange(e)} />
                                    <label htmlFor="location">Location</label>
                                </span>
                            </div>
                        </div>
                        <div className='col-6 mb-5'>
                            <div className="card">
                                <FileUpload name="images[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={5000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} 
                                onUpload={(e)=>handleUpload(e)}
                                onSelect={(e)=>handleUpload(e)}
                                onClear={(e)=>handleUpload(e)}
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
                             onUpload={(e)=>handleUpload(e)}
                             onSelect={(e)=>handleUpload(e)}
                             onClear={(e)=>handleUpload(e)}
                             />
                            </div>
                        </div>
                        <div className='col-12 d-flex align-items-center justify-content-center'>
                            <button type='button' className='btn primary-btn'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AddFacility