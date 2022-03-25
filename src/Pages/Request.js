import React, { useState } from "react";
import { app, db } from "../firebase";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
const Request = ({ users, post }) => {
    const [fileUrl, setFileUrl] = useState();
    const history = useHistory();
    const Input = styled("input")({
        display: "none",
    });
    const onFileChange = async (e) => {
        const file1 = e.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file1.name);
        await fileRef.put(file1);
        setFileUrl(await fileRef.getDownloadURL());
    };
    const user = useSelector((state) => state.firebase.profile);
    const onSubmit = async (e) => {
        e.preventDefault();
        if (!fileUrl) return toast.info("Selecr CV First / PDF is preferred");
        await db
            .collection("users")
            .doc(users.uid)
            .collection("request")
            .add({
                cv: fileUrl,
                username: user.name,
                title: post.title,
                job_type: post.job_type,
            })
            .then(() => toast.info("CV Uploaded"));
        return history.push("/");
    };
    return (
        <form onSubmit={onSubmit}>
            <Stack direction="row" alignItems="center" spacing={2}>
                <label htmlFor="contained-button-file">
                    <Input
                        id="contained-button-file"
                        type="file"
                        onChange={onFileChange}
                    />
                    <Button variant="contained" component="span">
                        Select CV
                    </Button>
                </label>
            </Stack>

            <input type="submit" name="submit" value="Upload" />
        </form>
    );
};

export default Request;
