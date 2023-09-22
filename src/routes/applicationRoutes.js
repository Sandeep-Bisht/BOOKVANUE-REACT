import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../component/ui/homepage'
import Single from '../component/ui/single'

const ApplicationRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/single' element={<Single/>}/>
    </Routes>
  )
}

export default ApplicationRoutes