/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Button from "../../../components/common/Button";

import AdminFixtureCard from "../common/AdminFixtureCard";
import CreateFixtureForm from "../components/CreateFixtureForm";
import OutlineButton from "../../../components/common/OutlineButton";

const AdminFixtures = () => {
  const [showForm, setshowForm] = useState(false);

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <AdminHeader title={"Admin Fixtures"} />

      <div className="flex mb-10" onClick={() => setshowForm((prev) => !prev)} >
        <Button text={ showForm ? "Cancel" : "Create Fixture"}  />
      </div>
      <div>{showForm ? <CreateFixtureForm /> : <AdminFixtureCard />}</div>
    </div>
  );
};

export default AdminFixtures;
