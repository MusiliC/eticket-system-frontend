/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminFixtureReportCard from "../common/AdminFixtureReportCard";
import { useDispatch, useSelector } from "react-redux";
import { getFixtureAction } from "../../../redux/actions/fixtureAction";
import { Loader } from "lucide-react";

const AdminFixtureReport = () => {
  const dispatch = useDispatch();

  const { fixture, totalFixtures, loading } = useSelector(
    (state) => state.fixtureReducer
  );

  useEffect(() => {
    dispatch(getFixtureAction());
  }, []);

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <AdminHeader title={"Fixtures Report"} />

      <div>
        {loading ? (
          <p className="headerThree flex items-center gap-3">
            Loading... <Loader className="w-5 h-5 animate-spin" />
          </p>
        ) : totalFixtures?.length === 0 ? (
          <p>No data Found</p>
        ) : (
          totalFixtures?.map((fixture) => (
            <AdminFixtureReportCard key={fixture.id} {...fixture} />
          ))
        )}
      </div>
    </div>
  );
};

export default AdminFixtureReport;
