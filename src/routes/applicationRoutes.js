import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../component/ui/homepage'
import Single from '../component/ui/single'
import { Context as AuthContext } from '../context/AuthContext'
import Cookies from 'js-cookie'
import DashboardLayout from '../component/layouts/dashboard'
import Dashboard from '../component/ui/dashboard'
import AddFacility from '../component/ui/addFacility'
import SearchResult from '../component/ui/searchResult'
import Booknow from '../component/ui/booknow'
import FacilityByCategory from '../component/ui/FacilityByCategory'
import Profile from '../component/ui/profile'
import UserDashboard from '../component/layouts/userDashboard'
import Bookings from '../component/ui/bookings'
import CreateFacility from '../component/CreateFacility/CreateFacility'
import NewSingle from '../component/ui/newSingle'
import AddService from '../component/ui/addService'

const ApplicationRoutes = () => {

  const {state, userLoggedIn} = useContext(AuthContext);
  
  useEffect(()=>{

    const userToken = Cookies.get('USER_TOKEN');

    if(!state.userData && (userToken)){
      userLoggedIn(
        {
            token:userToken,
          }
      )
      
    }

  },[state.userData])

  return (
    <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route path='/facility/:slug' element={<NewSingle/>}/>
        {/* <Route path='/facility/:slug' element={<NewSingle/>}/> */}
        <Route path="/location/:locationName" element={<SearchResult/>} />
        <Route path="/:category/:service" element={<FacilityByCategory/>} />
        <Route path="/booknow/:facilityName" element={<ProtectedRoutes role={['User']}><Booknow/></ProtectedRoutes>} />
        <Route path='/management' element={<ProtectedRoutes role={['User']}><DashboardLayout/></ProtectedRoutes>}>
          <Route path="/management/dashboard" element={<Dashboard />} />
          <Route path='/management/createfacility' element={<CreateFacility/>}/>
          <Route path="/management/addService" element={<AddService />} />
          
        </Route>
        <Route path='/user' element={<ProtectedRoutes role={['User']}><UserDashboard/></ProtectedRoutes>}>
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/bookings" element={<Bookings />} />
        </Route>
        {/* <Route>
          <Route path='/createfacility' element={<CreateFacility/>}/>
        </Route> */}
    </Routes>
  )
}


const ProtectedRoutes = ({role , children}) =>{

  const userToken = Cookies.get('USER_TOKEN');

  return (userToken) ? <>{children}</> : <>Anauthenticated</>;
}

export default ApplicationRoutes