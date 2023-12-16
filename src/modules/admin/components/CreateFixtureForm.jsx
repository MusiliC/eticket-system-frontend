/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormInputError from "../../../components/common/FormInputError";
import { useDispatch, useSelector } from "react-redux";
import { getTicketManagementAction } from "../../../redux/actions/ticketManagementAction";
import { addFixtureAction } from "../../../redux/actions/fixtureAction";
import { Loader } from "lucide-react";

const CreateFixtureForm = ({ addingFixture, showForm, setshowForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const handleFixtureData = async (data) => {
    const res = await dispatch(addFixtureAction(data));
    if (res.payload.success) {
      setshowForm(false);
    }
  };

  const { loading, ticketEvents } = useSelector(
    (state) => state.ticketManagementReducer
  );

  useEffect(() => {
    dispatch(getTicketManagementAction());
  }, []);

  return (
    <form
      className="formTicketContainer"
      onSubmit={handleSubmit(handleFixtureData)}
    >
      <div>
        <label htmlFor="fixtureDescId" className="labelStyling">
          Select fixture type
        </label>

        <select
          name="fixtureDescId"
          {...register("fixtureDescId", {
            required: {
              value: true,
              message: "Field is required",
            },
          })}
          id="fixtureDescId"
          className="inputStyling"
        >
          {ticketEvents?.map((event) => (
            <option key={event.id} value={event.id}>
              {event.fixtureType}
            </option>
          ))}
        </select>

        {errors?.fixtureDescId && (
          <FormInputError message={errors?.fixtureDescId?.message} />
        )}
      </div>
      {/* fixture time */}
      <div>
        <label htmlFor="fixtureTime" className="labelStyling">
          Fixture Time
        </label>
        <input
          type="time"
          name="fixtureTime"
          {...register("fixtureTime", {
            required: {
              value: true,
              message: "Field is required",
            },
          })}
          id="fixtureTime"
          className="inputStyling"
        />
        {errors?.fixtureTime && (
          <FormInputError message={errors?.fixtureTime?.message} />
        )}
      </div>

      {/* location */}
      <div>
        <label htmlFor="fixtureLocation" className="labelStyling">
          Fixture Location
        </label>
        <input
          type="text"
          name="fixtureLocation"
          id="fixtureLocation"
          {...register("fixtureLocation", {
            required: {
              value: true,
              message: "Field is required",
            },
          })}
          className="inputStyling"
        />
        {errors?.fixtureLocation && (
          <FormInputError message={errors?.fixtureLocation?.message} />
        )}
      </div>
      {/* homeTeam */}
      <div>
        <label htmlFor="homeTeam" className="labelStyling">
          Home Team
        </label>
        <input
          type="text"
          name="homeTeam"
          id="homeTeam"
          {...register("homeTeam", {
            required: {
              value: true,
              message: "Field is required",
            },
          })}
          className="inputStyling"
        />
        {errors?.homeTeam && (
          <FormInputError message={errors?.homeTeam?.message} />
        )}
      </div>
      {/* awayTeam */}
      <div>
        <label htmlFor="awayTeam" className="labelStyling">
          Away Team
        </label>
        <input
          type="text"
          name="awayTeam"
          id="awayTeam"
          {...register("awayTeam", {
            required: {
              value: true,
              message: "Field is required",
            },
          })}
          className="inputStyling"
        />
        {errors?.awayTeam && (
          <FormInputError message={errors?.awayTeam?.message} />
        )}
      </div>

      {/* fixture date */}
      <div>
        <label htmlFor="fixtureDate" className="labelStyling">
          Fixture Date
        </label>
        <input
          type="date"
          name="fixtureDate"
          {...register("fixtureDate", {
            required: {
              value: true,
              message: "Field is required",
            },
          })}
          id="fixtureDate"
          className="inputStyling"
        />
        {errors?.fixtureDate && (
          <FormInputError message={errors?.fixtureDate?.message} />
        )}
      </div>
      <div className="flex">
        {addingFixture ? (
          <div className="outlineButtonStyling">
            <Loader className="w-5 h-5 animate-spin" />
          </div>
        ) : (
          <button className="outlineButtonStyling">Create Fixture</button>
        )}
      </div>
    </form>
  );
};

export default CreateFixtureForm;
