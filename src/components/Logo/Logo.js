
import React, { useRef } from 'react';
import logoBlue from './../../images/logos/logo_blue.png';
import logoCousines from './../../images/logos/logo_cousines.svg';

import { useHistory } from 'react-router-dom';

import './Logo.sass'

const Logo = ({ color, type }) => {

    var logoRef = useRef(null)
    const history  = useHistory()

    if(type === "sticky") {
        window.onscroll = () => {
            // console.log(window.pageYOffset, window.innerHeight, logoRef.current)
            if (window.pageYOffset > window.innerHeight - 10) {
                logoRef.current.classList.add("flying");
            } else {
                logoRef.current.classList.remove("flying");
            }
        };
    }

    let logoSrc = logoBlue
    
    switch (color) {
        case "blue":
            logoSrc =  logoBlue
            break;
        case "cousines":
            logoSrc =  logoCousines
            break;
        default:
            logoSrc =  logoBlue
            break;
    }

    return (
        <img
            className={"Logo" + " " + type}
            ref={logoRef}
            src={logoSrc}
            onClick={() => history.push("/")}
            alt="Josiane Logo"
        />
    )
}

export default Logo