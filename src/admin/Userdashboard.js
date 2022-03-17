import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../CSS/Userdashboard.css";
import { logout } from "../firebase";
import { useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";
import { toast } from "react-toastify";
import en from "javascript-time-ago/locale/en.json";
import CVrequest from "./CVrequest";

TimeAgo.addDefaultLocale(en);

function AuthIsLoaded({ children }) {
    const user = useSelector((state) => state.firebase.profile);
    //   console.log(user.email);
    //   console.log(user.password);

    if (!isLoaded(user)) return <div>splash screen...</div>;
    return children;
}

function Userdashboard() {
    let history = useHistory();

    const user = useSelector((state) => state.firebase.profile);
    // console.log("POST ARRAY :" + user.post101[0]);
    //Add post
    const firestore = useFirestore();

    //   const [userPost, setuser] = useState({
    //     post101: {
    //       postName: "",
    //       email: "",
    //       location: "",
    //       website: "",
    //       post: "",
    //     },
    //   });

    useEffect(() => {
        if (!user) return history.replace("/");
        else return history.push("/dashboard");
    }, [user]);

    const submitForm = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const job_type = e.target.job_type.value;
        const total_positions = e.target.total_positions.value;
        const city = e.target.city.value;

        const skills = e.target.skills.value;
        const education = e.target.education.value;
        const apply_before = e.target.apply_before.value;

        try {
            await firestore
                .collection("users")
                .doc(user.uid)
                .set(
                    {
                        post101: firestore.FieldValue.arrayUnion({
                            id: Math.floor(Math.random() * 10000),
                            title: title,
                            job_type: job_type,
                            total_positions: total_positions,
                            city: city,
                            education: education,

                            skills: skills,
                            apply_before: apply_before,
                            created_at: new Date(),
                        }),
                    },
                    { merge: true }
                )
                .then(() => toast.info(`Post for ${title} ${job_type} Created`))

                .catch((err) => console.log(err.message()));
        } catch (error) {}

        history.push("/dashboard");
    };
    const deletePost = (post) => {
        try {
            firestore
                .collection("users")
                .doc(user.uid)
                .update({
                    post101: firestore.FieldValue.arrayRemove(post),
                })
                .then(() => {
                    toast.error(
                        `Post for ${post.title} ${post.job_type} Deleted`
                    );
                })

                .catch((err) => console.log(err.message()));
        } catch (error) {}
    };
    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
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
                                        <h1>User Dashboard</h1>
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
                            <li id="list-item">
                                <button onClick={logout}>LOGOUT</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="join-reg-container">
                <div className="join-reg">
                    <form onSubmit={submitForm}>
                        <h2>Create Internship Post</h2>
                        <input
                            type="text"
                            placeholder="Enter Post Title"
                            name="title"
                            required
                        />
                        <select name="job_type" id="job_type" required>
                            <option value="Frontend">Frontend</option>
                            <option value="Backend">Backend</option>
                            <option value="FullStack">FullStack</option>
                            <option value="QA">QA</option>
                            <option value="UI/UX">UI/UX</option>
                            <option value="Project Manager">
                                Project Manager
                            </option>
                        </select>
                        <input
                            type="number"
                            placeholder="Total Needed Interns"
                            name="total_positions"
                            required
                        />
                        <input
                            type="text"
                            placeholder="City"
                            name="city"
                            required
                        />
                        <textarea
                            rows={30}
                            cols={30}
                            type="text"
                            placeholder="Education Qualification"
                            name="education"
                            required
                        />
                        <textarea
                            rows={30}
                            cols={30}
                            type="text"
                            placeholder="Skills Required"
                            name="skills"
                            required
                        />
                        Apply Before:{" "}
                        <input
                            type="date"
                            placeholder="Apply Before"
                            name="apply_before"
                            min={disablePastDate()}
                            required
                        />
                        <input type="submit" name="submit" value="Post" />
                    </form>
                </div>
            </div>
            <center>
                <h1>Job Posts</h1>
            </center>
            <div className="profile-container">
                <div className="profile">
                    {user.post101 &&
                        user.post101.map((post) => (
                            <div className="profile-table" key={post.id}>
                                <h2 className="profile-name"> {post.title}</h2>
                                <h2 className="profile-name">
                                    <ReactTimeAgo
                                        date={post.created_at.toDate()}
                                        locale="en-US"
                                    />
                                </h2>

                                <div className="row">
                                    <div className="th">Location</div>
                                    <div className="td">{post.city}</div>
                                </div>
                                <div className="row">
                                    <div className="th">Job Type</div>
                                    <div className="td">{post.job_type}</div>
                                </div>
                                <div className="row">
                                    <div className="th">Total Positions</div>
                                    <div className="td">
                                        {post.total_positions}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="th"> Qualification</div>
                                    <div className="td">{post.education}</div>
                                </div>

                                <div className="row">
                                    <div className="th">Skill Required</div>
                                    <div className="td">{post.skills}</div>
                                </div>
                                <div className="row">
                                    <div className="th">Apply Before</div>
                                    <div className="td">
                                        {post.apply_before}
                                    </div>
                                </div>
                                <br />
                                <input
                                    type="submit"
                                    name="submit"
                                    value="Delete"
                                    onClick={() => deletePost(post)}
                                />
                            </div>
                        ))}
                </div>
            </div>
            <center>
                {" "}
                <h2>CV Collections</h2>
            </center>
            <CVrequest user={user} />
        </>
    );
}

export default Userdashboard;
