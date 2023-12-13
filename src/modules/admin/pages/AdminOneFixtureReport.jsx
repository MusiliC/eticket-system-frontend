/* eslint-disable no-unused-vars */
import React from "react";
import AdminHeader from "../components/AdminHeader";
import TicketSaleCard from "../common/TicketSaleCard";

const AdminOneFixtureReport = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <AdminHeader title={"Fixture Report"} />

      <div>
        <TicketSaleCard />
      </div>
      <div className="mt-10">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Field
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Data
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4">Fixture</td>
                      <td className="whitespace-nowrap px-6 py-4">Gor Mahia vs AFC</td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4">Fixture Type</td>
                      <td className="whitespace-nowrap px-6 py-4">KPL</td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4">Total Tickets Sold</td>
                      <td className="whitespace-nowrap px-6 py-4">100</td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4">Total vip Sold</td>
                      <td className="whitespace-nowrap px-6 py-4">50</td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4">Total vip revenue</td>
                      <td className="whitespace-nowrap px-6 py-4">50,000</td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4">Total Normal Sold</td>
                      <td className="whitespace-nowrap px-6 py-4">1000</td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4">Total normal revenue</td>
                      <td className="whitespace-nowrap px-6 py-4">50,000</td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4">Total Revenue Generated</td>
                      <td className="whitespace-nowrap px-6 py-4">100,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOneFixtureReport;
