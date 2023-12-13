/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../../components/common/Button'

const TicketCard = () => {
  return (
    <div className='ticketCard'>
        <div className='col-span-1 flex items-center lg:justify-start'>
            <p>Ticket No</p>
        </div>
        <div className='col-span-1 flex lg:items-center  lg:justify-center'>
            <p>CAF Champions League</p>
        </div>
        <div className='col-span-1 flex   flex-col lg:items-center  gap-1'>
            <p>Gor Mahia</p>
            <p>Afc Leopards</p>
        </div>
        <div className='col-span-1 flex lg:items-center  lg:justify-center'>
            <p>11/22/12</p>
        </div>
        <div className='col-span-1 flex lg:items-center  lg:justify-end'>
            <Link>
            <Button text={"View"} />
            </Link>
        </div>
    </div>
  )
}

export default TicketCard