import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Loading from "../components/navbar/Loading";
import "../CSS/About.css";
import image from "../images/reactabout.png";
import Footer from "../components/navbar/Footer";
function About() {
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
            <div classNameName="about-main">
                <div className="about-section">
                    <div className="about-container">
                        <div className="about-content-section">
                            <div className="about-title">
                                <h1 className="about">
                                    We help people to find job
                                </h1>
                            </div>
                            <div className="about-content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt utlabore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit inv incididunt{" "}
                                </p>
                            </div>
                        </div>
                        <div className="about-image-section">
                            <img src={image} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
