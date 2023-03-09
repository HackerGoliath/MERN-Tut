import React from 'react'

const About = () => {
    return (
        <>
            <div className="container emp_profile shadow-lg p-5 mt-5 rounded">
                <form method=''>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src="/images/user.png" alt="User Image" height={100} />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>Deepak Babu</h5>
                                <h6>Web Developer</h6>
                                <p className='profile_rating mt-3 mb-5'>RANKINGS: <span>1/10</span></p>

                                <ul className="nav" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" data-toggle="tab" id="home-tab" href="#home" role="tab">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" data-toggle="tab" id="profile-tab" href="#profile" role="tab">Timeline</a>
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
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby='home-tab'>
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
                                            <p>Deepak Bhai</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>deepak@bhai.com</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>9856325874</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Web Developer</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby='profile-tab'>
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