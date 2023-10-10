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
        <Route path='/facility/:slug' element={<Single/>}/>
        <Route path="/location/:locationName" element={<SearchResult/>} />
        <Route path='/management' element={<ProtectedRoutes role={['User']}><DashboardLayout/></ProtectedRoutes>}>
          <Route path="/management/dashboard" element={<Dashboard />} />
          <Route path="/management/addFacility" element={<AddFacility />} />
        </Route>
    </Routes>
  )
}


const ProtectedRoutes = ({role , children}) =>{

  const userToken = Cookies.get('USER_TOKEN');

  return (userToken) ? <>{children}</> : <>Anauthenticated</>;
}

export default ApplicationRoutes