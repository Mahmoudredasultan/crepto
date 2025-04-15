import React from "react";
import { Link } from "react-router-dom";
import "./sinIn.css";
import ImageBack2 from "../../images/hero-shape-2.svg";
import ImageBack1 from "../../images/hero-shape-1.svg";

const Signin = ({ sign }) => {
    return (
        <div className="sign pt-5 pb-5">
            <img src={ImageBack2} className="img2" alt="" />
            <img src={ImageBack1} className="img1" alt="" />
            <div className="container pt-5 pb-5 mt-5">
                <div className="cont mx-auto text-center">
                    <h3>
                        {sign === "signup"
                            ? "Create your account"
                            : "Sign in to your account"}
                    </h3>
                    <p>
                        {sign === "signup"
                            ? "Its totally free and super easy"
                            : "Login to your account for a faster checkout."}
                    </p>
                    <p className="sepration">Or, register with your email</p>
                    <form>
                        <ul>
                            {sign === "signup" && (
                                <li>
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Name"
                                    />
                                </li>
                            )}
                            <li>
                                <label>Work Email</label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Eame"
                                />
                            </li>
                            <li>
                                <label>Your Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter Your Password"
                                />
                            </li>

                            {sign === "signup" ? (
                                <li className="speshial">
                                    <input type="checkbox" />
                                    <label>
                                        By creating account means you agree to
                                        the Terms and Conditions , and our
                                        Privacy Policy{" "}
                                    </label>
                                </li>
                            ) : (
                                <li className="second d-flex justify-content-between align-items-center">
                                    <div>
                                        <input type="checkbox" />
                                        <label>keep me signed in</label>
                                    </div>
                                    <a href="#" className="link">
                                        Forgot Password?
                                    </a>
                                </li>
                            )}
                        </ul>
                        <input type="submit" />
                        <p className="other mt-3">
                            {sign === "signup"
                                ? "Already using Startup?"
                                : "Dont you have an account?"}{" "}
                            <Link
                                to={`${
                                    sign === "signup" ? "/login" : "/signup"
                                }`}
                            >
                                {sign === "signup" ? " Sign in" : "Sign up"}
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signin;
