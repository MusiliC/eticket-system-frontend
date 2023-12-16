/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AdminHeader from "../components/AdminHeader";
import TicketSaleCard from "../common/TicketSaleCard";
import { getOneFixtureAction } from "../../../redux/actions/fixtureAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const AdminOneFixtureReport = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { fixture, loading } = useSelector((state) => state.fixtureReducer);

  useEffect(() => {
    if (id) {
      dispatch(getOneFixtureAction(id));
    }

  }, [id]);

  useEffect(() => {

  }, [fixture]);

  var totalNormaTicketRevenue = fixture?.ticketManagement?.totalNormalTicketsSold * fixture?.ticketManagement?.normalAmount;
  var totalVipTicketRevenue = fixture?.ticketManagement?.totalVipTicketsSold * fixture?.ticketManagement?.vipAmount;

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <AdminHeader title={"Fixture Report"} />

      <div>
        <TicketSaleCard totalTickets = {fixture?.ticketManagement?.totalTickets} totalVip = {fixture?.ticketManagement?.totalVip}  totalNormal = {fixture?.ticketManagement?.totalNormal}  />
      </div>
      <div className="mt-10">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-300 rounded-lg">
                <table className="min-w-full text-left text-sm font-light  ">
                  <thead className="border-b font-medium dark:border-neutral-500  uppercase bg-gray-50">
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
                    <tr className="trStyling">
                      <td className="whitespace-nowrap px-6 py-4">Fixture</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {`${fixture?.homeTeam} vs ${fixture?.awayTeam}`} 
                      </td>
                    </tr>
                    <tr className="trStyling">
                      <td className="whitespace-nowrap px-6 py-4">
                       Fixture type
                      </td>
                      <td className="whitespace-nowrap px-6 py-4"> {fixture?.ticketManagement?.fixtureType}</td>
                    </tr>
                    <tr className="trStyling">
                      <td className="whitespace-nowrap px-6 py-4">
                        Total Tickets Sold
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">{`${fixture?.ticketManagement?.totalVipTicketsSold + fixture?.ticketManagement?.totalNormalTicketsSold}`}  </td>
                    </tr>
                    <tr className="trStyling">
                      <td className="whitespace-nowrap px-6 py-4">
                        Total vip Sold
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">{fixture?.ticketManagement?.totalVipTicketsSold} </td>
                    </tr>
                    <tr className="trStyling">
                      <td className="whitespace-nowrap px-6 py-4">
                        Total vip revenue
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                      {totalVipTicketRevenue}
                      </td>
                    </tr>
                    <tr className="trStyling">
                      <td className="whitespace-nowrap px-6 py-4">
                        Total Normal Sold
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">{fixture.ticketManagement?.totalNormalTicketsSold}</td>
                    </tr>
                    <tr className="trStyling">
                      <td className="whitespace-nowrap px-6 py-4">
                        Total normal revenue
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                      {totalNormaTicketRevenue}
                      </td>
                    </tr>
                    <tr className="trStyling">
                      <td className="whitespace-nowrap px-6 py-4">
                        Total Revenue Generated
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {totalNormaTicketRevenue + totalVipTicketRevenue}
                      </td>
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
