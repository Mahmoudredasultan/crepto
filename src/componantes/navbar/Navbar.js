import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Icon from "../listIcon/Icon";
import logo from "../../images/logo-white.svg";
const Navbar = () => {
    const [opend, setOpend] = useState(true);
    const [clicked, setClicked] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState(["active", "", "", "", ""]);
    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset !== 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        return () => {
            window.onscroll = null;
        };
    }, []);

    return (
        <div
            className={`navbar1 nav ${scrolled ? "scroll" : "no-scroll"}`}
            data-aos="fade-down"
        >
            <div className="container d-flex justify-content-between align-items-center">
                <a className="logo" href="#">
                    <img src={logo} alt="" />
                </a>
                <div className="cont d-flex align-items-center">
                    <ul className=" d-lg-flex justify-content-between align-items-center ">
                        <li>
                            <Link to="/" className="active">
                                Home
                            </Link>
                        </li>
                        <li>
                            <a href="#features">Features</a>
                        </li>
                        <li>
                            <a href="#roadmap">Roadmap</a>
                        </li>
                        <li className="position-relative page">
                            <a
                                onClick={() => {
                                    if (clicked) {
                                        document.querySelector(
                                            ".navbar1 ul li ul"
                                        ).style.left = "500px";
                                        setClicked(false);
                                    } else {
                                        document.querySelector(
                                            ".navbar1 ul li ul"
                                        ).style.left = "0";
                                        setClicked(true);
                                    }
                                }}
                            >
                                Pages{" "}
                                <i className="fas fa-regular fa-chevron-down"></i>
                            </a>
                            <ul className="position-absolute shadow-sm">
                                <li>
                                    <Link to="/sales">sales page</Link>
                                    <Link to="products">products page</Link>
                                    <Link to="/comunity">comunity page</Link>
                                    <Link to="/contact">contact page</Link>
                                    <Link to="/signup">signup page</Link>
                                    <Link to="/login">signin page</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#contact">Support</a>
                        </li>
                        <li>
                            <div></div>
                        </li>
                    </ul>
                    <Link to="/login" className="butt d-none d-lg-block">
                        Sign In
                    </Link>
                </div>
                <div className="box1 d-flex align-items-center d-lg-none">
                    <Link to="/login" className="butt me-3">
                        Sign In
                    </Link>
                    <Icon setOpend={setOpend} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
