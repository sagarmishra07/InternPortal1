import React from "react";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import "../../CSS/mcq_css/question.css";
import ErrorMessage from "./Error";

const Question = ({
    currQues,
    setCurrQues,
    questions,
    options,
    correct,
    setScore,
    score,
    setQuestions,
}) => {
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);

    //timer
    const [timer, setTimer] = React.useState(10);
    const id = React.useRef(null);

    const clear = () => {
        window.clearInterval(id.current);
    };
    React.useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer((time) => time - 1);
        }, 1000);
        return () => clear();
    }, []);

    React.useEffect(() => {
        if (timer === 0) {
            // clear();
            setCurrQues(currQues + 1);
            setTimer(10);
        }
    }, [timer]);

    const history = useHistory();

    const handleSelect = (i) => {
        if (selected === i && selected === correct) return "select";
        else if (selected === i && selected !== correct) return "wrong";
        else if (i === correct) return "select";
    };

    const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) setScore(score + 1);
        setError(false);
    };

    const handleNext = () => {
        if (currQues > 3) {
            // HOW MANY QUESTIONs?? 3 == 5 questions
            history.push("/result");
            
        } else if (selected) {
            setCurrQues(currQues + 1);
            setSelected();
            setTimer(10);
        } else setError("Please select an option first");
    };

    const handleQuit = () => {
        setCurrQues(0);
        setQuestions();
    };

    return (
        <div className="question">
            <h1>
                Question {currQues + 1} : Time left : {timer}{" "}
            </h1>
            {console.log(currQues)}

            <div className="singleQuestion">
                <h2>
                    {questions[currQues] ? questions[currQues].question : null}
                </h2>
                <div className="options">
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    {options &&
                        options.map((i) => (
                            <button
                                className={`singleOption  ${
                                    selected && handleSelect(i)
                                }`}
                                key={i}
                                onClick={() => handleCheck(i)}
                                disabled={selected}
                            >
                                {i}
                            </button>
                        ))}
                </div>
                <div className="controls">
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        style={{ width: 185 }}
                        href="/"
                        onClick={() => handleQuit()}
                    >
                        Quit
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{ width: 185 }}
                        onClick={handleNext}
                    >
                        {currQues > 20 ? "Submit" : "Next Question"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Question;
