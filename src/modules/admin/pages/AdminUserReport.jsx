/* eslint-disable no-unused-vars */
import React from "react";
import AdminHeader from "../components/AdminHeader";

const AdminUserReport = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <AdminHeader title={"User Report"} />

      <section>
      <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                  <th scope="col" className="px-6 py-4">Username</th>
                  <th scope="col" className="px-6 py-4">VIP Tickets </th>
                  <th scope="col" className="px-6 py-4">Normal Tickets</th>
              
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">Mark</td>
                  <td className="whitespace-nowrap px-6 py-4">1</td>
                  <td className="whitespace-nowrap px-6 py-4">2</td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                  <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                  <td className="whitespace-nowrap px-6 py-4">10</td>
                  <td className="whitespace-nowrap px-6 py-4">3</td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                  <td className="whitespace-nowrap px-6 py-4">Larry</td>
                  <td className="whitespace-nowrap px-6 py-4">4</td>
                  <td className="whitespace-nowrap px-6 py-4">5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
      </section>
    </div>
  );
};

export default AdminUserReport;
