/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import OutlineButton from "../../../components/common/OutlineButton";

const CreateFixtureForm = () => {
  return (
    <form className="formTicketContainer">
      <div>
        <label htmlFor="fixtureType" className="labelStyling">
          Select fixture type
        </label>
        <select name="fixtureType" id="fixtureType" className="inputStyling">
          <option value="" selected disabled hidden>
            Fixture type
          </option>
          <option value="Afcon">Afcon</option>
          <option value="KPL">KPL</option>
        </select>
      </div>
      {/* fixture time */}
      <div>
        <label htmlFor="fixtureTime" className="labelStyling">
          Fixture Time
        </label>
        <input
          type="time"
          name="fixtureTime"
          id="fixtureTime"
          className="inputStyling"
          required=""
        />
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
          className="inputStyling"
          required=""
        />
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
          className="inputStyling"
          required=""
        />
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
          className="inputStyling"
          required=""
        />
      </div>

      {/* fixture date */}
      <div>
        <label htmlFor="fixtureDate" className="labelStyling">
          Home Team
        </label>
        <input
          type="date"
          name="fixtureDate"
          id="fixtureDate"
          className="inputStyling"
          required=""
        />
      </div>
      <div className="flex">
        <Link>
          <OutlineButton text={"Create Fixture"} />
        </Link>
      </div>
    </form>
  );
};

export default CreateFixtureForm;
