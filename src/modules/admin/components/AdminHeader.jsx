/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const AdminHeader = ({ title }) => {
  return (
    <div className="mb-10 ">
      <p className="text-3xl font-extrabold tracking-tight text-slate-900">
        {title}
      </p>
    </div>
  );
};

export default AdminHeader;
