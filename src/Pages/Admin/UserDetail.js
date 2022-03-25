import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useFirestore } from "react-redux-firebase";
import { useEffect } from "react";
import Loading from "../../components/navbar/Loading";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
function UserDetail() {
    const [user, setUser] = useState(null);
    const { id } = useParams();
    const firestore = useFirestore();
    const [loading, setLoading] = useState(true);

    const loadUser = async () => {
        try {
            setLoading(true);
            const docRef = firestore.collection("users").doc(id);

            const result = await docRef.get();

            if (result.exists) {
                setUser(result.data());
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            } else {
                console.log("NO such User");
            }
        } catch (error) {
            console.log("Ërror: ", error.message());
        }
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
    const deletePost = (post) => {
        try {
            firestore
                .collection("users")
                .doc(user.uid)
                .update({
                    post101: firestore.FieldValue.arrayRemove(post),
                })
                .then(() => toast.error("Post Deleted"))

                .catch((err) => console.log(err.message()));
        } catch (error) {}
    };

    return (
        <>
            <center>
                <div className="">
                    <h1>User Detail</h1>
                    <h4>User Name : {user.name}</h4>
                    <LazyLoadImage
                        src={user.image}
                        height="250px"
                        width="200px"
                        effect="blur"
                        alt=""
                    />
                    <h4>Email : {user.email}</h4>
                    <h4>Address : {user.location}</h4>
                    <h4>Phone : {user.contact}</h4>
                    <h4>website : {user.website}</h4>

                    <Link to={`/userForm/${id}`}>edit profile</Link>
                </div>{" "}
            </center>
            <section>
                <center>
                    <h1>{user.name}'s POST</h1>
                </center>
                <div className="profile-container">
                    <div className="profile">
                        {user.post101 &&
                            user.post101.map((post) => (
                                <div className="profile-table" key={post.id}>
                                    <h2 className="profile-name">
                                        {" "}
                                        {post.title}
                                    </h2>
                                    <h2 className="profile-name"></h2>
                                    <div className="row">
                                        <div className="th">Location</div>
                                        <div className="td">{post.city}</div>
                                    </div>
                                    <div className="row">
                                        <div className="th">Job Type</div>
                                        <div className="td">
                                            {post.job_type}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="th">
                                            Total Positions
                                        </div>
                                        <div className="td">
                                            {post.total_positions}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="th"> Qualification</div>
                                        <div className="td">
                                            {post.education}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="th">Skill Required</div>
                                        <div className="td">{post.skills}</div>
                                    </div>
                                    <div className="row">
                                        <div className="th">Apply Before</div>
                                        <div className="td">
                                            {post.apply_before}
                                        </div>
                                    </div>
                                    <Button
                                        type="submit"
                                        color="error"
                                        onClick={() => deletePost(post)}
                                    >
                                        Delete Post
                                    </Button>
                                </div>
                            ))}
                        <br />
                    </div>
                </div>
            </section>
        </>
    );
}

export default UserDetail;
