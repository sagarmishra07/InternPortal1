import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
import Loading from "../../components/navbar/Loading";
import loginpic from "../../images/react2.svg";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [user, loading] = useAuthState(auth);

    const history = useHistory();

    useEffect(() => {
        if (loading) {
            <Loading />;
        }
    }, [user, loading]);
    const signInWithEmailAndPassword = async (email, password) => {
        await auth
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                // this works fine because response.message is a string
            });

        return history.replace("/dashboard");
    };

    return (
        <>
            <div class="login-page-container">
                <div class="sigin-in-container">
                    <Link to="/">
                        {" "}
                        <img class="sign-in-img" src={loginpic} alt=""></img>
                    </Link>
                    <div class="sign-in-form">
                        <div>
                            <h3 class="sign-in-heading">Sign In</h3>
                            <p>
                                Sign in with the account that your company is
                                registered.
                            </p>
                        </div>

                        <input
                            type="text"
                            name="email"
                            placeholder="Email Here"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span class="chk-random">
                            <input type="checkbox" name="" />
                            Remember me <a href="#">Forgot Password?</a>
                        </span>
                        <button
                            className="login__btn"
                            onClick={() =>
                                signInWithEmailAndPassword(email, password)
                            }
                        >
                            Login
                        </button>

                        <div>
                            <p class="a-register-here">
                                Dont have an account?{" "}
                                <Link to="/register">Register </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
