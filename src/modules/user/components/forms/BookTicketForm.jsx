/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormInputError from "../../../../components/common/FormInputError";
import Button from "../../../../components/common/Button";

import { useSelector } from "react-redux";
import { Loader } from "lucide-react";
import ConfirmDetails from "../../pages/ConfirmDetails";

const BookTicketForm = ({ id }) => {
  const {
    register,   
    handleSubmit,
    formState: { errors },
  } = useForm();


  const { addingTicket } = useSelector((state) => state.bookTicketReducer);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookTicketData, setBookTicketData] = useState({});

  const handleBookTicketData = async (data) => {
    setShowConfirmation(true);
    setBookTicketData({ fixtureId: id, ...data });
  };



  return (
    <>
      {showConfirmation ? (
        <ConfirmDetails
          showConfirmation={showConfirmation}
          setShowConfirmation={setShowConfirmation}
          bookTicketData={bookTicketData}
        />
      ) : (
        <form
          className="formTicketContainer"
          onSubmit={handleSubmit(handleBookTicketData)}
        >
          <div>
            <label htmlFor="ticketType" className="labelStyling">
              Select ticket type
            </label>
            <select
              name="ticketType"
              id="ticketType"
              {...register("ticketType", {
                required: {
                  value: true,
                  message: "Field is required",
                },
              })}
              className="inputStyling"
            >
              <option value="" defaultValue disabled hidden>
                Ticket type
              </option>
              <option value="VIP">VIP</option>
              <option value="NORMAL">Normal</option>
            </select>
            {errors?.ticketType && (
              <FormInputError message={errors?.ticketType?.message} />
            )}
          </div>

          {/* Number of tickets */}
          <div>
            <label htmlFor="totalTickets" className="labelStyling">
              Number of Tickets
            </label>
            <input
              type="number"
              name="totalTickets"
              id="totalTickets"
              {...register("totalTickets", {
                required: "Field is required",
                min: {
                  value: 1,
                  message: "Number of tickets should be at-least 1",
                },
              })}
              className="inputStyling"
            />
            {errors?.totalTickets && (
              <div>
                <FormInputError message={errors?.totalTickets?.message} />
                {errors?.totalTickets?.type === "minLength" && (
                  <FormInputError message={errors?.totalTickets?.message} />
                )}
              </div>
            )}
          </div>

          {/* phone number */}
          <div>
            <label htmlFor="phoneNumber" className="labelStyling">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              {...register("userDetails.phoneNumber", {
                required: {
                  value: true,
                  message: "Field is required",
                },
              })}
              className="inputStyling"
            />
            {errors?.userDetails?.phoneNumber && (
              <FormInputError
                message={errors?.userDetails?.phoneNumber?.message}
              />
            )}
          </div>

          {/* user email */}
          <div>
            <label htmlFor="userEmail" className="labelStyling">
              Email
            </label>
            <input
              type="email"
              name="userEmail"
              {...register("userDetails.userEmail", {
                required: {
                  value: true,
                  message: "Field is required",
                },
              })}
              id="userEmail"
              className="inputStyling"
            />
            {errors?.userDetails?.userEmail && (
              <FormInputError
                message={errors?.userDetails?.userEmail?.message}
              />
            )}
          </div>

          <div className="flex justify-between items-center">
            <Link to={"/eticket/fixtures"}>
              <Button text={"Cancel"} />
            </Link>
            {addingTicket ? (
              <div className="outlineButtonStyling">
                <Loader className="w-5 h-5 animate-spin" />
              </div>
            ) : (
              <button className="outlineButtonStyling">Book Ticket</button>
            )}
          </div>
        </form>
      )}
    </>
  );
};

export default BookTicketForm;
