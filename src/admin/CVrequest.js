import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { saveAs } from "file-saver";
import { Button } from "react-bootstrap";

const CVrequest = ({ user }) => {
    const [request, setRequest] = useState([]);

    useEffect(async () => {
        let unsubscribe;
        unsubscribe = db
            .collection("users")
            .doc(user.uid)

            .collection("request")
            .orderBy("title", "asc")

            .onSnapshot((snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                    requestid: doc.id,
                    ...doc.data(),
                }));
                setRequest(data);
            });
        return () => {
            unsubscribe();
        };
    }, []);

    const deleterequest = (requestid) => {
        db.collection("users")
            .doc(user.uid)

            .collection("request")
            .doc(requestid)
            .delete();
    };
    const downloadImage = (cv) => {
        saveAs(cv, "image.jpg"); // Put your image url here.
    };

    return (
        <div className="profile-container">
            <div className="profile-content">
                {request.map((user, index) => (
                    <div className="profile">
                        <div className="profile-table" key={user.id}>
                            <h2 className="profile-name">{user.title}</h2>

                            <div className="row">
                                <img src={user.cv} height="100" width="100" />
                            </div>

                            <h1>{user.job_type}</h1>
                            <button onClick={() => downloadImage(user.cv)}>
                                Download
                            </button>
                            <button
                                onClick={() => deleterequest(user.requestid)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default CVrequest;
