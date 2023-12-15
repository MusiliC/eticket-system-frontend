/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import OutlineButton from "../../../../components/common/OutlineButton";


const FixtureCard = ({...fixture}) => {
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full hover:bg-secondary-500 hover:cursor-pointer  border-b-[1px] border-primary-100 p-[17px]`}
    >
      <div className="col-span-1 flex lg:items-center lg:justify-start">
        <p>{fixture.fixtureType}</p>
      </div>
      <div className="col-span-1 flex   flex-col lg:items-center  gap-1">
        <p>{`${fixture.fixtureTime} EAT`}</p>
        <p>{fixture.fixtureLocation}</p>
      </div>
      <div className="col-span-1 flex   flex-col lg:items-center  gap-1">
        <p>{fixture.homeTeam}</p>
        <p>{fixture.awayTeam}</p>
      </div>
      <div className="col-span-1 flex lg:items-center  lg:justify-center">
        <p>{fixture.fixtureDate}</p>
      </div>
      <div className="col-span-1 flex lg:items-center  lg:justify-end">
        <Link to={"/eticket/book"}>
          <OutlineButton text={"Buy Ticket"} />
        </Link>
      </div>
    </div>
  );
};

export default FixtureCard;
