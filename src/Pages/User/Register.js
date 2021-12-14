import React, { useState } from "react";

import { auth, db, app } from "../../firebase";
import Navbar from "../../components/navbar/Navbar";
import { Link, useHistory } from "react-router-dom";
import "./Register.css";

function Register() {
    const [fileUrl, setFileUrl] = useState();
    const history = useHistory();

    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setFileUrl(await fileRef.getDownloadURL());
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const contact = e.target.contact.value;
        const location = e.target.location.value;
        const website = e.target.website.value;
        const password = e.target.password.value;

        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user = res.user;

        if (!name || !fileUrl || !email || !password || !contact || !location) {
            return;
        }
        await db
            .collection("users")
            .doc(user.uid)
            .set({
                uid: user.uid,
                name: name,
                image: fileUrl,
                email: email,
                contact: contact,
                location: location,
                website: website,
                password: password,
                isAdmin: "false",
                isVerified: "false",
            })
            .then(() => alert("User Created"));

        return history.push("/login");
    };

    return (
        <>
            <div className="signup-page-container">
                <div className="signup-container">
                    <form onSubmit={onSubmit}>
                        <div className="signup-first-col">
                            <h3 className="sign-up-header">Sign Up</h3>
                            <p className="signup-p">
                                Sign up your company in our site
                            </p>
                            <input
                                type="text"
                                name="name"
                                placeholder="company name"
                                required
                            />
                            <input
                                type="text"
                                name="contact"
                                placeholder="contact"
                                required
                            />
                            <input
                                type="text"
                                name="website"
                                placeholder="personal website"
                                required
                            />
                        </div>
                        <div className="signup-second-col">
                            <span>
                                <input
                                    type="file"
                                    accept="image/png, image/gif, image/jpeg"
                                    name="image"
                                    id="image"
                                    onChange={onFileChange}
                                    required
                                />
                                <label for="image" id="signup-file-upload-icon">
                                    <i className="fas fa-plus-circle"></i>
                                </label>
                                <label className="file-logo-label">Logo</label>
                            </span>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                required
                            />
                            <input
                                type="text"
                                name="location"
                                placeholder="location"
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                required
                            />
                            <button className="login__btn">Register</button>
                        </div>
                    </form>

                    <span>
                        <p className="signup-p">
                            Already have an account?{" "}
                            <Link to="/login">Sign in</Link>
                        </p>
                    </span>
                </div>
            </div>
        </>
    );
}

export default Register;
