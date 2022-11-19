import React from "react";
import { useNavigate } from "react-router-dom";
import UserEntity from "../entities/UserEntity";

const User = ({...params}: UserEntity) => {
    const navigate = useNavigate();
    const goToWishlist = () => {
        navigate(`/users/${params.name}/wishlist`);
    }
    return (
        <>
            <div className="flex drop-shadow-md rounded-lg p-1.5 mb-5">
                <img className="w-28 h-28 rounded-full border-4 border-slate-50 object-cover"
                    src="https://www.kindacode.com/wp-content/uploads/2022/05/cute.jpeg" />
                <div className="flex flex-col px-5 py-1">
                    <h4 className="font-bold text-lg text-pink-600">{params.name}</h4>
                    <p className="mt-1 flex-1 font-light text-sm text-slate-500">{params.age === -1 ? "" : params.age}</p>

                    <button onClick={() => goToWishlist()}>
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