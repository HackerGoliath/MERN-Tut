import React from 'react'
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <div className='d-flex align-items-center justify-content-center home-page pt-5' style={{ height: "600px" }}>
                <div className="home-div pt-5 shadow-lg rounded p-5">
                    <div className='notfound-404'>
                        <h1 className='fs-1 fw-bold text-center text-danger'>404</h1>
                    </div>
                    <h2 className='text-center fw-bolder text-uppercase'>We are sorry, page not found</h2>
                    <p className='mb-5 text-uppercase fs-5'>
                        The page you are requested for might have been removed had its changed its name or is temporary unavailable.
                    </p>
                    <div className='text-center'>
                        <NavLink className="btn btn-warning px-5 py-2 fs-5 shadow-sm" to="/">Back To Homepage</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorPage