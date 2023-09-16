import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../component/ui/homepage'

const ApplicationRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
    </Routes>
  )
}

export default ApplicationRoutes