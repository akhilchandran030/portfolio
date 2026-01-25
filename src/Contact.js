import React from "react";
import './Contact.css';

const Contact = () => {
    const linkedIn = 'https://www.linkedin.com/in/akhilchandrancs';
    const instagram = 'https://www.instagram.com/akhix_';
    const whatsappUrl = 'https://wa/+918137823254';
    return (
        <>
            <div className="contact" id="contact">
                <h1 className="head_cont"><center>Contact Me</center></h1>
                <div className="cont_details">
                    <div className="email"><a href="mailto:akhilacs2001@gmail.com"> Email : akhilacs2001@gmail.com </a> </div>
                    <div className="phonenumber">Phone : +91 81378 23254</div>
                    <div className="address">Location : Trivandrum, Kerala</div>
                </div>
            </div>
        </>
    )
}

export default Contact;