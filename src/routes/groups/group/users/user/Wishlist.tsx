import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WishlistTable from "../../../../../components/WishlistTable";
import UserEntity from "../../../../../entities/UserEntity";

interface WishlistResponse {
    item: string,
    description: string,
    price: string
}

const Wishlist = () => {
    const [user, setUser] = useState<UserEntity>({})
    let { year, uuid } = useParams();
    const [wishlist, setWishlist] = useState([])

    const fetchUsers = async () => {
        const resp = await fetch(`${process.env.REACT_APP_DB_HOSTNAME}/api/v1/user/${uuid}`, {mode:'cors'});
        if (resp.ok) {
            const json = await resp.json();
            const fetchedUser:UserEntity = json;
            console.log("fetched user = " + fetchedUser)
            setUser(fetchedUser)
        }
    }
     useEffect(() => {
        fetchUsers();
        console.log("uuid = " + uuid)
    }, []);
    
    const fetchWishlist = async () => {
        var data: never[] = []
        try {
        const resp = await fetch(`${process.env.REACT_APP_DB_HOSTNAME}/api/v1/wishlist/${uuid}/${year}`, {
            mode:'cors',
            method: 'GET',
        });
        data = await resp.json();
        } catch(e) {
            console.log(e)
        }
        console.log(data)
        setWishlist(data)
    }

    useEffect(() => {
        fetchWishlist()
        console.log("wishlist = " + wishlist)
    }, [])

    return (
        <>
        <div className="text-white">
            {user.name}'s Wishlist page
        </div>
        <WishlistTable uuid={uuid} year={Number(year)} />
    </>
    )
}

export default Wishlist;