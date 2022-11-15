import React from "react";
import { useParams } from 'react-router-dom'

const User = () => {
    const { user }= useParams();
    return (
        <>
            {user}
        </>
    )
}

export default User;