import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router";
import "../../CSS/mcq_css/result.css";

const Result = ({ name, score }) => {
    const history = useHistory();

    useEffect(() => {
        if (!name) {
            history.push("/");
        }
    }, [name, history]);

    return (
        <div className="result">
            <span className="title">Name : {name}</span>
            <span className="title">Final Score : {score}</span>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{ alignSelf: "center", marginTop: 20 }}
                href="/dashboard"
            >
                Go to Dashboard
            </Button>
        </div>
    );
};

export default Result;
