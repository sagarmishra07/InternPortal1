import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/navbar/Footer";
import MultiStep from "./interview_req/MultiSteps/MultiStep";
import "../CSS/interview.css";

// import Part1 from "./interview_req/CODE-send";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
};

class One extends React.Component {
    render() {
        return (
            <div class="behavioral">
                <ol>
                    <li>What accomplishments are you most proud of?</li>
                    <li>Why are you interested in this internship?</li>
                    <li>
                        Describe a time when you disagreed with a team member.
                        How did you resolve the problem?
                    </li>
                    <li>
                        Describe how you used your problem-solving skills to
                        benefit a team{" "}
                    </li>
                    <li>
                        How would your faculty/friends/co-workers describe you?
                    </li>
                    <li>
                        What three words would you choose to best describe
                        yourself?
                    </li>
                </ol>
            </div>
        );
    }
}

class Two extends React.Component {
    render() {
        return (
            <div class="technical">
                <ol>
                    <li>What are the newly introduced input types in HTML5?</li>

                    <li>What is SVG and why is it used?</li>
                    <li>How can page loading time be reduced?</li>
                    <li>
                        {" "}
                        What is the difference between localStorage and
                        sessionStorage objects?
                    </li>
                    <li>What is the difference between SOAP and REST?</li>
                </ol>
            </div>
        );
    }
}
class Three extends React.Component {
    render() {
        return (
            <div class="written">
                <ol>
                    <li>
                        Can you give an example of using an ID selector in CSS?
                    </li>
                    <li>What is the use of grouping in CSS3?Give example</li>
                    <li>Write your name using console.log?</li>
                    <li>Make a Array of objects and use Map function</li>
                    <li>
                        Make a Array of objects and use Reduce function and
                        Filter function
                    </li>
                </ol>
            </div>
        );
    }
}

const steps = [
    { name: "Behavioral Question", component: <One /> },
    { name: "Technical Question", component: <Two /> },
    { name: "Written Exam", component: <Three /> },
];

const InterviewQues = () => (
    <div class="interview-page">
        <Navbar />
        <div class="blog-container">
            <div class="blog-header">
                <div class="blog-cover">
                    <div class="blog-author">
                        <h3>Company Name</h3>
                    </div>
                </div>
            </div>

            <div class="blog-body">
                <div class="blog-title">
                    <h1>
                        <a href="#">Web Development Internship</a>
                    </h1>
                </div>
                <div class="blog-summary">
                    <p>
                        Web development is the work involved in developing a
                        website for the Internet or an intranet. Web development
                        can range from developing a simple single static page of
                        plain text to complex web applications, electronic
                        businesses, and social network services.
                    </p>
                </div>
                <div class="blog-tags">
                    <ul>
                        <li>
                            <a href="#">JavaScript</a>
                        </li>
                        <li>
                            <a href="#">Django</a>
                        </li>
                        <li>
                            <a href="#">React JS</a>
                        </li>
                        <li>
                            <a href="#">CSS</a>
                        </li>
                        <li>
                            <a href="#">GIT</a>
                        </li>
                        <li>
                            <a href="#">Docker</a>
                        </li>
                        <li>
                            <a href="#">Firebase</a>
                        </li>
                        <li>
                            <a href="#">AWS</a>
                        </li>
                        <li>
                            <a href="#">Node</a>
                        </li>
                        <li>
                            <a href="#">Agile</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="blog-footer">
                {/* // <div style={styles}> */}
                <MultiStep steps={steps} />
            </div>
        </div>

        <div class="blog-container">
            <div class="blog-header">
                <div class="blog-cover">
                    <div class="blog-author">
                        <h3>Company Name202</h3>
                    </div>
                </div>
            </div>

            <div class="blog-body">
                <div class="blog-title">
                    <h1>
                        <a href="#">Mobile Development Internship</a>
                    </h1>
                </div>
                <div class="blog-summary">
                    <p>
                        Mobile development is the work involved in developing a
                        website for the Internet or an intranet. Web development
                        can range from developing a simple single static page of
                        plain text to complex web applications, electronic
                        businesses, and social network services.
                    </p>
                </div>
                <div class="blog-tags">
                    <ul>
                        <li>
                            <a href="#">Flutter</a>
                        </li>
                        <li>
                            <a href="#">Fireabse</a>
                        </li>
                        <li>
                            <a href="#">Nest</a>
                        </li>
                        <li>
                            <a href="#">Anroid</a>
                        </li>
                        <li>
                            <a href="#">IOS</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="blog-footer">
                {/* // <div style={styles}> */}
                <MultiStep steps={steps} />
            </div>
        </div>

        <Footer />
    </div>
);
export default InterviewQues;
