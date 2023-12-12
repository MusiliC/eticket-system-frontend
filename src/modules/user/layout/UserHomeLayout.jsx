/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../../components/common/Navbar'

const UserHomeLayout = () => {
  return (
    <>
    <>
    <Navbar/>
    </>
     <Outlet/>
     </>
  )
}

export default UserHomeLayout