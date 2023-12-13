/* eslint-disable no-unused-vars */
import React from "react";
import ticketIcon from "/public/ticket.png";

const TicketSaleCard = () => {
  return (
    <section className="flex items-center justify-between">
      <div className="flex gap-4 border border-gray-500 rounded-md p-5 items-center">
        <img src={ticketIcon} alt="" />
        <div className="flex flex-col gap-1">
          <p className="text-xl">160000</p>
          <p >Total Tickets</p>
        </div>
      </div>

      <div className="flex gap-4 border border-gray-500 rounded-md p-5 items-center">
        <img src={ticketIcon} alt="" />
        <div className="flex flex-col gap-1">
          <p className="text-xl">60000</p>
          <p >Normal Tickets</p>
        </div>
      </div>

      <div className="flex gap-4 border border-gray-500 rounded-md p-5 items-center">
        <img src={ticketIcon} alt="" />
        <div className="flex flex-col gap-1">
          <p className="text-xl">9000</p>
          <p >VIP Tickets</p>
        </div>
      </div>

      
    
    </section>
  );
};

export default TicketSaleCard;
