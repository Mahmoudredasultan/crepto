import React from "react";
import "./applcation.css";
import Image1 from "../../images/app-image.png";
import Image2 from "../../images/faq-shape-2.svg";
const Applcation = () => {
    return (
        <div className="applcation pt-5 mt-5 mb-5 pb-5">
            <img src={Image2} className="back" alt="" />
            <div
                className="container d-flex justify-content-between align-items-center"
                data-aos="fade-up"
            >
                <div className="text">
                    <h3>Download Our App</h3>
                    <h1 className="header">
                        The choice is yours, we've got you covered
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce tristique, nisl ut viverra porttitor, dolor sem
                        lacinia orci, et pretium quam mi a eros sed molestie
                        est.
                    </p>
                    <div className="links d-flex">
                        <a href="#" className="d-flex  align-items-center me-4">
                            <span>
                                {" "}
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.7101 19.5C17.8801 20.74 17.0001 21.95 15.6601 21.97C14.3201 22 13.8901 21.18 12.3701 21.18C10.8401 21.18 10.3701 21.95 9.10009 22C7.79009 22.05 6.80009 20.68 5.96009 19.47C4.25009 17 2.94009 12.45 4.70009 9.39C5.57009 7.87 7.13009 6.91 8.82009 6.88C10.1001 6.86 11.3201 7.75 12.1101 7.75C12.8901 7.75 14.3701 6.68 15.9201 6.84C16.5701 6.87 18.3901 7.1 19.5601 8.82C19.4701 8.88 17.3901 10.1 17.4101 12.63C17.4401 15.65 20.0601 16.66 20.0901 16.67C20.0601 16.74 19.6701 18.11 18.7101 19.5ZM13.0001 3.5C13.7301 2.67 14.9401 2.04 15.9401 2C16.0701 3.17 15.6001 4.35 14.9001 5.19C14.2101 6.04 13.0701 6.7 11.9501 6.61C11.8001 5.46 12.3601 4.26 13.0001 3.5Z"
                                        fill="white"
                                    ></path>
                                </svg>
                            </span>
                            <p>App Store</p>
                        </a>
                        <a href="#" className="d-flex  align-items-center whit">
                            <span>
                                {" "}
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    class="fill-current"
                                >
                                    <path d="M3 20.5V3.50002C3 2.91002 3.34 2.39002 3.84 2.15002L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.50002L20.16 10.81ZM6.05 2.66002L16.81 8.88002L14.54 11.15L6.05 2.66002Z"></path>
                                </svg>
                            </span>
                            <p>Play Store</p>
                        </a>
                    </div>
                </div>
                <img src={Image1} alt="" />
            </div>
        </div>
    );
};

export default Applcation;
