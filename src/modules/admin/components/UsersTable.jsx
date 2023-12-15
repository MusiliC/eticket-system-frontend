/* eslint-disable no-unused-vars */
import React from "react";

const UsersTable = ({...user}) => {
  return (
    <tr className="border-b dark:border-neutral-500">
      <td className="whitespace-nowrap px-6 py-4 font-medium">{user.id}</td>
      <td className="whitespace-nowrap px-6 py-4">{user.username}</td>
      <td className="whitespace-nowrap px-6 py-4">{user.vipTickets}</td>
      <td className="whitespace-nowrap px-6 py-4">{user.normalTickets}</td>
    </tr>
  );
};

export default UsersTable;
