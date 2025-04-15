import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <div id="contact" className="contact pt-5 pb-5">
            <div
                className="container d-flex justify-content-between align-items-center pt-5 pb-5"
                data-aos="fade-up"
            >
                <div className="lift-side">
                    <h3>Contact Us</h3>
                    <h1 className="header">Let's talk about your problem.</h1>
                    <div className="cont">
                        <div className="box">
                            <h3>Our Location</h3>
                            <p>
                                401 Broadway, 24th Floor, Orchard Cloud View,
                                London
                            </p>
                        </div>
                        <div className="box">
                            <h3>Our Location</h3>
                            <p>
                                401 Broadway, 24th Floor, Orchard Cloud View,
                                London
                            </p>
                        </div>
                        <div className="box">
                            <h3>Our Location</h3>
                            <p>
                                401 Broadway, 24th Floor, Orchard Cloud View,
                                London
                            </p>
                        </div>
                        <div className="box">
                            <h3>Our Location</h3>
                            <p>
                                401 Broadway, 24th Floor, Orchard Cloud View,
                                London
                            </p>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <h3>Send us a Message</h3>
                    <form>
                        <ul>
                            <li>
                                <label>Full Name*</label>
                                <input type="text" />
                            </li>
                            <li>
                                <label>Email Address*</label>
                                <input type="text" />
                            </li>
                            <li>
                                <label>Message*</label>
                                <textarea cols="30" rows="10"></textarea>
                            </li>
                            <input className="submit" type="submit" />
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
