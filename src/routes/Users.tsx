import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import User from "../components/User";
import UserEntity from "../entities/UserEntity";


const Users = () => {
    const { group } = useParams();

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

    const navigate = useNavigate();
    const goToWishlist = (name: string) => {
        navigate(`${name}/wishlist`);
    }
    const goToUser = (name:string) => {
        navigate(`${name}`);
    }
    return (
        <>
        {
            users.map(user => {
                return <User user={user} handleGoToUser={goToUser} handleGoToWishlist={goToWishlist} />
            })
        }
        </>
    )
}

export default Users;