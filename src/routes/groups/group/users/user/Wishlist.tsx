import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WishlistTable from "../../../../../components/WishlistTable";

interface WishlistResponse {
    item: string,
    description: string,
    price: string
}

const Wishlist = () => {
    const { user } = useParams();
    const uuid = "3f68e019-d16a-4593-ae58-adc4da60a6f8"
    const [wishlist, setWishlist] = useState([])
    
    const fetchWishlist = async () => {
        var data: never[] = []
        try {
        const resp = await fetch(`http://localhost:8080/api/v1/wishlist/${uuid}`, {
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
            {user}'s Wishlist page
        </div>
        <WishlistTable />
    </>
    )
}

export default Wishlist;