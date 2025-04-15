import React from "react";
import Image1 from "../../images/image-012.jpg";
import Box from "./box/Box";
import "./News.css";
const News = () => {
    return (
        <div className="news pt-5">
            <div className="container pt-5" data-aos="fade-up">
                <h3 className="text-center">LATEST NEWS</h3>
                <h1 className="text-center header">Recent News & Blogs</h1>
                <p className="text-center mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc sed congue arcu, In et dignissim quam condimentum vel.
                </p>
                <div className="cont row mt-5 mb-5 pt-5">
                    <Box Image1={Image1} />
                    <Box Image1={Image1} />
                    <Box Image1={Image1} />
                </div>
            </div>
        </div>
    );
};

export default News;
