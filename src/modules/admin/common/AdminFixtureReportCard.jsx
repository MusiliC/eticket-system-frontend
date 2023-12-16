/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import OutlineButton from '../../../components/common/OutlineButton'

const AdminFixtureReportCard = ({...fixture}) => {
  return (
    <div className='ticketCard rounded-md'>
    <div className='col-span-1 flex lg:items-center lg:justify-start'>
        <p>{`${fixture.id}`}</p>
    </div>
    <div className='col-span-1 flex lg:items-center  lg:justify-center'>
        <p>{`fixtureDescId - ${fixture.fixtureDescId}`}</p>
    </div>
    <div className='col-span-1 flex   flex-col lg:items-center  gap-1'>
        <p>{fixture.homeTeam}</p>
        <p>{fixture.awayTeam}</p>
    </div>
    <div className='col-span-1 flex lg:items-center  lg:justify-center'>
        <p>{fixture.fixtureDate}</p>
    </div>
    <div className='col-span-1 flex lg:items-center  lg:justify-end'>
        <Link to="./1">
        <OutlineButton text={"View Report"} />
        </Link>
    </div>
</div>
  )
}

export default AdminFixtureReportCard