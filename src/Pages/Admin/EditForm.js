import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFirestore } from "react-redux-firebase";
import { Link } from "react-router-dom";
import Loading from "../../components/navbar/Loading";
import "../../CSS/Userdashboard.css";
function EditForm() {
    const firestore = useFirestore();

    let history = useHistory();
    const { id } = useParams();
    const docRef = id ? firestore.collection("users").doc(id) : null;

    const [user, setuser] = useState({
        name: "",
        email: "",

        website: "",
        post: "",
        isAdmin: false,
        isVerified: false,
    });

    useEffect(() => {
        if (id) {
            loadUser();
        }
    }, [id]);
    if (!user)
        return (
            <main>
                <Loading />
            </main>
        );

    const loadUser = async () => {
        try {
            const result = await docRef.get();
            if (result.exists) {
                setuser(result.data());
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.log("Error getting document:", error);
        }
    };

    const oninputChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        if (id) {
            // update user
            try {
                await docRef.update({
                    ...user,
                    updatedAt: firestore.FieldValue.serverTimestamp(),
                });
                console.log("Document successfully updated!");
            } catch (error) {
                console.error("Error updating document: ", error);
            }
        } else {
            // add new user
            firestore.collection("users").add({
                ...user,
                createdAt: firestore.FieldValue.serverTimestamp(),
            });
        }
        history.push("/dashboard");
    };
    return (
        <div className="join-reg-container">
            <div className="join-reg">
                <form onSubmit={submitForm}>
                    <h2>Update {user.name}'s Profile</h2>
                    <input
                        type="text"
                        placeholder="Enter user Name"
                        name="name"
                        value={user.name}
                        onChange={oninputChange}
                    />
                    <input
                        type="text"
                        placeholder="Enter user E-mail"
                        name="email"
                        value={user.email}
                        onChange={oninputChange}
                    />
                    <input
                        type="text"
                        placeholder="Enter Location"
                        name="location"
                        value={user.location}
                        onChange={oninputChange}
                    />
                    <input
                        type="text"
                        placeholder="Enter website"
                        name="website"
                        value={user.website}
                        onChange={oninputChange}
                    />
                    IsAdmin?:{" "}
                    <select
                        name="isAdmin"
                        id="isAdmin"
                        value={user.isAdmin}
                        onChange={oninputChange}
                    >
                        <option value={true}>true</option>
                        <option value={false}>false</option>
                    </select>
                    <br />
                    IsVerified?:{" "}
                    <select
                        name="isVerified"
                        id="isVerified"
                        value={user.isVerified}
                        onChange={oninputChange}
                    >
                        <option value={true}>true</option>
                        <option value={false}>false</option>
                    </select>
                    <input type="submit" name="submit" value="Update" />
                </form>
            </div>
        </div>
    );
}

export default EditForm;
