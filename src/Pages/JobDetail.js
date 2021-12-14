import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebase";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useFirestore } from "react-redux-firebase";
import { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Loading from "../components/navbar/Loading";
import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";

import en from "javascript-time-ago/locale/en.json";
import Request from "./Request";

TimeAgo.addDefaultLocale(en);

function UserDetail() {
    const [user, setUser] = useState(null);
    const { id } = useParams();

    const [loading, setLoading] = useState(true);

    const loadUser = async () => {
        setLoading(true);
        db.collection("users")
            .where("isVerified", "==", "true")

            .get()
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map((doc) => doc.data());

                setUser(data);

                setTimeout(() => {
                    setLoading(false);
                }, 300);
            })

            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    };
    useEffect(() => {
        loadUser();
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

            <div className="join-reg-container">
                <div className="join-reg">
                    {user &&
                        user.map((users, index) => {
                            return (
                                <div key={index}>
                                    {users.post101
                                        .filter((val) => {
                                            if (val.id == id) {
                                                return val;
                                            }
                                        })

                                        .map((val) => (
                                            <div>
                                                <center>
                                                    <h1>
                                                        {val.title} <br />
                                                    </h1>
                                                    <p>
                                                        <ReactTimeAgo
                                                            date={val.created_at.toDate()}
                                                            locale="en-US"
                                                        />
                                                    </p>

                                                    <LazyLoadImage
                                                        src={users.image}
                                                        height="200px"
                                                        width="200px"
                                                        effect="blur"
                                                    />
                                                    <p>{users.name}</p>

                                                    <p> {val.city}</p>
                                                    <p> {val.job_type}</p>

                                                    <p>
                                                        Qualification:{" "}
                                                        {val.education}
                                                    </p>
                                                    <p>
                                                        Total Positions:
                                                        {val.total_positions}
                                                    </p>
                                                    <p>
                                                        Skill Required:{" "}
                                                        {val.skills}
                                                    </p>
                                                    <p>
                                                        Website: {users.website}
                                                    </p>

                                                    <h3>
                                                        Apply Before:{" "}
                                                        {val.apply_before}
                                                    </h3>

                                                    <Request
                                                        users={users}
                                                        post={val}
                                                    />
                                                </center>
                                            </div>
                                        ))}
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
}

export default UserDetail;
