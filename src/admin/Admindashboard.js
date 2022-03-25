import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Admindashboard.css";
import { db, app, logout } from "../firebase";
import { toast } from "react-toastify";
import { useFirestoreConnect, useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Button from "@mui/material/Button";
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
            await firestore
                .collection("users")
                .doc(id)
                .delete()
                .then(() => toast.error("User Deleted"));
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
        await db
            .collection("roadmaps")
            .doc()
            .set({
                image: fileUrl,
                title: title,
            })
            .then(() => toast.info("Roadmap Published"));
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
                        </ul>
                        <br />
                        <Button type="submit" color="error" onClick={logout}>
                            Logout
                        </Button>
                    </nav>
                </div>
            </header>

            <center>
                <TableContainer>
                    <Table sx={{ width: 1200 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <h3>
                                        <b>Users</b>
                                    </h3>
                                </TableCell>
                                <TableCell align="right">
                                    <h3>
                                        <b>Email</b>
                                    </h3>
                                </TableCell>
                                <TableCell align="right">
                                    <h3>
                                        <b>Roles</b>{" "}
                                    </h3>
                                </TableCell>
                                <TableCell align="right">
                                    <h3>
                                        <b>Action 1</b>
                                    </h3>
                                </TableCell>
                                <TableCell align="right">
                                    <h3>
                                        <b>Action 2</b>
                                    </h3>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow
                                    key={user.uid}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        {user.name.toUpperCase()}
                                    </TableCell>{" "}
                                    <TableCell align="right">
                                        {user.email}
                                    </TableCell>
                                    <TableCell align="right">
                                        {user.isAdmin.toUpperCase()}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button color="error">
                                            <Link to={`/user/${user.id}`}>
                                                View Details
                                            </Link>
                                        </Button>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button
                                            color="error"
                                            onClick={() => deleteUser(user.id)}
                                        >
                                            Delete User
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </center>

            {/* <h1>Publish Roadmap</h1>
            <form onSubmit={onSubmit}>
            <div>
            <div>
            <input type="text" name="title" placeholder="title" />
            <h5>Upload roadmap</h5>
            <input type="file" onChange={onFileChange} />
            
                        <button>Publish</button>
                    </div>
                </div>
            </form>{" "} */}
        </>
    );
};

export default Admindashboard;
