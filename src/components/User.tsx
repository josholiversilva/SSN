import React from "react";
import { useNavigate } from "react-router-dom";
import UserEntity from "../entities/UserEntity";
import profile_pic from '../static/profile_pic.png';

interface UserProps {
    user: UserEntity,
    handleGoToUser: (name: string) => any,
    handleGoToWishlist: (name: string) => any;
}

const User = ({...params}:UserProps) => {
    return (
        <>
            <div className="flex drop-shadow-md rounded-lg p-1.5 mb-5">
                <img className="w-28 h-28 rounded-full border-4 border-slate-50 object-cover bg-gray-300"
                    src={profile_pic} />
                <div className="flex flex-col px-5 py-1">
                    <h4 className="font-bold text-lg text-pink-600">{params.user.name}</h4>
                    <p className="mt-1 flex-1 font-light text-sm text-slate-500">{params.user.age === -1 ? "" : params.user.age}</p>

                    <button onClick={() => params.handleGoToWishlist(params.user.name === undefined ? "" : params.user.name)}>
                        <div className="mt-2 inline-block px-2 py-1 border bg-blue-500 text-center text-white text-sm hover:underline">
                            Wishlist
                        </div>
                    </button>

                </div>
            </div>
        </>
    )
}

export default User;