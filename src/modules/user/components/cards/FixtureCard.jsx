/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import OutlineButton from "../../../../components/common/OutlineButton";
import { layout } from "../../../../../style";

const FixtureCard = () => {
  return (
    <div
      className={`grid grid-cols-2 my-6 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full hover:bg-secondary-500 hover:cursor-pointer  border-b-[1px] border-primary-100 p-[17px]`}
    >
      <div className="col-span-1 flex lg:items-center lg:justify-start">
        <p>AFCON</p>
      </div>
      <div className="col-span-1 flex   flex-col lg:items-center  gap-1">
        <p>16:00 EAT</p>
        <p>Kasarani</p>
      </div>
      <div className="col-span-1 flex   flex-col lg:items-center  gap-1">
        <p>Gor Mahia</p>
        <p>Afc Leopards</p>
      </div>
      <div className="col-span-1 flex lg:items-center  lg:justify-center">
        <p>11/22/12</p>
      </div>
      <div className="col-span-1 flex lg:items-center  lg:justify-end">
        <Link>
          <OutlineButton text={"Buy Ticket"} />
        </Link>
      </div>
    </div>
  );
};

export default FixtureCard;
