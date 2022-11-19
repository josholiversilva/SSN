import React, { useEffect, useState } from "react";
import User from "../components/User";
import UserEntity from "../entities/UserEntity";


const Users = () => {
    const [users, setUsers] = useState([{}]);
    const fetchUsers = async () => {
        const resp = await fetch(`http://localhost:8080/api/v1/user`, {mode:'cors'});
        if (resp.ok) {
            const json = await resp.json();
            const users:UserEntity[] = json;
            setUsers(users);
        }
    }
     useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <>
        {
            users.map(user => {
                return <User uuid={""} name={""} email={""} {...user} />
            })
        }
        </>
    )
}

export default Users;