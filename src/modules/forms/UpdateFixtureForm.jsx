/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormInputError from "../../components/common/FormInputError";
import { useDispatch, useSelector } from "react-redux";
import { getTicketManagementAction } from "../../redux/actions/ticketManagementAction";

import { Loader } from "lucide-react";
import { updateFixtureAction, getOneFixtureAction } from "../../redux/actions/fixtureAction";
import { Link, useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../admin/components/AdminHeader";
import Button from "../../components/common/Button";

const UpdateFixtureForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { fixture, updatingFixture } = useSelector((state) => state.fixtureReducer);

  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleFixtureData = async (data) => {
    const res = await dispatch(updateFixtureAction(id, data));
    navigate("/admin");
  };

  const { loading, ticketEvents } = useSelector(
    (state) => state.ticketManagementReducer
  );

  useEffect(() => {
    dispatch(getTicketManagementAction());
  }, []);

  useEffect(() => {
    dispatch(getOneFixtureAction(id))
    console.log(fixture);
  })

  useEffect(() => {}, [fixture]);

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <AdminHeader title={"Update Fixture"} />
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
        <div className="flex justify-between items-center">
          <Link to={"/admin"}>
            <Button text={"Cancel"} />
          </Link>
          {updatingFixture ? (
            <div className="outlineButtonStyling">
              <Loader className="w-5 h-5 animate-spin" />
            </div>
          ) : (
            <button className="outlineButtonStyling">Update Fixture</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UpdateFixtureForm;
