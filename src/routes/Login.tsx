import React from "react";
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
    const handleFailure = (result: any) => {
        console.log("a failure happened")
        alert(result);
    }

    const handleLogin = (data: any) => {
        console.log('data = ' + data)
    }

    return (
        <>
            <GoogleLogin 
                onSuccess={handleLogin}
                onError={() => {
                    console.log('Login Failed');
                  }}
            ></GoogleLogin>
        </>
    )
}

export default Login;