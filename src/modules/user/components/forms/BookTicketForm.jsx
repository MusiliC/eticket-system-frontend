/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import OutlineButton from "../../../../components/common/OutlineButton";
import { useForm } from "react-hook-form";
import FormInputError from "../../../../components/common/FormInputError";

const BookTicketForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="formTicketContainer" onSubmit={handleSubmit(onSubmit)}>
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
          <option value="" selected disabled hidden>
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
        <label htmlFor="user_number" className="labelStyling">
          Phone Number
        </label>
        <input
          type="text"
          name="user_number"
          id="user_number"
          {...register("user_number", {
            required: {
              value: true,
              message: "Field is required",
            },
          })}
          className="inputStyling"
        />
        {errors?.user_number && (
          <FormInputError message={errors?.user_number?.message} />
        )}
      </div>

      {/* user email */}
      <div>
        <label htmlFor="user_email" className="labelStyling">
          Email
        </label>
        <input
          type="email"
          name="user_email"
          {...register("user_email", {
            required: {
              value: true,
              message: "Field is required",
            },
          })}
          id="user_email"
          className="inputStyling"
        />
        {errors?.user_email && (
          <FormInputError message={errors?.user_email?.message} />
        )}
      </div>

      <div className="flex">
        <button>Book Ticket</button>
        <Link>
          <OutlineButton text={"Book Ticket"} />
        </Link>
      </div>
    </form>
  );
};

export default BookTicketForm;
