import React from "react";
import WishlistForm from "../components/WishlistForm";
import WishlistTable from "../components/WishlistTable";

const Profile = () => {
    const user = localStorage.getItem("user")
    return (
        <>
        <div className="text-white">
            {user}'s Profile!
            <div className="h-full w-full flex-col space-y-8">
                <WishlistForm />
                <div className="h1">Wishlist</div>
                <WishlistTable />
            </div>
        </div>
        </>
    )
}

export default Profile;