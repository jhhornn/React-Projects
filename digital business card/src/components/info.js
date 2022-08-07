import React from "react";
import image from "../assets/me.png"
import mail from "../assets/Mail.svg"
import linkedin from "../assets/linkedin.svg"

export default function Info() {
    return (
        <>
            <img src={image} className="info--image" alt="my picture" />
            <h1>Awosise Oluwaseun</h1>
            <h3>Fullstack Developer</h3>
            <h4>oluwaseun.website</h4>
            <div className="buttons">
                <a href="#" className="btn email"><img src={mail} alt="mail" />Email</a>
                <a href="#" className="btn linkedin"><img src={linkedin} alt="mail" />LinkedIn</a>
            </div>
        </>
    )
}