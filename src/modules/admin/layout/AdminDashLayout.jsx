/* eslint-disable no-unused-vars */
import React from "react";
import { Link, Outlet } from "react-router-dom";
import SidebarMenu from "../components/SidebarMenu";
import OutlineButton from "../../../components/common/OutlineButton";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/reducers/auth";

const AdminDashLayout = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
		localStorage.clear();
		dispatch(logoutUser());
	};
  return (
    <section className="bg-secondary-500 min-h-screen w-full grid grid-cols-4">
      <div className="col-span-1 h-full bg-white ">
        <SidebarMenu />
      </div>
      <div className="col-span-3 h-full">
        <div className="py-4 w-5/6 mx-auto flex items-center justify-between">
          <div>
          <p className="profile" >A</p>
          </div>
          <div>
            <div onClick={() => handleLogout}>
              <OutlineButton text={"Logout"} />
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default AdminDashLayout;
