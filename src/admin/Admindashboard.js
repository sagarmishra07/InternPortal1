import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Admindashboard.css";
import { db, app, logout } from "../firebase";

import { useFirestoreConnect, useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";

import { useFirebase } from "react-redux-firebase";

const Admindashboard = ({ name, image }) => {
    const firestore = useFirestore();

    const users = useSelector((state) => state.firestore.ordered.users);

    const [fileUrl, setFileUrl] = useState(); //for roadmap image

    useFirestoreConnect([
        {
            collection: "users",
        },
    ]);

    if (!users) {
        return <h1>Loading</h1>;
    }

    const deleteUser = async (id) => {
        // alert("ID HERE : " + id);
        try {
            await firestore.collection("users").doc(id).delete();
        } catch (error) {
            console.error("Error removing document: ", error);
        }
    };
    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setFileUrl(await fileRef.getDownloadURL());
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;

        if (!title || !fileUrl) {
            return;
        }
        await db.collection("roadmaps").doc().set({
            image: fileUrl,
            title: title,
        });
    };

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
                                        <h1>Admin Dashboard</h1>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="logo-container">
                            <a className="logo" href="#">
                                Welcome,<span>{name}</span>
                            </a>
                        </div>
                        <div className="info">
                            <ul className="d-flex" id="contacts"></ul>
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
                                <button onClick={logout}>LOGOUT</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div class="profile-container">
                <div class="profile-content">
                    <div class="profile">
                        <div class="profile-table">
                            <div class="column">
                                {users
                                    .filter((val) => {
                                        if (val.isAdmin == "false") {
                                            return val;
                                        }
                                    })
                                    .map((user) => {
                                        return (
                                            <div class="row">
                                                <div id="th">{user.name}</div>
                                                <div id="td">
                                                    <Link
                                                        to={`/user/${user.id}`}
                                                    >
                                                        {" "}
                                                        View Details
                                                    </Link>
                                                </div>
                                                <div id="td">
                                                    <button
                                                        onClick={() =>
                                                            deleteUser(user.id)
                                                        }
                                                    >
                                                        Delete User
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>{" "}
                    </div>{" "}
                </div>{" "}
            </div>
            <h1>Publish Roadmap</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <div>
                        <input type="text" name="title" placeholder="title" />
                        <h5>Upload roadmap</h5>
                        <input type="file" onChange={onFileChange} />

                        <button>Publish</button>
                    </div>
                </div>
            </form>{" "}
        </>
    );
};

export default Admindashboard;
