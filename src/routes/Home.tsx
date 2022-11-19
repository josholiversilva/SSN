import React from "react";
import { useNavigate } from "react-router-dom";
import Card from '../components/Card';
import CreateCard from '../components/CreateCard';
import Group from "../components/Group";

const Home = () => {
    const navigate = useNavigate();
    const goToGroup = (group: string) => {
        navigate(`/groups/${group}/`);
    }
    return (
        <Group name={"SSN"} />
    )
}

export default Home;