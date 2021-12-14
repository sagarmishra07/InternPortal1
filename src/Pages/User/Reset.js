import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import Navbar from "../../components/navbar/Navbar";
import "./Reset.css";

function Reset() {
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();

    const sendPasswordResetEmail = async (email) => {
        await auth.sendPasswordResetEmail(email);

        alert("Password reset link sent!");
        return history.push("/");
    };

    return (
        <>
            <div className="reset">
                <div className="reset__container">
                    <Link to="/">X</Link>
                    <input
                        type="text"
                        className="reset__textBox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail Address"
                    />
                    <button
                        className="reset__btn"
                        onClick={() => sendPasswordResetEmail(email)}
                    >
                        Send password reset email
                    </button>

                    <div>
                        Don't have an account?{" "}
                        <Link to="/register">Register</Link> now.
                    </div>
                </div>
            </div>
        </>
    );
}

export default Reset;
