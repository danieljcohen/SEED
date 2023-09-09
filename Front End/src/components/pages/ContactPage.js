import { React, useEffect } from "react";
import './ContactPage.css';

function ContactPage() {
    useEffect(() => {
        document.title = "R1649 - Contact Us";  
    }, []);

    return (
        <>
            <div className="page-container">
                <h1 className="page-header">CONTACT US</h1>
                <p className="page-text">
                    We are three Duke students aspiring to succeed in our startup by helping other small business succeed in theirs.
                </p>
                <p className="page-text">
                    Please reach out with any inquires or questions.
                </p>
                <h1 className="page-header">INQUIRIES</h1>
                <div className="contact-page-container">
                    <div className="contact-info">
                        <div className="inquiries-container">
                            <h3 className="inquiry-title">GENERAL INQUIRIES</h3>
                            <p className="inquiry-text">
                                TELEPHONE: 954-294-9253<br/>
                                EMAIL: daniel.cohen@duke.edu
                            </p>
                        </div>
                        <div className="inquiries-container">
                            <h3 className="inquiry-title">INVESTOR INQUIRIES</h3>
                            <p className="inquiry-text">
                                TELEPHONE: 954-294-9253<br/>
                                EMAIL: daniel.cohen@duke.edu
                            </p>
                        </div>
                    </div>
                    <img src="/placeholder-contact-us.jpg" />
                </div>
            </div>
        </>
    )
}

export default ContactPage;