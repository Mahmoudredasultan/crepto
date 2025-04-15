import React from "react";
import Ask from "./ask/Ask";
import "./faq.css";
import Image1 from "../../images/faq-shape-1.svg";
const Faq = () => {
    return (
        <div className="faq  pt-5 pb-5">
            <img src={Image1} alt="" className="img" />
            <div className="container pt-5" data-aos="fade-up">
                <h3 className="text-center">FAQ</h3>
                <h1 className="text-center header">
                    Frequently Asked Questions
                </h1>
                <p className="text-center mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc sed congue arcu, In et dignissim quam condimentum vel.
                </p>
                <div className="cont mt-5">
                    <Ask
                        quition={"How can I participate in the ICO Token sale?"}
                        anser={
                            "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look evens lightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything."
                        }
                    />
                    <Ask
                        quition={"How can I participate in the ICO Token sale?"}
                        anser={
                            "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look evens lightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything."
                        }
                    />
                    <Ask
                        quition={"How can I participate in the ICO Token sale?"}
                        anser={
                            "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look evens lightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything."
                        }
                    />
                    <Ask
                        quition={"How can I participate in the ICO Token sale?"}
                        anser={
                            "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look evens lightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything."
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Faq;
