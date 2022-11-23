import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";

interface LoginProps {
    handleLogin: (data: any) => void;
}

const Login = ({...params}: LoginProps) => {
    const navigate = useNavigate();
    const handleFailure = (result: any) => {
        console.log("a failure happened")
        alert(result);
    }

    return (
        <>
            <GoogleLogin 
                onSuccess={async c => {
                    let data = ""
                    try {
                        const res = await fetch(`${process.env.REACT_APP_DB_HOSTNAME}/api/v1/google-auth`, {
                            mode: 'cors',
                            method: 'POST',
                            body: JSON.stringify({
                                "idToken": c.credential
                            }),
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                
                        data = await res.json()
                    } catch(e) {
                        console.log("error - " + e);
                    }
                    params.handleLogin(data) 
                    navigate("/")
                }}
                onError={() => {
                    console.log('Login Failed');
                  }}
            ></GoogleLogin>
        </>
    )
}

export default Login;