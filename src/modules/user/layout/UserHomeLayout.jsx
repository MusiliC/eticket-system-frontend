/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../../../components/common/Navbar'
import Footer from '../../../components/common/Footer'

const UserHomeLayout = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Redirect to the sign-in page or another authentication page
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
    <>
    <Navbar/>
    </>
    <div className='w-full'>
    <Outlet/> 
    </div>
    
     <Footer/>
     </>
  )
}

export default UserHomeLayout