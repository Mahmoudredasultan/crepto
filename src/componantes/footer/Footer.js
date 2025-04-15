import React from "react";
import Image1 from "../../images/logo-white.svg";
import "./footer.css";
import footer from "../../images/footer-shape-1.svg";
const Footer = () => {
    return (
        <div className="footer pt-5 ">
            <img className="img" src={footer} alt="" />
            <div className="container pt-5 " data-aos="fade-up">
                <div className="row mb-5 pb-5">
                    <div className="box col-lg-4">
                        <a href="#" className="logo">
                            <img src={Image1} alt="" />
                        </a>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam vitae quam nec ante fringilla vel at erat
                            convallis elit.
                        </p>
                        <div className="links d-flex justify-content-between align-items-center gap-4 ">
                            <a href="#">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                    <div className="box box2 col-lg-4">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <a href="#">What is ico</a>
                            </li>
                            <li>
                                <a href="#"> Roadmap </a>
                            </li>
                            <li>
                                <a href="#"> Whitepaper </a>
                            </li>
                            <li>
                                <a href="#"> Social Network </a>
                            </li>
                            <li>
                                <a href="#"> Join Us Now </a>
                            </li>
                        </ul>
                    </div>
                    <div className="box box2 col-lg-4">
                        <h3>Support</h3>
                        <ul>
                            <li>
                                <a href="#"> Setting & Privacy </a>
                            </li>
                            <li>
                                <a href="#"> Help & Support </a>
                            </li>
                            <li>
                                <a href="#"> Terms & Conditions </a>
                            </li>
                            <li>
                                <a href="#"> 24/7 Supports </a>
                            </li>
                            <li>
                                <a href="#"> On Point FAQ </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="foot w-100 pt-4 m-0 pb-4">
                    <p className="mx-auto text-center mb-0">
                        © Crypto - all Rights Reserved, Crafted by UIdeck
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
