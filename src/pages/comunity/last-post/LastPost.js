import React from "react";

const LastPost = ({ ImageSrc, content, data }) => {
    return (
        <a className="last-post d-flex d-lg-block justify-content-between align-items-center">
            <img src={ImageSrc} alt="" />
            <p className="mt-2 mb-2">{content}</p>
            <span>{data}</span>
        </a>
    );
};

export default LastPost;
