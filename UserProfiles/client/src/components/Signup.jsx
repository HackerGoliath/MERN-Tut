import React, { useState } from 'react'
import { NavLink } from "react-router-dom"

const Signup = () => {
    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    });

    const handleInputs = (e) => {
        console.log(e);
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    return (
        <>
            <section>
                <div className='container d-flex align-items-center justify-content-center my-3 '>
                    <div className='w-50 signup-content shadow-lg rounded mybg'>
                        <div className='signup-form'>
                            <h2 className='text-center fw-bolder'>
                                <img className='p-3' src="/images/signup2.png" alt="signup" height={100} width={100} />
                                Signup Form
                            </h2>
                            <h6 className='text-center'>
                                Already registred
                                <NavLink className="mx-2 text-danger text-wrap" to="/login">Click here
                                </NavLink>
                            </h6>
                            <form className='p-4 register-from' id='register-form'>
                                <div className="form-group m-4 p-1">
                                    <label htmlFor="name">Username</label>
                                    <input value={user.name} onChange={handleInputs} type="text" className="form-control bg-transparent border-3 border-dark" name="name" id="name" placeholder="Enter username" />
                                </div>
                                <div className="form-group m-4 p-1">
                                    <label htmlFor="email">Email</label>
                                    <input value={user.email} onChange={handleInputs} type="email" className="form-control bg-transparent border-3 border-dark" name="email" id="email" placeholder="Enter email" />
                                </div>
                                <div className="form-group m-4 p-1">
                                    <label htmlFor="phone">Phone</label>
                                    <input value={user.phone} onChange={handleInputs} type="tel" className="form-control bg-transparent border-3 border-dark" name="phone" id="phone" placeholder="Enter phone number" />
                                </div>
                                <div className="form-group m-4 p-1">
                                    <label htmlFor="work">Work</label>
                                    <input value={user.work} onChange={handleInputs} type="text" className="form-control bg-transparent border-3 border-dark" name="work" id="work" placeholder="Your Profession" />
                                </div>
                                <div className="form-group m-4 p-1">
                                    <label htmlFor="password">Password</label>
                                    <input value={user.password} onChange={handleInputs} type="password" className="form-control bg-transparent border-3 border-dark" name="password" id="password" placeholder="Enter password" />
                                </div>
                                <div className="form-group m-4 p-1">
                                    <label htmlFor="cpassword">Confirm Password</label>
                                    <input value={user.cpassword} onChange={handleInputs} type="password" className="form-control bg-transparent border-3 border-dark" name="cpassword" id="cpassword" placeholder="Confirm password" />
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