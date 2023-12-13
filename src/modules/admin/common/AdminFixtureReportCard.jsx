/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import OutlineButton from '../../../components/common/OutlineButton'

const AdminFixtureReportCard = () => {
  return (
    <div className='ticketCard'>
    <div className='col-span-1 flex lg:items-center lg:justify-start'>
        <p>Fixture id</p>
    </div>
    <div className='col-span-1 flex lg:items-center  lg:justify-center'>
        <p>CAF Champions League</p>
    </div>
    <div className='col-span-1 flex   flex-col lg:items-center  gap-1'>
        <p>Gor Mahia</p>
        <p>Afc Leopards</p>
    </div>
    <div className='col-span-1 flex lg:items-center  lg:justify-center'>
        <p>11/22/12</p>
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