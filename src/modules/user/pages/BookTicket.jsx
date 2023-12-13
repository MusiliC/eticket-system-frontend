/* eslint-disable no-unused-vars */
import React from "react";
import BookTicketForm from "../components/forms/BookTicketForm";

const BookTicket = () => {
  return (
    <section className="pageLayout">
      <div className="smallComponentContainer ">
        <div className="headerThree text-secondary-100">
          <p>Book Ticket</p>
        </div>
        <BookTicketForm />
      </div>
    </section>
  );
};

export default BookTicket;
