import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFirestore } from "react-redux-firebase";
import { Link } from "react-router-dom";
import Loading from "../../components/navbar/Loading";

function EditForm() {
    const firestore = useFirestore();

    let history = useHistory();
    const { id } = useParams();
    const docRef = id ? firestore.collection("users").doc(id) : null;

    const [user, setuser] = useState({
        name: "",
        email: "",
        location: "",
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
    if (!user)
        return (
            <main>
                <Loading />
            </main>
        );

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
                    <h3>Name:</h3>
                    <input
                        type="text"
                        placeholder="Enter user Name"
                        name="name"
                        value={user.name}
                        onChange={oninputChange}
                    />
                    <h3>Email</h3>
                    <input
                        type="text"
                        placeholder="Enter user E-mail"
                        name="email"
                        value={user.email}
                        onChange={oninputChange}
                    />
                    <h3>Location:</h3>
                    <input
                        type="text"
                        placeholder="Enter Location"
                        name="location"
                        value={user.location}
                        onChange={oninputChange}
                    />
                    <h3>Website:</h3>
                    <input
                        type="text"
                        placeholder="Enter website"
                        name="website"
                        value={user.website}
                        onChange={oninputChange}
                    />

                    <input type="submit" name="submit" value="Update" />
                </form>
            </div>
        </div>
    );
}

export default EditForm;
