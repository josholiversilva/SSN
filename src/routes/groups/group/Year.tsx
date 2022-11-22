import React from "react";
import { useParams } from "react-router-dom";
import EventInfo from "../../../components/EventInfo";
import Users from "../../../components/Users";

const Year = () => {
    const { year } = useParams();
    return (
        <>
        <div className="text-white flex-col space-y-16">
            <div>
                {year} Secret Santa!
            </div>
            <EventInfo />
            <Users />
        </div>
        </>
    )
}

export default Year;