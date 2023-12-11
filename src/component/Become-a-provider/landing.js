import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate()
  return (
    <>
    <div>Landing</div>
    <button type='button' onClick={()=>navigate('/become-a-provider/add-facility')}>Get Started</button>
    </>
  )
}

export default Landing