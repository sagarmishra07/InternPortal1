import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";

import { auth, db, logout } from "../firebase";
import Userdashboard from "./Userdashboard";
import Admindashboard from "./Admindashboard";
import Loading from "../components/navbar/Loading";

function Dashboard() {
    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState("");
    const [isAdmin, setIsadmin] = useState();
    const [image, setImage] = useState("");

    const history = useHistory();

    const fetchUserName = async () => {
        try {
            const query = await db
                .collection("users")
                .where("uid", "==", user?.uid)
                .get();
            const data = await query.docs[0].data();
            setName(data.name);
            setIsadmin(data.isAdmin);
            setImage(data.image);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return history.replace("/");

        fetchUserName();
    }, [user, loading]);

    return (
        <>
            {(() => {
                if (isAdmin === "true") {
                    return (
                        <>
                            <Admindashboard
                                name={name}
                                isAdmin={isAdmin}
                                image={image}
                                user={user}
                            />
                        </>
                    );
                } else if (isAdmin === "false") {
                    return (
                        <>
                            <Userdashboard
                                name={name}
                                isAdmin={isAdmin}
                                image={image}
                                user={user}
                            />
                        </>
                    );
                } else {
                    return <></>;
                }
            })()}
        </>
    );
}

export default Dashboard;
