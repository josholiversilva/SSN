import React from "react";
import User from "../components/User";

const Users = () => {
    return (
        <>
            <User name="Josh" age={25} />
            <User name="Iris" age={23} />
        </>
    )
}

export default Users;