/* eslint-disable no-unused-vars */
import React from 'react'

// eslint-disable-next-line react/prop-types
const Header = ({text}) => {
  return (
    <div className='w-full h-[200px] bg-primary-500 flex justify-center items-center'>
        <p className='headerThree' >{text}</p>
    </div>
  )
}

export default Header