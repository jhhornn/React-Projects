import React from 'react';

import twitter from "../assets/Twitter Icon.svg";
import facebook from "../assets/Facebook Icon.svg";
import instagram from "../assets/Instagram Icon.svg";
import github from "../assets/Github Icon.svg";

export default function Footer() {
    return (
        <>
            <div className="footer flex">
                <div className="footer--icons flex">
                    <img src={twitter} alt="" />
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={github} alt="" />
                </div>
            </div>
        </>
    )
}