import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/User/Login";
import Register from "./Pages/User/Register";
import Reset from "./Pages/User/Reset";
import Dashboard from "./admin/Dashboard";
import Homepage from "./components/landing/Homepage";
import Roadmaps from "./Pages/Roadmaps";
import Jobs from "./Pages/Jobs";
import Userdashboard from "./admin/Userdashboard";
import Admindashboard from "./admin/Admindashboard";
import UserDetail from "./Pages/Admin/UserDetail";
import EditForm from "./Pages/Admin/EditForm";
import userEdit from "./Pages/Admin/userEdit";
import About from "./Pages/About";
import JobDetail from "./Pages/JobDetail";
import Contact from "./Pages/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//MCQ Imports
import axios from "axios";
import Mcq_Home from "./Pages/mcq/Mcq_Home";
import Mcq_Result from "./Pages/mcq/Mcq_Result";
import Quiz from "./Pages/mcq/Quiz";
import { useState } from "react";

function App() {
    //MCQ Questions
    const [questions, setQuestions] = useState();
    const [name, setName] = useState();
    const [score, setScore] = useState(0);
    var list = [];
    var filterList = [];
    // const fetchQuestions = async (category = "", difficulty = "") => {
    //     const { data } = await axios.get(
    //         `https://opentdb.com/api.php?amount=10${
    //             category && `&category=${category}`
    //         }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    //     );

    //     setQuestions(data.results);
    // };

    const fetchQuestions = (category = "", difficulty = "") => {
        axios.get("http://localhost:3000/data.json").then((res) => {
            console.log("RESPONSE : ", res.data.results);
            list = res.data.results;
            console.log("LIST :", list);
            filterList = list.filter(
                (arr) =>
                    arr.category.includes(category) &&
                    arr.difficulty.includes(difficulty)
            );
            console.log(category,difficulty)
            console.log("FILETER LIST : ", filterList);

            setQuestions(filterList);
        });
    };

    //END MCQ Questions

    const Error = () => {
        return (
            <>
                <h1>Oops!! Page Not Found</h1>;
            </>
        );
    };
    return (
        <div className="app">
            <ToastContainer />
            <Router>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/reset" component={Reset} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/Userdashboard" component={Userdashboard} />
                    <Route path="/Admindashboard" component={Admindashboard} />
                    <Route path="/user/:id" component={UserDetail} />

                    <Route path="/job/:id?" component={JobDetail} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/roadmap" component={Roadmaps} />
                    <Route path="/jobs" component={Jobs} />
                    <Route path="/userForm/:id?" component={EditForm} />
                    <Route path="/userEdit/:id?" component={userEdit} />

                    {/* MCQ PATH */}
                    <Route path="/mcq">
                        <Mcq_Home
                            name={name}
                            setName={setName}
                            fetchQuestions={fetchQuestions}
                        />
                    </Route>
                    <Route path="/result">
                        <Mcq_Result name={name} score={score} />
                    </Route>

                    <Route path="/quiz">
                        <Quiz
                            name={name}
                            questions={questions}
                            score={score}
                            setScore={setScore}
                            setQuestions={setQuestions}
                        />
                    </Route>

                    <Route component={Error} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
