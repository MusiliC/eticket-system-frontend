/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Button from "../../../components/common/Button";
import TicketManageForm from "../components/TicketManageForm";
import { useDispatch, useSelector } from "react-redux";
import { getTicketManagementAction } from "../../../redux/actions/ticketManagementAction";
import TicketManagementTable from "../components/TicketManagementTable";

const AdminTicketManagement = () => {
  const [showForm, setshowForm] = useState(false);
  const dispatch = useDispatch();

  const { loading, ticketEvents,  addingEvent } = useSelector(
    (state) => state.ticketManagementReducer
  );

  useEffect(() => {
    dispatch(getTicketManagementAction());
  }, [showForm]);

  

 

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <AdminHeader title={"Ticket Management"} />

      <div className="flex mb-10" onClick={() => setshowForm((prev) => !prev)}>
        <Button text={showForm ? "Cancel" : "Create Event"} />
      </div>
      <div>
        {
          showForm ? (
            <TicketManageForm addingEvent = {addingEvent} showForm={showForm}
            setshowForm={setshowForm} />
          ) : loading ? (
            <p className="headerThree">Loading...</p>
          ) : ticketEvents?.length === 0 ? (
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                      <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th scope="col" className="px-6 py-4">
                            #
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Fixture Type
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Total Tickets
                          </th>
                          <th scope="col" className="px-6 py-4">
                            VIP Tickets
                          </th>
                          <th scope="col" className="px-6 py-4">
                            VIP Ticket Amount
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Normal Tickets
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Normal Ticket Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="7" className="text-center p-3" >No data found</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                      <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th scope="col" className="px-6 py-4">
                            #
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Fixture Type
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Total Tickets
                          </th>
                          <th scope="col" className="px-6 py-4">
                            VIP Tickets
                          </th>
                          <th scope="col" className="px-6 py-4">
                            VIP Ticket Amount
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Normal Tickets
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Normal Ticket Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <>
                          {ticketEvents.map((event) => (
                            <TicketManagementTable key={event.id} {...event} />
                          ))}
                        </>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )
          //<TicketManagementTable/>
        }
      </div>
    </div>
  );
};

export default AdminTicketManagement;
