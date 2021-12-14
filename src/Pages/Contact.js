import React, { useState } from "react";
import Loading from "../components/navbar/Loading";
import Navbar from "../components/navbar/Navbar";
import "../CSS/Contact.css";
import image from "../images/react4.svg";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import Footer from "../components/navbar/Footer";
const Contact = () => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 500);
    if (loading)
        return (
            <main>
                <Loading />
            </main>
        );
    return (
        <>
            <Navbar />

            <div className="contact-section">
                <div className="contact-container">
                    <div className="contact-content-section">
                        <div className="contact-title">
                            <h1>Get in touch with our team</h1>
                        </div>
                        <div className="contact-content">
                            <div className="contact-email">
                                <h1>
                                    Old Baneshwor <br />
                                    Kathmandu <br />
                                    Nepal
                                </h1>
                            </div>
                            <div className="contact-address">
                                <h1>General Enquires </h1>
                                <p>
                                    info@internportal.com <br />
                                    01-4379551/
                                </p>
                            </div>
                        </div>
                        <div className="contact-social">
                            <h1>Media</h1>

                            <BsFacebook
                                color="darkblue"
                                size={30}
                                opacity={0.3}
                            />

                            <BsInstagram size={30} opacity={0.3} color="red" />

                            <BsTwitter color="blue" size={30} opacity={0.3} />
                        </div>
                    </div>
                    <div className="contact-image-section">
                        <img src={image} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
