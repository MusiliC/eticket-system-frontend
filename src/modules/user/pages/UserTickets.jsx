/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Header from "../components/common/Header";
import TicketCard from "../components/cards/TicketCard";
import { useDispatch, useSelector } from "react-redux";
import { getBookTicketAction } from "../../../redux/actions/bookTicketAction";

const UserTickets = () => {
  const dispatch = useDispatch();

  const { loading, totalTickets } = useSelector(
    (state) => state.bookTicketReducer
  );

  useEffect(() => {
    dispatch(getBookTicketAction());
  }, []);

  return (
    <section className="mt-20 w-full">
      <Header text={"My Tickets"} />
      <section className="pageLayout">
        <div className="listComponentContainer mt-3">
          {loading ? (
            <p className="headerThree">Loading..</p>
          ) : totalTickets?.length === 0 ? (
            <p>No data Found</p>
          ) : (
            totalTickets?.map((ticket) => (
              <TicketCard key={ticket.id} {...ticket} />
            ))
          )}
        </div>
      </section>
    </section>
  );
};

export default UserTickets;
