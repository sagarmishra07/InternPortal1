import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useFirestore } from "react-redux-firebase";
import { useEffect } from "react";
import Loading from "../../components/navbar/Loading";

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
                .then(() => {})

                .catch((err) => console.log(err.message()));
        } catch (error) {}
    };

    return (
        <>
            <div className="">
                <h1>User Detail</h1>
                <h4>User Name : {user.name}</h4>
                <LazyLoadImage
                    src={user.image}
                    height="500px"
                    width="400px"
                    effect="blur"
                    alt=""
                    effect="blur"
                />
                <h4>Email : {user.email}</h4>
                <h4>Address : {user.location}</h4>
                <h4>Phone : {user.contact}</h4>
                <h4>website : {user.website}</h4>

                <Link to={`/userForm/${id}`}>edit profile</Link>
            </div>
            <section>
                <h1>{user.name}'s POST</h1>
                <div>
                    {user.post101 &&
                        user.post101.map((post) => (
                            <div className="" key={post.id}>
                                <h1>Title: {post.title}</h1>

                                <li>City: {post.city}</li>
                                <li>Job type: {post.job_type}</li>
                                <li>Total Positions: {post.total_positions}</li>
                                <li>
                                    Education Qualification: {post.education}
                                </li>
                                <li>Experience Required: {post.experience}</li>
                                <li>Skill Required: {post.skills}</li>
                                <li>Apply Before: {post.apply_before}</li>

                                <button onClick={() => deletePost(post)}>
                                    Delete Post
                                </button>
                            </div>
                        ))}
                </div>
            </section>
        </>
    );
}

export default UserDetail;
