import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:3000/logout", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            withCredentials: true,
            crossorigin: true,
            mode: 'no-cors',
            credentials: "include"
        }).then((res) => {
            navigate("/login", { replace: true })
            if (res.status != 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <>
            <div className='d-flex align-items-center justify-content-center home-page pt-5' style={{ height: "600px" }}>
                <h1 className='text-center'>Logout Page</h1>
            </div>
        </>
    )
}

export default Logout