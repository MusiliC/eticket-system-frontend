/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../../../components/common/Button";
import OutlineButton from "../../../components/common/OutlineButton";
import fkf from "/public/fkf.png";
import { getOneTicketAction } from "../../../redux/actions/bookTicketAction";
import { useDispatch, useSelector } from "react-redux";

const OneTicket = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, ticket } = useSelector((state) => state.bookTicketReducer);

  useEffect(() => {
    if (id) {
      dispatch(getOneTicketAction(id));
    }
  }, [id]);

  useEffect(() => {
    //console.log(ticket);
  }, [ticket]);

  return (
    <section className="pageLayout">
      <div className="smallComponentContainer gap-8 pt-28">
        <div>
          <h2 className="headerThree text-secondary-100">Ticket Details</h2>
        </div>
        <div className="w-full">
          <div className="w-full md:w-[70%] p-[10px] md:p-[20px] mx-auto rounded-[5px] border shadow-md border-gray-300">
            <div className="oneTicketTop">
              <div className="flex items-center justify-around">
                <div className="imagePart">
                  <img src={fkf} alt="Logo" />
                </div>
              </div>
              <div className="bottomTicketPart">
                <div className="flex items-center justify-center p-[10px]">
                  <div className="flex flex-col gap-3 text-center font-semibold">
                    <p className="kpl">
                      {ticket?.fixture?.ticketManagement?.fixtureType}
                    </p>
                    <p className="game">{`${ticket?.fixture?.homeTeam} vs ${ticket?.fixture?.awayTeam}`}</p>
                    <p className="date">{ticket?.fixture?.fixtureDate}</p>
                  </div>
                </div>
                <div className="flex items-start flex-wrap justify-between p-[10px] mt-[10px]">
                  <div className="flex flex-col gap-[12px] text-start">
                    <div className="ticketType">
                      <p>Type: {ticket?.ticketType}</p>
                    </div>

                    <div className="amount">
                      <p>
                        Name:{" "}
                        {ticket.ticketOwner}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[12px] text-start">
                    <div className="ticketNumber">
                      <p>Ticket no: {ticket?.ticketNumber}</p>
                    </div>
                    <div className="kickOff">
                      <p>Time: {ticket?.fixture?.fixtureTime}</p>
                    </div>
                    <div className="location">
                      <p>Location: {ticket?.fixture?.fixtureLocation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* buttons */}
          <div className="flex gap-8 my-10 justify-center">
            <Link to="/eticket/tickets" className="ticketNormalButton">
              <Button text={"Back"} />
            </Link>
            <Link to="#" className="ticketOutlineButton">
              <OutlineButton text={"Download"} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneTicket;
