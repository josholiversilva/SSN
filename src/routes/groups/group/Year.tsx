import React from "react";
import { useParams } from "react-router-dom";

const Year = () => {
    const { year } = useParams();
    return (
        <>
            {year}
        </>
    )
}

export default Year;