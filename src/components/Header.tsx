import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../logo.svg'

const Header = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/")
    }
    return (
        <>
            <div className="sticky h-24 w-full bg-[#121212] shadow-sm shadow-gray-400 justify-items-end grid">
                <div className="h-full mr-4">
                    <button className="h-full w-16 text-white" onClick={() => goToHome()}>
                        <img className="rounded-full border-slate-50 object-cover"
                            src={logo} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header;