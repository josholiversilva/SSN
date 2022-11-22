import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from '../static/profile_pic.png'
import ssn_logo from '../static/ssn_logo.png'

interface HeaderProps {
    user: string,
    doLogout: (data: any) => void;
}

const Header = ({...params}: HeaderProps) => {
    const [isDropdown, setIsDropdown] = useState(false);
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/")
    }

    const goToProfile = (user:string) => {
        navigate(`/${user}`)
        setIsDropdown(false)
    }

    const handleLogout = () => {
        params.doLogout(null)
        navigate("/login")
        setIsDropdown(false)
    }

    return (
        <>
            <div className="sticky h-24 w-full bg-[#121212] shadow-sm shadow-gray-400">
                <div className="flex justify-between">
                    <div className="flex space-x-2">
                        <div className="h-full float-left text-white text-lg ml-4">
                            <button className="h-full w-16 text-white" onClick={() => goToHome()}>
                                <img className="rounded-full border-slate-50 object-cover"
                                    src={ssn_logo} />
                            </button>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="flex-col justify-center items-center">
                                <div className="text-center text-sm text-white">
                                Secret
                                </div>
                                <div className="text-center text-sm text-white">
                                Santa
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="h-full mr-4">
                            <button className="h-full w-16 text-white" onClick={() => setIsDropdown(!isDropdown)}>
                                <img className="rounded-full border-4 border-slate-50 object-cover bg-gray-300"
                                    src={typeof localStorage.getItem("picture_url") === 'string' ? localStorage.getItem("picture_url") || "" : profile} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed w-full">
                <div className={`float-right text-right text-white bg-gray-600 rounded-lg p-2 w-1/4 ${isDropdown ? "visible" : "invisible"}`}>
                <div><button><div onClick={() => goToProfile(params.user)}>Profile</div></button></div>
                <div><button><div onClick={() => handleLogout()}>Logout</div></button></div>
                </div>
            </div>
        </>
    )
}

export default Header;