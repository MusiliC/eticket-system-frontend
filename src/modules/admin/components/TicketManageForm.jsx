/* eslint-disable no-unused-vars */
import React from 'react'
import OutlineButton from '../../../components/common/OutlineButton'
import { Link } from 'react-router-dom'

const TicketManageForm = () => {
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
      <label htmlFor="totalTickets" className="labelStyling">
        Total Tickets Allocated
      </label>
      <input
        type="number"
        name="totalTickets"
        id="totalTickets"
        className="inputStyling"
        required=""
      />
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
        className="inputStyling"
        required=""
      />
    </div>
    {/* homeTeam */}
    <div>
      <label htmlFor="vipAmount" className="labelStyling">
        Vip Ticket Amount
      </label>
      <input
        type="number"
        name="vipAmount"
        id="vipAmount"
        className="inputStyling"
        required=""
      />
    </div>
    {/* awayTeam */}
    <div>
      <label htmlFor="totalNormal" className="labelStyling">
        Total Normal Tickets
      </label>
      <input
        type="number"
        name="totalNormal"
        id="totalNormal"
        className="inputStyling"
        required=""
      />
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
  )
}

export default TicketManageForm