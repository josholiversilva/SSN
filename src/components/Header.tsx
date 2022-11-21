import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../logo.svg'

interface HeaderProps {
    user: string
}

const Header = ({...params}: HeaderProps) => {
    console.log("user = " + params.user)
    const [isDropdown, setIsDropdown] = useState(false);
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/")
    }

    const goToProfile = (user:string) => {
        console.log("user = " + user)
        navigate(`/${user}`)
    }

    return (
        <>
            <div className="sticky h-24 w-full bg-[#121212] shadow-sm shadow-gray-400">
                <div className="h-full float-left text-white text-lg">
                    <button className="h-full w-16 text-white" onClick={() => goToHome()}>
                        <img className="rounded-full border-slate-50 object-cover"
                            src={logo} />
                    </button>
                </div>
                <div className="h-full mr-4 float-right">
                    <button className="h-full w-16 text-white" onClick={() => setIsDropdown(!isDropdown)}>
                        <img className="rounded-full border-slate-50 object-cover"
                            src={logo} />
                    </button>
                </div>
            </div>
            <div className="fixed w-full">
                <div className={`float-right text-right text-white bg-gray-600 rounded-lg p-2 w-1/4 ${isDropdown ? "visible" : "invisible"}`}>
                <button><div onClick={() => goToProfile(params.user)}>Profile</div></button>
                <div>Logout</div>
                </div>
            </div>
        </>
    )
}

export default Header;