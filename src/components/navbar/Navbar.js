import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../firebase";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
import logo from "../../images/Group.png";

function Navbar() {
    const users = useSelector((state) => state.firebase.profile);
    const [user] = useAuthState(auth);
    return (
        <>
            {user ? (
                <>
                    {" "}
                    <div className="navbar-mainbody">
                        <div className="navbar-components">
                            <div className="navbar-logo">
                                <Link to="/">
                                    <img src={logo} />
                                </Link>
                            </div>
                            <div className="navbar-list">
                                <ul type="none">
                                    <li>
                                        <Link to="/">Homepage</Link>
                                    </li>
                                    <li>
                                        <Link to="/jobs">Internships</Link>
                                    </li>
                                    <li>
                                        <Link to="/roadmap">Roadmaps</Link>
                                    </li>{" "}
                                    <li>
                                        <Link to="/interview">Interview</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact Us</Link>
                                    </li>
                                    <Link to="/dashboard">
                                        <li>Hi {users.name},</li>
                                    </Link>{" "}
                                    <li>
                                        <button onClick={logout}>Logout</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="navbar-mainbody">
                    <div className="navbar-components">
                        <div className="navbar-logo">
                            <img src={logo}></img>
                        </div>
                        <div className="navbar-list">
                            <ul type="none">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>

                                <li>
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact Us</Link>
                                </li>
                                <li>
                                    <Link to="/login">
                                        <button>Login</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
