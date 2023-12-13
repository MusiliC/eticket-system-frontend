/* eslint-disable no-unused-vars */
import React from 'react'

// eslint-disable-next-line react/prop-types
const Button = ({text}) => {
  return (
    <p
    type="button"
    className={`py-3 text-sm rounded-2xl px-5 cursor-pointer bg-secondary-100 font-poppins  font-medium text-[16px] text-white outline-none `}
  
  >
    {text}
  </p>
  )
}

export default Button