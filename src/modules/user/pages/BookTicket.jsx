/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import BookTicketForm from "../components/forms/BookTicketForm";
import { useParams } from "react-router-dom";


const BookTicket = () => {
  const { id } = useParams();

  return (
    <section className="pageLayout">
      <div className="smallComponentContainer ">
        <div className="headerThree text-secondary-100">
          <p>Book Ticket</p>
        </div>
        <BookTicketForm id={id} />
      </div>
    </section>
  );
};

export default BookTicket;
