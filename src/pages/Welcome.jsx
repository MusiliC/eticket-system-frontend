/* eslint-disable no-unused-vars */
import React from "react";
import OutlineButton from "../components/common/OutlineButton";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section className="w-full h-screen bg-secondary-500 flex flex-col justify-center items-center">
      <div className="w-5/6 mx-auto">
        <div className="md:w-[70%] text-center mx-auto">
          <div className="my-10">
            <p className="text-3xl md:text-5xl font-bold leading-[3rem] lg:tracking-[2px] lg:leading-[3.5rem] lg:font-bold ">
              Welcome
            </p>
            <p className="text-xl md:text-2xl">            
              Embrace an enhanced sports experience.
            </p>
          </div>
          <p className="text-sm md:text-base">
            The eTicket Sports System is a digital platform facilitating
            seamless ticketing for sports events. Offering convenience and
            efficiency, it enables fans to purchase and manage electronic
            tickets, enhancing the overall spectator experience.
          </p>

          <div className="flex justify-center my-10 items-center gap-5">
            <Link to="/login">
              <Button text={"Login"} />
            </Link>
            <Link to="/signup">
              <OutlineButton text={"Sign Up"} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
