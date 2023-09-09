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
                    The leadership of Lincoln International includes the original founders and a team of professionals who oversee the strategy and performance of the firm globally. Lincoln’s leaders are stewards of our culture and developers of talent, assuring that what clients value most about our offerings and our people endure for years to come.
                </p>
                <p className="page-text">
                    The information we gather and share through our full immersion approach is leveraged through the cohesive and collaborative approach of our exceptional team. In addition to the cast experience of our investment team, Tailwater has a unique ecosystem for creating value throughout our core sectors of focus.
                </p>
                <h1 className="page-header">INQUIRIES</h1>
                <div className="contact-page-container">
                    <div className="contact-info">
                        <div className="inquiries-container">
                            <h3 className="inquiry-title">GENERAL INQUIRIES</h3>
                            <p className="inquiry-text">
                                TELEPHONE: 835-235-3523<br/>
                                EMAIL: INFO.R1649@SKIFF.COM
                            </p>
                        </div>
                        <div className="inquiries-container">
                            <h3 className="inquiry-title">INVESTOR INQUIRIES</h3>
                            <p className="inquiry-text">
                                TELEPHONE: 835-235-3523<br/>
                                EMAIL: INFO.R1649@SKIFF.COM
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