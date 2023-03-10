import React, { useState, useEffect } from 'react'

const Contact = () => {
    const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });
    const userContact = async () => {
        try {
            const res = await fetch("http://localhost:3000/getdata", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            const data = await res.json();
            console.log(data);
            setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone })

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        userContact();
    }, [])

    const handleInputs = (e) => {
        const { name, email } = e.target
        setUserData({ ...userData, [name]: value })
    }

    // Send data to backend
    const contactForm = async () => {
        e.preventDefault();
        const { name, email, phone, message } = userData;

        const res = await fetch("http://localhost:3000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, phone, message })
        });

        const data = await res.json();

        if (!data) {
            console.log("Message Not Sent");
        }
        else {
            console.log("Message Sent");
            setUserData({ ...userData, message: "" });
        }
    }
    return (
        <>
            <div className='contact_info'>
                <div className="container-fluid">
                    <div className="row my-4">
                        <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
                            {/* Phone Number */}
                            <div className="w-25 contact_info_item shadow-lg d-flex justify-content-start align-items-center p-3 rounded">
                                <img src="https://img.icons8.com/office/000000/iphone.png" alt="phone" height={40} />
                                <div className="contact_info_content mx-3">
                                    <div className='contact_info_title text-center'>
                                        Phone
                                    </div>
                                    <div className='contact_info_text'>
                                        +91 9985659856
                                    </div>
                                </div>
                            </div>
                            {/* Email Address */}
                            <div className="w-25 contact_info_item shadow-lg d-flex justify-content-start align-items-center p-3 rounded">
                                <img src="https://img.icons8.com/office/000000/iphone.png" alt="phone" height={40} />
                                <div className="contact_info_content mx-3">
                                    <div className='contact_info_title text-center'>
                                        Email
                                    </div>
                                    <div className='contact_info_text'>
                                        deepak@bhai.com
                                    </div>
                                </div>
                            </div>
                            {/* Address */}
                            <div className="w-25 contact_info_item shadow-lg d-flex justify-content-start align-items-center p-3 rounded">
                                <img src="https://img.icons8.com/office/000000/iphone.png" alt="phone" height={40} />
                                <div className="contact_info_content mx-3">
                                    <div className='contact_info_title text-center'>
                                        Address
                                    </div>
                                    <div className='contact_info_text'>
                                        <p>Udta Makaan Andheri Gali,
                                            Parle Ki Dukaan,<br />
                                            Mumbai
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Contact Us Form */}
            <div className="contact_form">
                <div className="container shadow-lg rounded-3 my-5 mybg">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="contact_form_container py-5">
                                <div className="contact_form_title text-center p-3 fs-3">
                                    Get in touch
                                </div>
                                <form method='POST' id="contact_from">
                                    <div className="mb-3 contact_form_name d-flex justify-content-between align-items-between">
                                        <input name="name" type="text" className="form-control mx-2 p-3 bg-transparent border-1 border-dark contact_form_name input_field" id="contact_from_name"
                                            onChange={handleInputs} value={userData.name} placeholder="Your Name" required />

                                        <input name="email" type="email" className="form-control mx-2 p-3 bg-transparent border-1 border-dark contact_form_email input_field" id="contact_from_email"
                                            onChange={handleInputs} value={userData.email} placeholder="Your Email" required />

                                        <input name="phone" type="tel" className="form-control mx-2 p-3 bg-transparent border-1 border-dark contact_form_phone input_field" id="contact_from_phone"
                                            onChange={handleInputs} value={userData.phone} placeholder="Your Phone" required />
                                    </div>
                                    <div className="mb-3 contact_from_text mt-5">
                                        <textarea className="form-control contact_form_message bg-transparent border-3 border-dark" id="exampleFormControlTextarea1" name="message" cols="30" rows="10"
                                            onChange={handleInputs} value={userData.message} placeholder='Message'>
                                        </textarea>
                                    </div>
                                    <div className="contact_form_button">
                                        <button type='submit' className='btn btn-warning px-5 py-2' onClick={contactForm}>Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact