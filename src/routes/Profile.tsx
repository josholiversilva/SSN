import React, { useState } from "react";
import WishlistForm from "../components/WishlistForm";
import WishlistTable from "../components/WishlistTable";

const Profile = () => {
    const user = localStorage.getItem("user")
    const year = 2022
    const uuid = localStorage.getItem("uuid")
    const [isEdit, setIsEdit] = useState(false);
    console.log('is edit in profile = ' + isEdit)

    return (
        <>
        <div className="text-white">
            {user}'s Profile!
            <div className="h-full w-full flex-col space-y-8">
                <WishlistForm />
                <div className="flex space-x-4">
                    <div className="h1">Wishlist</div>
                    <button onClick={() => setIsEdit(!isEdit)} className="flex p-2.5 bg-blue-200 rounded-xl hover:rounded-3xl hover:bg-blue-600 transition-all duration-300 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </button>
                </div>
                <WishlistTable isEdit={isEdit} uuid={uuid} year={year} />
            </div>
        </div>
        </>
    )
}

export default Profile;