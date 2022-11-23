import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import User from "./User";
import UserEntity from "../entities/UserEntity";


const Users = () => {
    const { group } = useParams();

    const [users, setUsers] = useState([{}]);
    const fetchUsers = async () => {
        const resp = await fetch(`${process.env.REACT_APP_DB_HOSTNAME}/api/v1/user`, {mode:'cors'});
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
        <div className="flex-col space-y-4 w-full">
            <div className="h1 w-full">People</div>
            <div className="w-full h-1 bg-gray-400"></div>
            <div>
                {
                    users.map(user => {
                        return <User user={user} handleGoToUser={goToUser} handleGoToWishlist={goToWishlist} />
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Users;