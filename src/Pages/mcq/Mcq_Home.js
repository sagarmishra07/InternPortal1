import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "./Error";
import Categories from "./Categories";
import "../../CSS/mcq_css/home.css";
import { TextField, MenuItem, Button } from "@material-ui/core";

export default function Mcq_Home({ name, setName, fetchQuestions }) {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    const history = useHistory();

    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
            setError(true);
            return;
        } else {
            setError(false);
            fetchQuestions(category, difficulty);
            history.push("/quiz");
        }
    };

    return (
        <div className="content">
            <div className="settings">
                <span style={{ fontSize: 30 }}>Quiz Settings</span>
                <div className="settings__select">
                    {error && (
                        <ErrorMessage>Please Fill all the feilds</ErrorMessage>
                    )}
                    <TextField
                        style={{ marginBottom: 25 }}
                        label="Enter Your Name"
                        variant="outlined"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        select
                        label="Select Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        variant="outlined"
                        style={{ marginBottom: 30 }}
                    >
                        {Categories.map((cat) => (
                            <MenuItem key={cat.category} value={cat.value}>
                                {cat.category}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        select
                        label="Select Difficulty"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        variant="outlined"
                        style={{ marginBottom: 30 }}
                    >
                        <MenuItem key="Easy" value="easy">
                            Easy
                        </MenuItem>
                        <MenuItem key="Medium" value="medium">
                            Medium
                        </MenuItem>
                        <MenuItem key="Hard" value="hard">
                            Hard
                        </MenuItem>
                    </TextField>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={handleSubmit}
                    >
                        Start Quiz
                    </Button>
                </div>
            </div>
            {/* <img src="/quiz.svg" className="banner" alt="quiz app" /> */}
        </div>
    );
}
