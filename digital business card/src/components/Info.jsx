import React from "react";
import image from "../assets/me.png"
import mail from "../assets/Mail.svg"
import linkedin from "../assets/linkedin.svg"

export default function Info() {
    return (
        <>
            <img src={image} className="info--image" alt="my picture" />
            <div className="text--info">
                <h1 className="my--name">Awosise Oluwaseun</h1>
                <h3 className="my--role">Fullstack Developer</h3>
                <h4 className="my--site">oluwaseun.website</h4>
                <div className="buttons flex">
                    <a href="#" className="btn email"><img src={mail} alt="mail" className="intro--icon mail" />Email</a>
                    <a href="#" className="btn linkedin"><img src={linkedin} alt="linkedin" className="intro--icon" />LinkedIn</a>
                </div>
            </div>
        </>
    )
}