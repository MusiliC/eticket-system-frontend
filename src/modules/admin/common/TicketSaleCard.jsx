/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ticketIcon from "/public/ticket.png";

const TicketSaleCard = ({ totalTickets, totalVip, totalNormal }) => {
  return (
    <section className="flex items-center justify-between">
      <div className="flex gap-4 border border-gray-500 rounded-md p-5 items-center">
        <img src={ticketIcon} alt="" />
        <div className="flex flex-col gap-1">
          <p className="text-xl">{totalTickets}</p>
          <p>Total Tickets</p>
        </div>
      </div>

      <div className="flex gap-4 border border-gray-500 rounded-md p-5 items-center">
        <img src={ticketIcon} alt="" />
        <div className="flex flex-col gap-1">
          <p className="text-xl">{totalNormal}</p>
          <p>Normal Tickets</p>
        </div>
      </div>

      <div className="flex gap-4 border border-gray-500 rounded-md p-5 items-center">
        <img src={ticketIcon} alt="" />
        <div className="flex flex-col gap-1">
          <p className="text-xl">{totalVip}</p>
          <p>VIP Tickets</p>
        </div>
      </div>
    </section>
  );
};

export default TicketSaleCard;
