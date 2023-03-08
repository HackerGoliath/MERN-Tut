import React from 'react'
import { NavLink } from "react-router-dom"

const Signup = () => {
    return (
        <>
            <section>
                <div className='container d-flex align-items-center justify-content-center mt-5'>
                    <div className='w-50 signup-content shadow-lg rounded'>
                        <div className='signup-form'>
                            <h2 className='text-center fw-bolder'>
                                <img src="/images/signup.png" alt="signup" height={100} width={100} />
                                Signup Form
                            </h2>
                            <h6 className='text-center'>
                                Already registred<NavLink className="mx-2 text-danger text-wrap" to="/login">Click here
                                </NavLink>
                            </h6>
                            <form className='p-4 register-from' id='register-form'>
                                <div className="form-group m-4 p-1">
                                    <label htmlFor="name">Username</label>
                                    <input type="text" className="form-control" name="name" id="name" placeholder="Enter username" />
                                </div>
                                <div className="form-group m-4 p-1">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Enter email" />
                                </div>
                                <div className="form-group m-4 p-1">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="tel" className="form-control" name="phone" id="phone" placeholder="Enter phone number" />
                                </div>
                                <div className="form-group m-4 p-1">
                                    <label htmlFor="work">Work</label>
                                    <input type="text" className="form-control" name="work" id="work" placeholder="Your Profession" />
                                </div>
                                <div className="form-group m-4 p-1">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" name="password" id="password" placeholder="Enter password" />
                                </div>
                                <div className="form-group m-4 p-1">
                                    <label htmlFor="cpassword">Confirm Password</label>
                                    <input type="password" className="form-control" name="cpassword" id="cpassword" placeholder="Confirm password" />
                                </div>
                                <div className="text-center">
                                    <button name="signup" id="signup" className="btn btn-warning px-5">Signup</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup