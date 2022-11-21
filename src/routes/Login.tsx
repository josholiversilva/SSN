import React from "react";
import { GoogleLogin } from '@react-oauth/google';

interface LoginProps {
    handleLogin: (data: any) => void;
}

const Login = ({...params}: LoginProps) => {
    const handleFailure = (result: any) => {
        console.log("a failure happened")
        alert(result);
    }

    return (
        <>
            <GoogleLogin 
                onSuccess={async c => {
                    console.log(c.credential)
                    let data = ""
                    try {
                        const res = await fetch('http://localhost:8080/api/v1/google-auth', {
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
                    console.log(data)
                }}
                onError={() => {
                    console.log('Login Failed');
                  }}
            ></GoogleLogin>
        </>
    )
}

export default Login;