/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../../components/common/Button'

const TicketCard = ({...ticket}) => {

  return (
    <div className='ticketCard'>
        <div className='col-span-1 flex lg:items-center lg:justify-start'>
            <p>{ticket?.ticketNumber}</p>
        </div>
        <div className='col-span-1 flex lg:items-center  lg:justify-center'>
            <p>{ticket.fixture?.ticketManagement?.fixtureType}</p>
        </div>
        <div className='col-span-1 flex   flex-col lg:items-center  gap-1'>
            <p>{ticket.fixture?.homeTeam}</p>
            <p>{ticket.fixture?.awayTeam}</p>
        </div>
        <div className='col-span-1 flex lg:items-center  lg:justify-center'>
            <p>{ticket.fixture?.fixtureDate}</p>
        </div>
        <div className='col-span-1 flex lg:items-center  lg:justify-end'>
            <Link to="./1">
            <Button text={"View"} />
            </Link>
        </div>
    </div>
  )
}

export default TicketCard