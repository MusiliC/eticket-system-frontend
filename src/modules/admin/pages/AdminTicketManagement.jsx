/* eslint-disable no-unused-vars */
import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Button from '../../../components/common/Button'

const AdminTicketManagement = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl' >
    <AdminHeader title={"Ticket Management"} />

    <div className='flex mb-10'>
      <Button text={"Create Event"} />
    </div>
    <div>
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                  <th scope="col" className="px-6 py-4">Fixture Type</th>
                  <th scope="col" className="px-6 py-4">Total Tickets</th>
                  <th scope="col" className="px-6 py-4">VIP Tickets</th>
                  <th scope="col" className="px-6 py-4">VIP Ticket Amount</th>
                  <th scope="col" className="px-6 py-4">Normal Tickets</th>
                  <th scope="col" className="px-6 py-4">Normal Ticket Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">AFCON</td>
                  <td className="whitespace-nowrap px-6 py-4">60,000</td>
                  <td className="whitespace-nowrap px-6 py-4">1000</td>
                  <td className="whitespace-nowrap px-6 py-4">3,000</td>
                  <td className="whitespace-nowrap px-6 py-4">59000</td>
                  <td className="whitespace-nowrap px-6 py-4">1,000</td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                  <td className="whitespace-nowrap px-6 py-4">KPL</td>
                  <td className="whitespace-nowrap px-6 py-4">50,000</td>
                  <td className="whitespace-nowrap px-6 py-4">1000</td>
                  <td className="whitespace-nowrap px-6 py-4">1,000</td>
                  <td className="whitespace-nowrap px-6 py-4">49000</td>
                  <td className="whitespace-nowrap px-6 py-4">2,000</td>
                </tr>
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}

export default AdminTicketManagement