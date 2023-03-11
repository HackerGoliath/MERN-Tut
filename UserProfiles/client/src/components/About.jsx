import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const callAboutPage = async () => {
        try {
            const res = await fetch("http://localhost:3000/about", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                withCredentials: true,
                crossorigin: true,
                mode: 'no-cors',
                credentials: "include"
            });
            const data = await res.json();
            console.log(data);
            setUserData(data)

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            console.log(error);
            navigate("/login");
        }
    }
    useEffect(() => {
        callAboutPage();
    }, [])

    return (
        <>
            <div className="container emp_profile shadow-lg p-5 mt-5 rounded mybg">
                <form method='GET'>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src="/images/user.png" alt="User Image" height={100} />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>{userData.name}</h5>
                                <h6>{userData.work}</h6>
                                <p className='profile_rating mt-3 mb-5'>RANKINGS: <span>1/10</span></p>

                                <ul className="nav" role="tablist">
                                    <li className="nav-item mx-2">
                                        <a className="text-decoration-none" data-bs-toggle="collapse" href="#home" role="button" aria-expanded="true" aria-controls="home">About</a>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <a className="text-decoration-none" data-bs-toggle="collapse" href="#profile" role="button" aria-expanded="false" aria-controls="profile">Timeline</a>
                                    </li>
                                </ul>
                                <hr />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button className='btn btn-warning' name="btnAddMore" type="submit">Edit Profile</button>
                        </div>
                    </div>

                    <div className="row">
                        {/* left side url */}
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>WORK LINK</p><hr />
                                <a href="https://youtube.com" target="_blank">Youtube</a><br />
                                <a href="https://youtube.com" target="_blank">Instagram</a><br />
                                <a href="https://youtube.com" target="_blank">Github</a><br />
                                <a href="https://youtube.com" target="_blank">LinkedIn</a><br />
                                <a href="https://youtube.com" target="_blank">Web Developer</a><br />
                                <a href="https://youtube.com" target="_blank">Figma</a><br />
                                <a href="https://youtube.com" target="_blank">Software Engineer</a><br />
                            </div>
                        </div>

                        {/* right side data toggle */}
                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="collapse multi-collapse show" id="home" aria-labelledby='home-tab'>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>5643354454</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.name}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.email}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.phone}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.work}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="collapse multi-collapse" id="profile" aria-labelledby='profile-tab'>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Experience</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Hourly Rate</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>10$/hr</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>230</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>English Level</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Availability</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>6 months</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default About