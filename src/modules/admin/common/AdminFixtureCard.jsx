/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import OutlineButton from "../../../components/common/OutlineButton";
import { Link } from "react-router-dom";
import Button from "../../../components/common/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFixtureAction,
  getFixtureAction,
} from "../../../redux/actions/fixtureAction";
import { Loader } from "lucide-react";

const AdminFixtureCard = ({ ...fixture }) => {
  const dispatch = useDispatch();

  const { deletingFixture } = useSelector((state) => state.fixtureReducer);

  const handleFixtureDelete = async (id) => {
    const res = await dispatch(deleteFixtureAction(id));
  };

  useEffect(() => {
    dispatch(getFixtureAction());
  }, [deletingFixture]);

  return (
    <div
      className={`grid grid-cols-2 my-4 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full hover:bg-secondary-500 hover:cursor-pointer  border-b-[1px] border-primary-100 p-[10px]`}
    >
      <div className="col-span-1 flex lg:items-center lg:justify-start">
        <p>{`${fixture?.ticketManagement?.fixtureType}`}</p>
      </div>
      <div className="col-span-1 flex   flex-col lg:items-center  gap-1">
        <p>{fixture?.fixtureTime}</p>
        <p>{fixture?.fixtureLocation}</p>
      </div>
      <div className="col-span-1 flex   flex-col lg:items-center  gap-1">
        <p>{fixture?.homeTeam}</p>
        <p>{fixture?.awayTeam}</p>
      </div>
      <div className="col-span-1 flex lg:items-center  lg:justify-center">
        <p>{fixture?.fixtureDate}</p>
      </div>
      <div className="col-span-1 flex gap-3 lg:items-center  lg:justify-end">
        <Link>
          <OutlineButton text={"Edit"} />
        </Link>

        <div onClick={() => handleFixtureDelete(fixture.id)}>
          {deletingFixture ? (
            <div className="outlineButtonStyling">
              <Loader className="w-5 h-5 animate-spin" />
            </div>
          ) : (
            <Button text={"Delete"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminFixtureCard;
