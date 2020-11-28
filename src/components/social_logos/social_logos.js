import React from "react";
import { Icon } from "@iconify/react";
import googleOutlined from "@iconify/icons-ant-design/google-outlined";
import twitterOutlined from "@iconify/icons-ant-design/twitter-outlined";
import facebookOutlined from "@iconify/icons-bx/bxl-facebook";

function SocialLogos() {
    return (
        <div className="social-list">
            <a href className="float">
                <Icon className="social-icon" icon={googleOutlined} color="black" height="3vh" />
            </a>
            <a href className="float">
                <Icon className="social-icon" icon={facebookOutlined} color="black" height="3vh" />
            </a>
            <a href className="float">
                <Icon className="social-icon" icon={twitterOutlined} color="black" height="3vh" />
            </a>
        </div>
    );
}

export default SocialLogos;