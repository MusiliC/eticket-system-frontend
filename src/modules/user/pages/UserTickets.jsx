/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import TicketCard from "../components/cards/TicketCard";
import { useDispatch, useSelector } from "react-redux";
import { getBookTicketAction, getUserTickets} from "../../../redux/actions/bookTicketAction";

const UserTickets = () => {
  const dispatch = useDispatch();

  const { userId } = useSelector((state) => state.authReducer);
  const [userTickets, setuserTickets] = useState([])

  console.log(userId);

  const { loading, totalTickets } = useSelector(
    (state) => state.bookTicketReducer
  );

  useEffect(() => {
    const fetch = async() => {
      const res = await dispatch(getUserTickets(userId));
      console.log(res.payload.totalTickets);
      setuserTickets(res.payload.totalTickets)
    }
    fetch()
   
  }, []);

  return (
    <section className="mt-20 w-full">
      <Header text={"My Tickets"} />
      <section className="pageLayout">
        <div className="listComponentContainer mt-3">
          {loading ? (
            <p className="headerThree">Loading..</p>
          ) : userTickets?.length < 1 ? (
            <p>No data Found</p>
          ) : (
            userTickets?.map((ticket) => (
              <TicketCard key={ticket.id} {...ticket} />
            ))
          )}
        </div>
      </section>
    </section>
  );
};

export default UserTickets;
