import React from 'react'
import { NavLink } from "react-router-dom"

const Login = () => {
    return (
        <>
            <section>
                <div className='container d-flex align-items-center justify-content-center mt-5'>
                    <div className='w-50 signin-content shadow-lg rounded mt-5'>
                        <div className='signin-form m-2'>
                            <h2 className='text-center fw-bolder'>
                                <img src="/images/login.png" alt="signin" height={100} width={100} />
                                Login Form
                            </h2>
                            <h6 className='text-center'>
                                Create Account
                                <NavLink className="mx-2 text-success text-wrap" to="/signup">Click here
                                </NavLink>
                            </h6>
                            <form className='p-4 register-from' id='register-form'>
                                <div className="form-group m-4 p-1">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Enter email" />
                                </div>
                                <div className="form-group m-4 p-1">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" name="password" id="password" placeholder="Enter password" />
                                </div>
                                <div className="text-center">
                                    <button name="signin" id="signin" className="btn btn-warning px-5">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login