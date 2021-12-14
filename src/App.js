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
function App() {
    const Error = () => {
        return (
            <>
                <h1>Oops!! Page Not Found</h1>;
            </>
        );
    };
    return (
        <div className="app">
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

                    <Route component={Error} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
