/* eslint-disable no-unused-vars */
import React from "react";

const TicketManagementTable = ({ ...event }) => {
  return (
    <>
      <tr className="border-b dark:border-neutral-500">
        <td className="whitespace-nowrap px-6 py-4 font-medium">{event.id}</td>
        <td className="whitespace-nowrap px-6 py-4">{event.fixtureType}</td>
        <td className="whitespace-nowrap px-6 py-4">{event.totalTickets}</td>
        <td className="whitespace-nowrap px-6 py-4">{event.totalVip}</td>
        <td className="whitespace-nowrap px-6 py-4">{event.vipAmount}</td>
        <td className="whitespace-nowrap px-6 py-4">{event.totalNormal}</td>
        <td className="whitespace-nowrap px-6 py-4">{event.normalAmount}</td>
      </tr>
    </>
  );
};

export default TicketManagementTable;
