/* eslint-disable no-unused-vars */
import React from "react";
import styles from "../../../../style";
import { Link } from "react-router-dom";
import OutlineButton from "../../../components/common/OutlineButton";
import Button from "../../../components/common/Button";
import hero from "/public/hero.jpg";

const UserHome = () => {
  return (
    <section className="pageLayout">
      <div
        className={`flex lg:flex-row flex-col lg:items-center gap-10   w-full ${styles.paddingY} min-h-[90vh] lg:min-h-screen`}
      >
        <div
          className={`lg:flex-1 justify-center pt-20  md:pt-28 pb-10 ${styles.flexStart} flex-col gap-4 xl:px-0  `}
        >
          <div className="headingOne">
            <p>
              Experience The <br />
              <span className="text-secondary-100">Thrill of Live Sports</span>
              <br />
              Like Never Before
            </p>
          </div>
          <div>
            <p className="w-full  lg:w-[70%] text-primary-100">
              Experience the ultimate in live entertainment with our seamless
              ticketing system. Get ready to secure your spot at the heart of
              the action
            </p>
          </div>

          <br />

          {/* CTA */}

          <div className="flex  gap-4 md:gap-8 justify-between items-start md:items-center ">
            <div>
              <Link>
                <OutlineButton text={"My Tickets"} />
              </Link>
            </div>
            <Link>
              <Button text={"Upcoming Fixtures"} />
            </Link>
          </div>
        </div>

        {/* image section */}

        <div className="lg:flex-1  lg:w-[50%] lg:pt-14 lg:h-full flex items-center">
          <div className="w-[100%]">
            <img src={hero} alt="Home" className="w-[100%] h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserHome;
