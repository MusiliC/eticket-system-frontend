// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const OutlineButton = ({text}) => {
    return (
        <p
        type="button"
        className={`py-2.5 text-sm cursor-pointer font-poppins  font-medium text-[16px] bg-transparent hover:bg-secondary-100 text-secondary-100  hover:text-white px-5 border border-secondary-100 hover:border-transparent rounded-2xl`}
      >
        {text}
      </p>
      )
}

export default OutlineButton