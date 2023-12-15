/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AdminHeader from "../components/AdminHeader";
import UsersTable from "../components/UsersTable";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/actions/authAction";

const AdminUserReport = () => {
  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <AdminHeader title={"User Report"} />

      <section>
        {loading ? (
          <p className="headerThree">Loading...</p>
        ) : users?.length === 0 ? (
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
                          Username
                        </th>
                        <th scope="col" className="px-6 py-4">
                          VIP Tickets{" "}
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Normal Tickets
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-neutral-500">
                        <td>No user found</td>
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
                          Username
                        </th>
                        <th scope="col" className="px-6 py-4">
                          VIP Tickets{" "}
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Normal Tickets
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <>
                        {users.map((user) => (
                          <UsersTable key={user.id} {...user} />
                        ))}
                      </>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default AdminUserReport;
