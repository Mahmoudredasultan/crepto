import React from "react";
import Image1 from "../../images/image-01.jpg";
import "./team.css";
const Team = () => {
    return (
        <div className="team mt-5 mb-5 pb-5">
            <div className="container" data-aos="fade-up">
                <h3 className="text-center">OUT TEAM</h3>
                <h1 className="header text-center">Meet out Team</h1>
                <p className="text-center mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc sed congue arcu, In et dignissim quam condimentum vel.
                </p>
                <div className="row mt-5 pt-5 gap-4">
                    <div className="box p-3 col-lg-3 col-md-6 col-sm-12">
                        <img src={Image1} alt="" />
                        <h3 className="mt-3 text-center">Matheus Ferrero</h3>
                        <p className="text-center">Marketing Expert</p>
                        <div className="links d-flex justify-content-between align-items-center mx-auto gap-4 ">
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
                    <div className="box p-3 col-lg-3 col-md-6 col-sm-12">
                        <img src={Image1} alt="" />
                        <h3 className="mt-3 text-center">Matheus Ferrero</h3>
                        <p className="text-center">Marketing Expert</p>
                        <div className="links d-flex justify-content-between align-items-center mx-auto gap-4 ">
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
                    <div className="box p-3 col-lg-3 col-md-6 col-sm-12">
                        <img src={Image1} alt="" />
                        <h3 className="mt-3 text-center">Matheus Ferrero</h3>
                        <p className="text-center">Marketing Expert</p>
                        <div className="links d-flex justify-content-between align-items-center mx-auto  ">
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
                    <div className="box p-3 col-lg-3 col-md-6 col-sm-12">
                        <img src={Image1} alt="" />
                        <h3 className="mt-3 text-center">Matheus Ferrero</h3>
                        <p className="text-center">Marketing Expert</p>
                        <div className="links d-flex justify-content-between align-items-center mx-auto gap-4 ">
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
                </div>
            </div>
        </div>
    );
};

export default Team;
