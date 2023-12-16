/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import OutlineButton from "../../../components/common/OutlineButton";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import FormInputError from "../../../components/common/FormInputError";
import { useDispatch } from "react-redux";
import { addTicketManagementAction } from "../../../redux/actions/ticketManagementAction";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TicketManageForm = ({ addingEvent, showForm, setshowForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTicketManagamentData = async (data) => {
    const res = await dispatch(addTicketManagementAction(data));
    if (res.payload.success) {
      setshowForm(false);
    }
  };

  return (
    <form
      className="formTicketContainer"
      onSubmit={handleSubmit(handleTicketManagamentData)}
    >
      <div>
        <label htmlFor="fixtureType" className="labelStyling">
          Select fixture type
        </label>
        <select
          name="fixtureType"
          id="fixtureType"
          {...register("fixtureType", {
            required: {
              value: true,
              message: "Field is required",
            },
          })}
          className="inputStyling"
        >
          <option defaultValue disabled hidden>
            Fixture type
          </option>

          <option value="KENYA_PREMIER_LEAGUE">Kenya Premier League</option>
          <option value="MOZZART_CUP">Mozzart Cup</option>
          <option value="CAF_CHAMPIONS_LEAGUE">CAF Champions League</option>
          <option value="CAF_CONFEDERATION">CAF Confederation</option>
          <option value="AFCON">AFCON</option>
        </select>
        {errors?.fixtureType && (
          <FormInputError message={errors?.fixtureType?.message} />
        )}
      </div>
      {/* fixture time */}
      <div>
        <label htmlFor="totalTickets" className="labelStyling">
          Total Tickets Allocated
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

      {/* location */}
      <div>
        <label htmlFor="totalVip" className="labelStyling">
          Total VIP Tickets
        </label>
        <input
          type="number"
          name="totalVip"
          id="totalVip"
          {...register("totalVip", {
            required: "Field is required",
            min: {
              value: 1,
              message: "Number of VIP tickets should be at-least 1",
            },
          })}
          className="inputStyling"
        />
        {errors?.totalVip && (
          <div>
            <FormInputError message={errors?.totalVip?.message} />
            {errors?.totalVip?.type === "minLength" && (
              <FormInputError message={errors?.totalVip?.message} />
            )}
          </div>
        )}
      </div>
      {/* homeTeam */}
      <div>
        <label htmlFor="vipAmount" className="labelStyling">
          Vip Ticket Amount
        </label>
        <input
          type="number"
          name="vipAmount"
          {...register("vipAmount", {
            required: "Field is required",
            min: {
              value: 1,
              message: "VIP amount should be at-least 1=/",
            },
          })}
          id="vipAmount"
          className="inputStyling"
        />
        {errors?.vipAmount && (
          <div>
            <FormInputError message={errors?.vipAmount?.message} />
            {errors?.vipAmount?.type === "minLength" && (
              <FormInputError message={errors?.vipAmount?.message} />
            )}
          </div>
        )}
      </div>
      {/* Normal tickets */}
      <div>
        <label htmlFor="totalNormal" className="labelStyling">
          Total Normal Tickets
        </label>
        <input
          type="number"
          name="totalNormal"
          id="totalNormal"
          {...register("totalNormal", {
            required: "Field is required",
            min: {
              value: 1,
              message: "Number of Normal tickets should be at-least 1",
            },
          })}
          className="inputStyling"
        />
        {errors?.totalNormal && (
          <div>
            <FormInputError message={errors?.totalNormal?.message} />
            {errors?.totalNormal?.type === "minLength" && (
              <FormInputError message={errors?.totalNormal?.message} />
            )}
          </div>
        )}
      </div>

      {/* fixture date */}
      <div>
        <label htmlFor="normalAmount" className="labelStyling">
          Normal Ticket Amount
        </label>
        <input
          type="number"
          name="normalAmount"
          id="normalAmount"
          {...register("normalAmount", {
            required: "Field is required",
            min: {
              value: 1,
              message: "Normal amount should be at-least 1=/",
            },
          })}
          className="inputStyling"
        />
        {errors?.normalAmount && (
          <div>
            <FormInputError message={errors?.normalAmount?.message} />
            {errors?.normalAmount?.type === "minLength" && (
              <FormInputError message={errors?.normalAmount?.message} />
            )}
          </div>
        )}
      </div>
      <div className="flex">
        {addingEvent ? (
          <div className="outlineButtonStyling">
            <Loader className="w-5 h-5 animate-spin" />
          </div>
        ) : (
          <button className="outlineButtonStyling">Create event</button>
        )}
      </div>
    </form>
  );
};

export default TicketManageForm;
