import React, { useContext, useEffect } from 'react'
import { Outlet, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Homepage from '../component/ui/homepage'
import { Context as AuthContext } from '../context/AuthContext'
import Cookies from 'js-cookie'
import DashboardLayout from '../component/layouts/dashboard'
import Dashboard from '../component/ui/dashboard'
import SearchResult from '../component/ui/searchResult'
import Booknow from '../component/ui/booknow'
import FacilityByCategory from '../component/ui/FacilityByCategory'
import Profile from '../component/ui/profile'
import UserDashboard from '../component/layouts/userDashboard'
import Bookings from '../component/ui/bookings'
import CreateFacility from '../component/CreateFacility/CreateFacility'
import NewSingle from '../component/ui/newSingle'
import AddService from '../component/ui/addService'
import { getHomepageData, getSinglePageData, getAllFacility, getFacilityByCategory, getCreateFacilityPageData } from '../config/initialApis'

const CheckAuth = () => {
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

  return <Outlet/>
}

const ProtectedRoutes = ({role , children}) =>{

  const userToken = Cookies.get('USER_TOKEN');

  return (userToken) ? <>{children}</> : <>Anauthenticated</>;
}

const ApplicationRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<CheckAuth/>}>
      <Route index path='/' element={<Homepage/>} loader={getHomepageData}/>
        <Route path='/facility/:slug' element={<NewSingle/>} loader={({params})=>getSinglePageData({params})}/> 
        {/* Integration pending in new singlepage */}
        <Route path="/location/:locationName" element={<SearchResult/>} />
        <Route path="/:category/:service" element={<FacilityByCategory/>} loader={({params})=>getFacilityByCategory({params})}/>
        <Route path="/booknow/:facilityName" element={<ProtectedRoutes role={['User']}><Booknow/></ProtectedRoutes>} />
        {/* Integration pending in booknow page */}
        <Route path='/management' element={<ProtectedRoutes role={['User']}><DashboardLayout/></ProtectedRoutes>}>
          <Route path="/management/dashboard" element={<Dashboard />} />
          <Route path='/management/createfacility' element={<CreateFacility/>} loader={getCreateFacilityPageData}/>
          <Route path="/management/addService" element={<AddService />} loader={getAllFacility}/>
        </Route>
        <Route path='/user' element={<ProtectedRoutes role={['User']}><UserDashboard/></ProtectedRoutes>}>
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/bookings" element={<Bookings />} />
        </Route>            
    </Route>
))


export default ApplicationRoutes