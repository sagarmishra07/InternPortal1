import React from "react";
import "./Footer.css";
import logo from "../../images/Group.png";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

function Footer() {
    return (
        <>
            <div className="footerbody">
                <div className="footer">
                    <div className="logo">
                        <img src={logo}></img>
                        <p>Get Your Dream Job With Intern Aid</p>
                        <p>014379551</p>
                        <p>internaid@gmail.com</p>
                    </div>
                    <div className="list1 ">
                        <ul type="none">
                            <li>Home</li>
                            <li>jobs</li>
                            <li>about</li>
                            <li>contact</li>
                        </ul>
                    </div>
                    <div className="list2 ">
                        <ul type="none">
                            <li>Roadmap</li>
                            <li>Services</li>
                            <li>Steps</li>
                            <li>Employeer</li>
                        </ul>
                    </div>
                    <div className="list3">
                        <p>Follow Us</p>
                        <br />
                        <ul type="none">
                            <BsFacebook size={30} />
                            <BsInstagram size={30} />
                            <BsTwitter size={30} />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
