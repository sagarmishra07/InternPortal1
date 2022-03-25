import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import Loading from "../navbar/Loading";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";
import Footer from "../navbar/Footer";
import "./Homepage.css";

import en from "javascript-time-ago/locale/en.json";
import react2 from "../../images/react2.svg";
import picture1 from "../../images/picture1.png";
import flsoft from "../../images/F1Soft.jfif";
import logo1 from "../../images/AgileIT.jfif";
import logo2 from "../../images/softnep.jfif";
import about from "../../images/reactabout.png";
import react1 from "../../images/react1.svg";
import react3 from "../../images/react3.svg";
import react5 from "../../images/react5.svg";
import react4 from "../../images/react4.svg";
import react6 from "../../images/react6.svg";
import react7 from "../../images/react7.svg";

TimeAgo.addDefaultLocale(en);

function Homepage() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [count, setCount] = useState();

    const loadData = async () => {
        setLoading(true);
        db.collection("users")
            .where("isVerified", "==", "true")

            .get()
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map((doc) => doc.data());
                const size = querySnapshot.size;

                setData(data);
                setCount(size);
                setTimeout(() => {
                    setLoading(false);
                }, 300);
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
                setTimeout(() => {
                    setLoading(false);
                }, 300);
            });
    };

    useEffect(() => {
        loadData();
    }, []);
    if (loading)
        return (
            <main>
                <Loading />
            </main>
        );

    return (
        <>
            <Navbar />
            <section class="home-main">
                <div class="home-container">
                    <div class="home-left">
                        <p class="home-title">Find Your Perfect Internships</p>
                        <p class="home-msg">
                            Your career is your choice.Searching for perfect
                            internships to pave your future?
                        </p>
                        <Link to="/jobs">
                            <button class="home-gs">Get Started</button>
                        </Link>
                    </div>

                    <div class="home-right">
                        <img src={react2}></img>
                    </div>
                </div>

                <section class="home-contents">
                    <div class="home-left">
                        <h3>Get the internship you want</h3>
                        <p>
                            Do something today that your future self will thank
                            you for whereas the expert in anything was once a
                            beginner.
                        </p>
                        <img src={picture1}></img>
                    </div>
                    <div class="home-right">
                        <h3>featured internships</h3>
                        <div class="home-card-container">
                            <div class="home-card">
                                <img src={logo2}></img>
                                <div>
                                    <h4>Front-end developer</h4>
                                    <h5>SoftNEP</h5>
                                    <h5>
                                        <i class="fas fa-map-marker-alt"></i>{" "}
                                        location
                                    </h5>
                                    <h5>
                                        <i class="fas fa-hourglass-half"></i>{" "}
                                        expires in 3 days
                                    </h5>
                                </div>
                                <button>Apply</button>
                            </div>

                            <div class="home-card">
                                <img src={logo1}></img>
                                <div>
                                    <h4>Back-end developer</h4>
                                    <h5>Agile IT</h5>
                                    <h5>
                                        <i class="fas fa-map-marker-alt"></i>{" "}
                                        location
                                    </h5>
                                    <h5>
                                        <i class="fas fa-hourglass-half"></i>{" "}
                                        expires in 3 days
                                    </h5>
                                </div>
                                <button>Apply</button>
                            </div>

                            <div class="home-card">
                                <img src={flsoft}></img>
                                <div>
                                    <h4>Full Stack developer</h4>
                                    <h5>F1Soft</h5>
                                    <h5>
                                        <i class="fas fa-map-marker-alt"></i>{" "}
                                        location
                                    </h5>
                                    <h5>
                                        <i class="fas fa-hourglass-half"></i>{" "}
                                        expires in 3 days
                                    </h5>
                                </div>
                                <button>Apply</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="home-c2">
                    <div class="home-left">
                        <h3>Helping students to find internships</h3>
                        <p>
                            Intern Portal is the platform which provides
                            internships information and helps students to find
                            the perfect one for their future career. Students
                            can apply for the internship they want.
                        </p>
                        <Link to="/about">
                            <button>About Us</button>
                        </Link>
                    </div>
                    <div class="home-right">
                        <img src={about}></img>
                    </div>
                </section>

                <section class="home-c3">
                    <div class="home-l">
                        <img src={react1}></img>
                    </div>
                    <div class="home-r">
                        <h3>Confused where to start,watch a roadmap</h3>
                        <p>
                            without proper information we are unable to know the
                            starting point. But this platform helps you to know
                            from where you should begun for the future
                            achievement.
                        </p>
                        <Link to="/roadmap">
                            <button>Roadmap</button>
                        </Link>
                    </div>
                </section>

                <section class="home-c4">
                    <div class="home-l">
                        <h3>Our Services</h3>
                        <p>
                            We provide platforms for both students and
                            organizations who are searching for internships and
                            interns. Students can find their desired internships
                            and organizations can find the required interns for
                            their organization.
                        </p>
                        <button>Services</button>
                    </div>
                    <div class="home-r">
                        <img src={react3}></img>
                    </div>
                </section>

                <section class="home-c5">
                    <div class="home-l">
                        <h3>Your 3 Steps</h3>
                        <h2>Step 1</h2>
                        <p>Search for internships you wanted.</p>
                        <img src={react5}></img>
                    </div>
                    <div class="home-r">
                        <img src={react4}></img>
                        <h2>Step 2</h2>
                        <p>Apply for the internships you are interested in.</p>
                    </div>
                </section>

                <section class="home-c6">
                    <div class="home-l">
                        <h2>Step 3</h2>
                        <p>Be ready to learn and achieve your goal.</p>
                    </div>
                    <div class="home-r">
                        <img src={react6}></img>
                    </div>
                </section>

                <section class="home-c7">
                    <div class="home-l">
                        <h3>Need Interns?</h3>
                        <p>
                            {" "}
                            "One machine can do the work of fifty ordinary men.
                            No machine can do the work of one extraordinary man"
                            so want to create one?
                        </p>
                        <Link to="/register">
                            {" "}
                            <button>Register</button>
                        </Link>{" "}
                    </div>
                </section>
            </section>

            <Footer />
        </>
    );
}

export default Homepage;
