import React, { useState } from "react";
import { app, db } from "../firebase";
import { useHistory } from "react-router-dom";
const Request = ({ users, post }) => {
    const [fileUrl, setFileUrl] = useState();
    const history = useHistory();

    const onFileChange = async (e) => {
        const file1 = e.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file1.name);
        await fileRef.put(file1);
        setFileUrl(await fileRef.getDownloadURL());
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!fileUrl) return;
        await db
            .collection("users")
            .doc(users.uid)
            .collection("request")
            .add({
                cv: fileUrl,

                title: post.title,
                job_type: post.job_type,
            })
            .then(() => alert("CV Uploaded "));
        return history.push("/");
    };
    return (
        <form onSubmit={onSubmit}>
            <h5>Upload CV</h5>

            <input
                className="register__textBox"
                type="file"
                onChange={onFileChange}
                required
            />

            <input type="submit" name="submit" value="Upload" />
        </form>
    );
};

export default Request;
