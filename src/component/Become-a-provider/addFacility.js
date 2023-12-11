import React from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'

const AddYourFacility = () => {
  const [payload,setPayload] = useOutletContext()
  const navigate = useNavigate()
  return (
    <>
    <div>AddYourFacility</div>
    <button type='button' onClick={()=>navigate('/become-a-provider')}>Back</button>
    <button type='button' onClick={()=>navigate('/become-a-provider/add-services')}>Next</button>
    </>
  )
}

export default AddYourFacility