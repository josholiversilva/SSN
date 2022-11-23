import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from '../components/Card';
import CreateCard from '../components/CreateCard';
import Group from "../components/Group";
import EventInfoEntity from "../entities/EventInfoEntity";

const Home = () => {
    const navigate = useNavigate();
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

    const goToGroup = (group: string) => {
        navigate(`/groups/${group}/2022`);
    }
    return (
        <Group name={"SSN"} year={2022} eventInfo={eventInfo} />
    )
}

export default Home;