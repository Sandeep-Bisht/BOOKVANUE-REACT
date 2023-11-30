import React from 'react'
import { useForm } from "react-hook-form"
import "../../css/Form.css"
import { FaLocationCrosshairs } from "react-icons/fa6";


// const Dropdown = () => {
//     // Array of options
//     const options = ['Indoor', 'Outdoor'];
  
//     // Variable to store selected option
//     let selectedOption = '';
  
//     // Function to handle option change
//     const handleSelectChange = (event) => {
//       selectedOption = event.target.value;
//       console.log(selectedOption); // Log the selected option
//     };
// }
const Form = () => {
       const { register, handleSubmit } = useForm()
      const onSubmit = (data) => console.log(data)
        
      const VenueOptions = [
        {
            label:"Indoor",
            value:"Indoor"
        },
        {
            label:"Outdoor",
            value:"Outdoor"
        }
      ];
  
      // Variable to store selected option
      let selectedOption = '';
    
      // Function to handle option change
      const handleSelectChange = (event) => {
        selectedOption = event.target.value;
        console.log(selectedOption); // Log the selected option
    
      }
  return (
    <div>
        <section className='actual-form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='container'>
            <div className='row form'>
        
        <div className="col-md-6">
            <label>Facility Type</label>
            <select  {...register("facility")} class="inputField" name="service_category_id" required id="dropdown" onChange={handleSelectChange}>
            <option value='' hidden>Select Type</option> 
            {VenueOptions.map((facility) => (
                  <option key={facility.value} value={facility.value}>
                    {facility.label}
                  </option>
                ))}

            {/* <option  value={Item}>
            {options}
          </option>  */}
            </select>
      {/* <input className='inputField'{...register("Facility Type", { required: true, maxLength: 20 })} /> */}
      </div>
      <div className="col-md-6">
      <label>Official Name</label>
      <input className='inputField'{...register("Official Name", { pattern: /^[A-Za-z]+$/i })} />
      </div>
      <div className="col-md-6">
      <label>Alias</label>
      <input type="text" className='inputField'{...register("Alias", { pattern: /^[A-Za-z]+$/i})} />
      </div>
      <div className="col-md-6">
      <label>Amenities</label>
      <input className='inputField'{...register("Facility Type", { required: true, maxLength: 20 })} />
      </div>
      <div className="col-md-6">
      <label>Address</label>
      <input className='inputField'{...register("Facility Type", { required: true, maxLength: 20 })} />
      </div>  <div className="col-md-6">
      <label>Featured Image</label>
      <input className='form-control-file' name="featured_image" type='file' {...register("Facility Type", { required: true, maxLength: 20 })} />
      </div>
      <div className="col-md-4">
      <label>Latitude</label>
      <input className='inputField'{...register("Facility Type", { required: true, maxLength: 20 })} />
      </div>
      <div className="col-md-4">
      <label>Longitude</label>
      <input className='inputField'{...register("Facility Type", { required: true, maxLength: 20 })} />
      </div>
      <div className="col-md-4">
      {/* <label>Facility Type</label>
      <input className='inputField'{...register("Facility Type", { required: true, maxLength: 20 })} /> */}
       <button type="button" class="formButton submit w-100 mt-4" data-bs-toggle="modal"
                    data-bs-target="#exampleModalCenter">
                    Location&nbsp;&nbsp;<i><FaLocationCrosshairs/></i></button>
      </div>
      <div className='col-md-12 mb-3'>
        <label>Description</label>
        <textarea className='inputField' name="description" placeholder="Description" rows="5"></textarea>
      </div>
      <div className='col-md-12'>
      <button className='formButton submit' type='submit' name='submit'>Save</button>
      </div>
      </div>
        {/* <div class="row form">
            <div class="col-md-6">
                <label>Facility Type</label>
                <select class="inputField" name="service_category_id" required>
                    <option value='' hidden>Select Type</option>
                    @foreach($service_category as $type)
                    <option value="{{$type->id}}">{{$type->name}}</option>
                    @endforeach
                </select>
            </div>
            <div class="col-md-6">
                <label>Official Name</label>
                <input type="text" name="name" placeholder="Official Name" class="inputField" required>
            </div>
            <div class="col-md-6">
                <label>Alias</label>
                <input type="text" name="alias" placeholder="Alias" class="inputField">
            </div>
            <div class="col-md-6">
                <label>Amenities</label>
                <!-- <input type="text" name="amenities" placeholder="Amenities" class="inputField"> -->
                <select class="inputField" name="amenities[]" id="amenity" multiple="multiple">
                    <option value="">Choose Amenities</option>
                    @foreach($amenities as $amenity)
                    <option value="{{ $amenity->id }}">{{ $amenity->name }}</option>
                    @endforeach

                </select>
            </div>
            <div class="col-md-6">
                <label>Address</label>
                <input type="text" name="address" placeholder="Address" class="inputField" required>
            </div>
            <div class="col-md-6">
                <label>Featured Image</label>
                <input type="file" name="featured_image" placeholder="" class="form-control-file" required>
            </div>
            <div class="col-md-4">
                <label>Latitude</label>
                <input type="text" id="latitude" name="lat" placeholder="Latitude" class="inputField" required readonly>
            </div>
            <div class="col-md-4">
                <label>Longitude</label>
                <input type="text" id="longitude" name="lng" placeholder="Longitude" class="inputField" required readonly/>
            </div>
            <div class="col-md-4">
                <button type="button" class="formButton submit w-100 mt-4" data-bs-toggle="modal"
                    data-bs-target="#exampleModalCenter">
                    Location&nbsp;&nbsp;<i class="fa-solid fa-location-crosshairs"></i></button>
            </div>
            <div class="col-md-12 mb-3">
                <label>Description</label>
                <textarea name="description" placeholder="Description" class="inputField" rows="5"></textarea>
            </div>
            <div class="col-md-12">
                <button type="submit" class="formButton submit" name="submit">Save</button>
            </div>
        </div> */}
      </div>
    </form>
    </section>
    </div>
  )
}


export default Form

