import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminDashLayout = () => {
  return (
    <>
    <div>sidebar</div>
        <Outlet/>
    </>
  )
}

export default AdminDashLayout