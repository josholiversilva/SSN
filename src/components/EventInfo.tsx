import React, { useEffect, useState } from "react";
import EventInfoEntity from "../entities/EventInfoEntity";

const EventInfo = () => {
    const [eventInfo, setEventInfo] = useState<EventInfoEntity>();
    const fetchEventInfo = async () => {
        const resp = await fetch(`${process.env.REACT_APP_DB_HOSTNAME}/api/v1/events/SSN/2022`, {mode:'cors'});
        if (resp.ok) {
            const json = await resp.json();
            const info:EventInfoEntity = json;
            setEventInfo(info)
        }
    }

    useEffect(() => {
        fetchEventInfo();
    }, []);

    return (
        <>
        <div className="h1 text-white flex-col space-y-4">
            <div>Event Info</div>
            <div className="w-full h-1 bg-gray-400"></div>
            <div className="flex space-x-4">
                <div className="">Address: </div>
                <div className="">{eventInfo?.address}</div>
            </div>

            <div className="flex space-x-4">
                <div className="">Date: </div>
                <div className="">{eventInfo?.date}</div>
            </div>

            <div className="flex space-x-4">
                <div className="">Theme: </div>
                <div className="">{eventInfo?.theme}</div>
            </div>

            <div className="flex space-x-4">
                <div className="">Price Limit: </div>
                <div className="">{eventInfo?.price_limit}</div>
            </div>
        </div>
        </>
    )
}

export default EventInfo;