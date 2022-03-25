import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import Loading from "../components/navbar/Loading";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";
import "../CSS/Jobs.css";
import en from "javascript-time-ago/locale/en.json";
import Footer from "../components/navbar/Footer";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import TextField from "@mui/material/TextField";

TimeAgo.addDefaultLocale(en);

function Jobs() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);

    const loadData = async () => {
        setLoading(true);
        db.collection("users")
            .where("isVerified", "==", "true")

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

            <h2 className="job-heading">Recent Interns</h2>
            <div className="job-container">
                <div className="column-left">
                    <div className="category-container">
                        <div>
                            <Box sx={{ minWidth: 100 }}>
                                <FormControl fullWidth>
                                    <InputLabel>Internship Types</InputLabel>
                                    <Select
                                        default="All"
                                        name="job_type"
                                        id="job_type"
                                        onChange={(event) => {
                                            setSearchTerm(event.target.value);
                                        }}
                                    >
                                        <MenuItem value="all">All</MenuItem>
                                        <MenuItem value="Frontend">
                                            Frontend
                                        </MenuItem>
                                        <MenuItem value="Backend">
                                            Backend
                                        </MenuItem>
                                        <MenuItem value="FullStack">
                                            FullStack
                                        </MenuItem>
                                        <MenuItem value="QA">QA</MenuItem>
                                        <MenuItem value="UI/UX">UI/UX</MenuItem>
                                        <MenuItem value="Project Manager">
                                            Project Manager
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box
                                component="form"
                                sx={{
                                    "& > :not(style)": { m: 1, width: "25ch" },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="standard-basic"
                                    label="Standard"
                                    variant="standard"
                                    placeholder="Search..."
                                    onChange={(event) => {
                                        setSearchTerm(event.target.value);
                                    }}
                                />
                            </Box>
                        </div>
                    </div>
                </div>
                <div class="column-right">
                    <div class="card-container">
                        {data &&
                            data.map((users, index) => {
                                return (
                                    <div>
                                        {users.post101
                                            .filter((val) => {
                                                if (
                                                    searchTerm == "" ||
                                                    searchTerm == "all"
                                                ) {
                                                    return (val =
                                                        users.post101);
                                                } else if (
                                                    val.job_type
                                                        .toLowerCase()
                                                        .includes(
                                                            searchTerm.toLowerCase()
                                                        )
                                                )
                                                    return val;
                                                else if (
                                                    val.title
                                                        .toLowerCase()
                                                        .includes(
                                                            searchTerm.toLowerCase()
                                                        )
                                                )
                                                    return val;
                                            })

                                            .map((post, index) => (
                                                <>
                                                    <div class="card">
                                                        <img
                                                            src={users.image}
                                                            alt=""
                                                        />
                                                        <div>
                                                            <h4>
                                                                {post.title}
                                                            </h4>
                                                            <h5>
                                                                {users.name}
                                                            </h5>
                                                            <h5>
                                                                <i class="fas fa-map-marker-alt"></i>{" "}
                                                                {users.location}
                                                            </h5>
                                                            <h5>
                                                                <i class="fas fa-hourglass-half"></i>{" "}
                                                                Apply before:{" "}
                                                                {
                                                                    post.apply_before
                                                                }
                                                            </h5>
                                                            <h5>
                                                                <i class="fas fa-hourglass-half"></i>{" "}
                                                                <ReactTimeAgo
                                                                    date={post.created_at.toDate()}
                                                                    locale="en-US"
                                                                />
                                                            </h5>
                                                        </div>

                                                        <Link
                                                            className="Link"
                                                            to={`/job/${post.id}`}
                                                        >
                                                            <button className="apply">
                                                                {" "}
                                                                Apply
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </>
                                            ))}
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Jobs;
