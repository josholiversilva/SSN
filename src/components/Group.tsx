import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import CreateCard from "./CreateCard";

interface GroupInterface {
    name: string;
}

const Group = ({name}: GroupInterface) => {
    return (
        <>
            <div className="w-full h-1/3">
                <div className="text-white h-10">
                    {name}
                </div>
                <div className="">
                    <Card year={2022} group={name} />
                    <CreateCard />
                </div>
            </div>
        </>
    )
}

export default Group;