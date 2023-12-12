/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { userLinks } from "../constants";
import { Link, NavLink } from "react-router-dom";
import menu from "/public/menu.svg";
import close from "/public/close.svg";


const Navbar = () => {


  const [toggle, setToggle] = useState(false);

  return (
    <section className=" fixed top-0 z-30 bg-white shadow  w-full ">
    <div className="w-5/6 mx-auto py-2">
      <nav className="flex items-center justify-between w-full py-4">
        {/* logo */}
        <div>
          <p className="font-semibold tracking-wider text-[20px]">Eticket</p>
        </div>

        {/* links */}
        <div>
          <ul className="items-center justify-end flex-1  hidden list-none md:flex">
            {userLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px]  ${
                  i === userLinks.length - 1 ? "mr-0" : "mr-5 lg:mr-10"
                }`}
              >
                <NavLink
                  to={`${nav.id}`}
                //   className={({ isActive }) =>
                //   isActive ? "border-b-[3px] border-primary-100 text-sm" : "text-sm"
                // }
             
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* contact */}
        <div className="hidden md:flex">
          <Link href="/contact">
            {/* <Button text={"Contact Me"} /> */}
            <p>Log out</p>
          </Link>
        </div>

        {/* mobile */}

        <div className="flex justify-end flex-1 md:hidden">
          {/* menu button */}

          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain "
            onClick={() => setToggle((prev) => !prev)}
          />

          {/* menu */}
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-secondary-100  absolute z-30 top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
          >
            <ul className="flex flex-col items-center justify-end flex-1 list-none">
              {userLinks.map((nav, i) => (
                <div key={nav.id}>
                  <li
                    className={`font-poppins font-normal tracking-wide cursor-pointer text-[16px] text-white mb-4`}
                    onClick={() => setToggle(false)}
                  >
                    <NavLink
                      to={`${nav.id}`}
              //         className={({ isActive }) =>
              //         isActive ? "border-b-[3px] border-white" : ""
              // }
                    >
                      {nav.title}
                    </NavLink>
                  </li>
                </div>
              ))}
              <li
                onClick={() => setToggle(false)}
                className="font-poppins font-normal cursor-pointer text-[16px] text-white "
              >
                <Link href={"/contact"}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </section>
  )
}

export default Navbar