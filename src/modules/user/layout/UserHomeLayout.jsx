import React from 'react'
import { Outlet } from 'react-router-dom'

const UserHomeLayout = () => {
  return (
    <>
    <div>navbar</div>
     <Outlet/>
     </>
  )
}

export default UserHomeLayout