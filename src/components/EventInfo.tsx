import React from "react";

const EventInfo = () => {
    return (
        <>
        <div className="h1 text-white flex-col space-y-4">
            <div>Event Info</div>
            <div className="w-full h-1 bg-gray-400"></div>
            <div className="flex space-x-4">
                <div className="">Address: </div>
                <div className="">6168 Natalie Rd, Chino Hills CA</div>
            </div>

            <div className="flex space-x-4">
                <div className="">Theme: </div>
                <div className="">None!</div>
            </div>

            <div className="flex space-x-4">
                <div className="">Limit: </div>
                <div className="">None!</div>
            </div>
        </div>
        </>
    )
}

export default EventInfo;