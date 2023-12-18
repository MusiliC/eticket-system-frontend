/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Header from '../components/common/Header'
import FixtureCard from '../components/cards/FixtureCard'
import { getFixtureAction } from '../../../redux/actions/fixtureAction';
import { useDispatch, useSelector } from 'react-redux';

const FixturePage = () => {
  const dispatch = useDispatch();

  const { fixture, totalFixtures, loading } = useSelector(
    (state) => state.fixtureReducer
  );



  useEffect(() => {
    dispatch(getFixtureAction());
  }, []);

  return (
    <section className="block mt-20 ">
    <Header text={"Upcoming Fixtures"} />
    <section className="pageLayout">
   <div className="listComponentContainer mt-5">
    {
      loading ? (
        <p className="headerThree" >Loading..</p>
      ) : totalFixtures?.length === 0 ? (
        <p >No data Found</p>
      ) : (
        totalFixtures?.map((fixture) => (
          
          <FixtureCard key={fixture.id} {...fixture} />
        ))
      )
    }
   </div>
   </section>
  </section>
  )
}

export default FixturePage