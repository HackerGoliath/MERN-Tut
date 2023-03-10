import React, { useState, useEffect } from 'react'

const Home = () => {
    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);
    const userHomePage = async () => {
        try {
            const res = await fetch("http://localhost:3000/getdata", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            const data = await res.json();
            console.log(data);
            setUserName(data.name)
            setShow(true);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        userHomePage();
    }, [])
    return (
        <>
            <div className='d-flex align-items-center justify-content-center home-page pt-5' style={{ height: "600px" }}>
                <div className="home-div pt-5">
                    <p className='fs-4 text-sm-center text-secondary'>WELCOME</p>
                    <h1 className='fs-4 text-sm-center text-secondary'>{userName}</h1>
                    <h2 className='fs-1 fw-bold'>{show ? "Happy to see you back" : "We Are The MERN Developer"}</h2>
                </div>
            </div>
        </>
    )
}

export default Home