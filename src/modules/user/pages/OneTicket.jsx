/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/common/Button'
import OutlineButton from '../../../components/common/OutlineButton'
import fkf from "/public/fkf.png"


const OneTicket = () => {
  return (
    <section className="pageLayout">
      <div className="smallComponentContainer gap-8 pt-28" >
      <div>
        <h2 className="headerThree text-secondary-100">
            Ticket Details
        </h2>
      </div>
      <div className='w-full' >
      <div className="w-full md:w-[70%] p-[10px] md:p-[20px] mx-auto rounded-[5px] border shadow-md border-gray-300">
        <div className="oneTicketTop">
          <div className="flex items-center justify-around">
            <div className="imagePart">
              <img
                src={fkf}
                alt="Logo"
              />
            </div>
          </div>
          <div className="bottomTicketPart">
            <div className="flex items-center justify-center p-[10px]">
              <div className="flex flex-col gap-3 text-center font-semibold">
                <p className="kpl">Kenya Premier League</p>
                <p className="game">Gor Mahia vs Afc Leopards</p>
                <p className="date">3/11/2023</p>
              </div>
            </div>
            <div className="flex items-start flex-wrap justify-between p-[10px] mt-[10px]">
              <div className="flex flex-col gap-[12px] text-start">
                <div className="ticketType">
                  <p>Type: VIP</p>
                </div>

                <div className="amount">
                  <p>Amount: 500</p>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] text-start">
                <div className="ticketNumber">
                  <p>Ticket Number: 1001</p>
                </div>
                <div className="kickOff">
                  <p>Kick Off: 1300 hrs</p>
                </div>
                <div className="location">
                  <p>Location: Kasarani</p>
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
  )
}

export default OneTicket