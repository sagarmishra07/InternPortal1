import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../CSS/Userdashboard.css";
import { logout } from "../firebase";
import { useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import Button from "@mui/material/Button";

function AuthIsLoaded({ children }) {
    const user = useSelector((state) => state.firebase.profile);
    //   console.log(user.email);
    //   console.log(user.password);

    if (!isLoaded(user)) return <div>splash screen...</div>;
    return children;
}

function StudentDashboard() {
    let history = useHistory();

    const user = useSelector((state) => state.firebase.profile);

    const firestore = useFirestore();

    useEffect(() => {
        if (!user) return history.replace("/");
        else return history.push("/dashboard");
    }, [user]);

    return (
        <>
            <header>
                <div className="dashboard-container">
                    <div className="d-flex space-between align-items-center">
                        <div className="social-links">
                            <ul className="d-flex" id="socials">
                                <li>
                                    <Link to="/dashboard">
                                        {" "}
                                        <h1>Student Dashboard</h1>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="logo-container">
                            <a className="logo" href="#">
                                Welcome,<span>{user.name}</span>
                            </a>
                        </div>
                        <div className="info">
                            <ul className="d-flex" id="contacts">
                                <li>
                                    <i className="fas fa-phone-alt"></i>{" "}
                                    {user.contact}
                                </li>
                                <li>
                                    <i className="fa fa-envelope"></i>{" "}
                                    {user.email}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <nav>
                        <ul
                            className="d-flex justify-content-center"
                            id="option"
                        >
                            <li id="list-item">
                                <Link to="/">Return Homepage</Link>
                            </li>
                            <li id="list-item">
                                <Link to={`/userEdit/${user.uid}`}>
                                    Edit Profile
                                </Link>
                            </li>
                        </ul>
                        <br />
                        <Button type="submit" color="error" onClick={logout}>
                            Logout
                        </Button>
                    </nav>
                </div>
            </header>

            <center>
                <Button variant="contained" color="grey">
                    <Link to="/mcq">MCQ Test</Link>
                </Button>
            </center>
        </>
    );
}

export default StudentDashboard;
