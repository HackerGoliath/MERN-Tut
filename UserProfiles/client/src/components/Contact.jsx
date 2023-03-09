import React from 'react'

const Contact = () => {
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
                                <form id="contact_from">
                                    <div class="mb-3 contact_form_name d-flex justify-content-between align-items-between">
                                        <input type="text" className="form-control mx-2 p-3 bg-transparent border-1 border-dark contact_form_name input_field" id="contact_from_name" placeholder="Your Name" required />

                                        <input type="email" className="form-control mx-2 p-3 bg-transparent border-1 border-dark contact_form_email input_field" id="contact_from_email" placeholder="Your Email" required />

                                        <input type="tel" className="form-control mx-2 p-3 bg-transparent border-1 border-dark contact_form_phone input_field" id="contact_from_phone" placeholder="Your Phone" required />
                                    </div>
                                    <div class="mb-3 contact_from_text mt-5">
                                        <textarea class="form-control contact_form_message bg-transparent border-3 border-dark" id="exampleFormControlTextarea1" cols="30" rows="10" placeholder='Message'>
                                        </textarea>
                                    </div>
                                    <div className="contact_form_button">
                                        <button type='submit' className='btn btn-warning px-5 py-2'>Send Message
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