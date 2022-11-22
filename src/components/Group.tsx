import React from "react";
import { useNavigate } from "react-router-dom";
import EventInfoEntity from "../entities/EventInfoEntity";
import Card from "./Card";
import CreateCard from "./CreateCard";

type Nullable<T> = T | undefined;

interface GroupProps {
    name: string,
    year: number,
    eventInfo: Nullable<EventInfoEntity>
}

const Group = ({...params}: GroupProps) => {
    return (
        <>
            <div className="w-full h-1/3 flex-col space-y-4">
                <div className="text-white h-10">
                    {params.name}
                </div>
                <div className="">
                    <Card year={2022} group={params.name} eventInfo={params.eventInfo} />
                </div>
            </div>
        </>
    )
}

export default Group;