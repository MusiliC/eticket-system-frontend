/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../../components/common/Navbar'
import Footer from '../../../components/common/Footer'

const UserHomeLayout = () => {
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