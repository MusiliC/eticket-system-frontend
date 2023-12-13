/* eslint-disable no-unused-vars */
import React from 'react'

// eslint-disable-next-line react/prop-types
const Header = ({text}) => {
  return (
    <div className='w-full h-[200px] bg-primary-500 flex justify-center items-center'>
        <p className='lg:text-[2rem]  text-[1.5rem] font-semibold leading-[3rem] lg:tracking-[2px] lg:leading-[3.5rem] lg:font-bold' >{text}</p>
    </div>
  )
}

export default Header