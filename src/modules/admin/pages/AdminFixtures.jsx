/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Button from "../../../components/common/Button";
import AdminFixtureCard from "../common/AdminFixtureCard";
import CreateFixtureForm from "../components/CreateFixtureForm";
import { useDispatch, useSelector } from "react-redux";
import { getFixtureAction } from "../../../redux/actions/fixtureAction";


const AdminFixtures = () => {
  const [showForm, setshowForm] = useState(false);

  const dispatch = useDispatch();

  const { fixture, totalFixtures, loading } = useSelector(
    (state) => state.fixtureReducer
  );

  useEffect(() => {
    dispatch(getFixtureAction());
  }, []);

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <AdminHeader title={"Admin Fixtures"} />

      <div className="flex mb-10" onClick={() => setshowForm((prev) => !prev)}>
        <Button text={showForm ? "Cancel" : "Create Fixture"} />
      </div>
      <div>
        {showForm ? (
          <CreateFixtureForm />
        ) : loading ? (
          <p className="headerThree" >Loading..</p>
        ) : totalFixtures?.length === 0 ? (
          <p >No data Found</p>
        ) : (
          totalFixtures?.map((fixture) => (
            
            <AdminFixtureCard key={fixture.id} {...fixture}/>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminFixtures;
