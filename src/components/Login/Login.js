import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from "react-router-dom";
import './Login.css'

const Login = () => {
    const { signInUsingGoogle, setIsLoading, setUser } = useAuth();

    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/home"

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((res) => {
                setIsLoading(true)
                setUser(res.user)
                history.push(url)
            }
            )
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    };

    return (
        <div className="login">
            <h1>Please login</h1>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign in</button>
        </div>
    );
};

export default Login;