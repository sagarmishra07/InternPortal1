import React, { useState, useEffect } from "react";
import Loading from "../components/navbar/Loading";
import Navbar from "../components/navbar/Navbar";
import { db } from "../firebase";
import "./roadmap.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Footer from "../components/navbar/Footer";
import object from "../images/reactabout.png";
function Roadmaps() {
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const loadData = async () => {
        setLoading(true);
        db.collection("roadmaps")

            .get()
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map((doc) => doc.data());

                setData(data);
                setTimeout(() => {
                    setLoading(false);
                }, 300);
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    };

    useEffect(() => {
        loadData();
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
            <div classNameName="about-main">
                <div className="about-section">
                    <div className="about-container">
                        <div className="about-content-section">
                            <div className="about-title">
                                <h1 className="about">
                                    Dont Know Where To Start?
                                </h1>
                            </div>
                            <div className="about-content">
                                <p>
                                    Search roadmap of the job title that u are
                                    interested and watch where u should start
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        onChange={(event) => {
                                            setSearchTerm(event.target.value);
                                        }}
                                    />
                                </p>
                            </div>
                        </div>
                        <div className="about-image-section">
                            <img src={object} />
                        </div>
                    </div>
                </div>
            </div>
            <center></center>
            <div className="Roadmapss">
                {data
                    .filter((val) => {
                        if (searchTerm == "") {
                            return val;
                        } else if (
                            val.title
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase())
                        ) {
                            return val;
                        }
                    })
                    .map((val, key) => {
                        return (
                            <div key={key}>
                                <>
                                    <center>
                                        {" "}
                                        <h1>{val.title}</h1>
                                    </center>
                                    <br />
                                    <br />
                                    <LazyLoadImage
                                        height="700px"
                                        width="100%"
                                        effect="blur"
                                        src={val.image}
                                    />
                                </>
                            </div>
                        );
                    })}
            </div>
            <Footer />
        </>
    );
}

export default Roadmaps;
