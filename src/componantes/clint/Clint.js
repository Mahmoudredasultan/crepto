import React from "react";
import Image1 from "../../images/image-010.jpg";
import Back from "../../images/testimonial-shape.svg";
import "./clint.css";
const Clint = () => {
    return (
        <div className="clint pt-5 pb-5">
            <div className="container pt-5" data-aos="fade-up">
                <h3 className="text-center">TESTIMONIALS</h3>
                <h1 className="text-center header">What Our Client Say's</h1>
                <p className="text-center mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc sed congue arcu, In et dignissim quam condimentum vel.
                </p>
                <div className="cont row pt-5 mt-4 mb-5">
                    <div className="box col-12 col-lg-6">
                        <img className="back" src={Back} alt="" />
                        <div className="cont1 d-flex align-items-center">
                            <img src={Image1} className="img" alt="" />
                            <div className="text">
                                <h3>Jason Keys</h3>
                                <p>CEO & Founder @ Dreampeet.</p>
                            </div>
                        </div>
                        <p>
                            “I believe in lifelong learning and Learn. is a
                            great place to learn from experts. I've learned a
                            lot and recommend it to all my friends and familys.”
                        </p>
                    </div>
                    <div className="box col-12 col-lg-6">
                        <img className="back" src={Back} alt="" />
                        <div className="cont1 d-flex align-items-center">
                            <img src={Image1} className="img" alt="" />
                            <div className="text">
                                <h3>Jason Keys</h3>
                                <p>CEO & Founder @ Dreampeet.</p>
                            </div>
                        </div>
                        <p>
                            “I believe in lifelong learning and Learn. is a
                            great place to learn from experts. I've learned a
                            lot and recommend it to all my friends and familys.”
                        </p>
                    </div>
                    <div className="box col-12 col-lg-6">
                        <img className="back" src={Back} alt="" />
                        <div className="cont1 d-flex align-items-center">
                            <img src={Image1} className="img" alt="" />
                            <div className="text">
                                <h3>Jason Keys</h3>
                                <p>CEO & Founder @ Dreampeet.</p>
                            </div>
                        </div>
                        <p>
                            “I believe in lifelong learning and Learn. is a
                            great place to learn from experts. I've learned a
                            lot and recommend it to all my friends and familys.”
                        </p>
                    </div>
                    <div className="box col-12 col-lg-6">
                        <img className="back" src={Back} alt="" />
                        <div className="cont1 d-flex align-items-center">
                            <img src={Image1} className="img" alt="" />
                            <div className="text">
                                <h3>Jason Keys</h3>
                                <p>CEO & Founder @ Dreampeet.</p>
                            </div>
                        </div>
                        <p>
                            “I believe in lifelong learning and Learn. is a
                            great place to learn from experts. I've learned a
                            lot and recommend it to all my friends and familys.”
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clint;
