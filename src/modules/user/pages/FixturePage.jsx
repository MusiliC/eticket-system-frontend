/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/common/Header'
import { layout } from '../../../../style'
import FixtureCard from '../components/cards/FixtureCard'

const FixturePage = () => {
  return (
    <section className="block mt-20 ">
    <Header text={"Upcoming Fixtures"} />
    <section className="pageLayout">
   <div className="listComponentContainer">
    <FixtureCard/>
   </div>
   </section>
  </section>
  )
}

export default FixturePage