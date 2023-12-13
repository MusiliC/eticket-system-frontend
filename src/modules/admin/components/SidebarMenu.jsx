/* eslint-disable no-unused-vars */
import React from "react";
import { adminLinks } from "../../../components/constants";
import { Link, NavLink } from "react-router-dom";

const SidebarMenu = () => {
  return (
    <section>
      <div className="flex  pl-10 py-8 border-b-[1px] border-gray-200 ">
        <div className="font-semibold">ETICKET</div>
      </div>
      <div className="pl-10 pt-10">
        {adminLinks &&
          adminLinks.map((adminLink) => (
            <NavLink to={adminLink.id} key={adminLink.title}  className="flex items-center justify-start py-6 gap-3">
              <div>
                {adminLink.icon ? <img src={adminLink.icon}  className="h-[25px] w-[25px]  object-cover" alt="" /> : ""}
              </div>

              <p>{adminLink.title}</p>
            </NavLink>
          ))}
      </div>
    </section>
  );
};

export default SidebarMenu;
