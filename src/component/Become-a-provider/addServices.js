import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddYourServices = () => {
    const navigate = useNavigate()
  return (
    <>
    <div>Add Your Services</div>
    
    <button type='button' onClick={()=>navigate('/become-a-provider/add-courts')}>Next</button>
    </>
  )
}

export default AddYourServices