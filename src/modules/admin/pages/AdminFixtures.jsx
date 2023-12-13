/* eslint-disable no-unused-vars */
import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Button from '../../../components/common/Button'
import FixtureCard from '../../user/components/cards/FixtureCard'
import AdminFixtureCard from '../common/AdminFixtureCard'

const AdminFixtures = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl' >
      <AdminHeader title={"Admin Fixtures"} />

      <div className='flex mb-10'>
        <Button text={"Create Fixture"} />
      </div>
      <div>
        <AdminFixtureCard/>
       
      </div>
    </div>
  )
}

export default AdminFixtures