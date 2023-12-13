/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/common/Header'
import TicketCard from '../components/cards/TicketCard'

const UserTickets = () => {
  return (
   <section className="mt-20 w-full">
     <Header text={"My Tickets"} />
     <section className="pageLayout">
    <div className="listComponentContainer">
     <TicketCard/>    
    </div>
    </section>
   </section>
  )
}

export default UserTickets