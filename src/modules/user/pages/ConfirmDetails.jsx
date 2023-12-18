/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";
import { Loader } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addBookTicketAction } from "../../../redux/actions/bookTicketAction";

const ConfirmDetails = ({
  bookTicketData,
  showConfirmation,
  setShowConfirmation,
}) => {
  const { addingTicket } = useSelector((state) => state.bookTicketReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

 //

  const handleBookTicketData = async (data) => {
    const res = await dispatch(
      addBookTicketAction({ ...data, userId: 3, fixtureId: 5 })
    );
    if (res.payload.success && !addingTicket) {
      navigate("/eticket/tickets");
    }
  };

  return (
    <section className="pageLayout">
      <div className="min-h-[90vh] pt-16 pb-10 flex flex-col justify-center">
        <div className=" text-secondary-100 flex flex-col justify-center items-center">
          <p className="headerThree">Reiew your Ticket</p>
          <p className="text-primary-100 my-2 text-center">
            Please review the following information for accuracy
          </p>
        </div>
        <div className="md:w-[70%] mx-auto  flex flex-col gap-4">
          <div className="detailStyling">
            <p>Total Amount</p>
            <p>100,00</p>
          </div>
          <div className="detailStyling">
            <p>Vip Ticket Aount</p>
            <p>100,00</p>
          </div>
          <div className="detailStyling">
            <p>Normal Ticket Aount</p>
            <p>100,00</p>
          </div>
          {bookTicketData.ticketType === "VIP" ? (
            <div className="detailStyling">
              <p>Fixture Type</p>
              <p>VIP</p>
            </div>
          ) : (
            <div className="detailStyling">
              <p>Fixture Type</p>
              <p>Normal</p>
            </div>
          )}

          <div className="detailStyling">
            <p>Number of Tickets</p>
            <p>{bookTicketData.totalTickets}</p>
          </div>
          <div className="detailStyling">
            <p>Fixture</p>
            <p>Home Team vs Away Team</p>
          </div>
          <div className="detailStyling">
            <p>Email</p>
            <p>{bookTicketData.userDetails.userEmail}</p>
          </div>
          <div className="detailStyling">
            <p>Phone Number</p>
            <p>{bookTicketData.userDetails.phoneNumber}</p>
          </div>

          <div className="flex justify-between gap-5 mt-4 items-center">
            <div onClick={() => setShowConfirmation(!showConfirmation)}>
              <Button text={"Cancel"} />
            </div>
            {addingTicket ? (
              <div className="outlineButtonStyling">
                <Loader className="w-5 h-5 animate-spin" />
              </div>
            ) : (
              <button className="outlineButtonStyling">
                Proceed to Payment
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmDetails;
