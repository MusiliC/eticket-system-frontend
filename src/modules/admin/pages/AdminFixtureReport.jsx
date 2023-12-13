/* eslint-disable no-unused-vars */
import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminFixtureReportCard from "../common/AdminFixtureReportCard";

const AdminFixtureReport = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <AdminHeader title={"Fixtures Report"} />

      <div>
        <AdminFixtureReportCard />
      </div>
    </div>
  );
};

export default AdminFixtureReport;
