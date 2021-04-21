
import React, { useRef } from 'react';
import logoBlue from './../../images/logos/logo_blue.png';
import logoCousines from './../../images/logos/logo_cousines.svg';

import { useHistory } from 'react-router-dom';

import './Logo.sass'

const Logo = ({ color, type, isUnderHeader }) => {

    const logoRef = useRef(null)
    const history  = useHistory()

    const height = isUnderHeader ? 105 : 4
    const flyingTreshold = isUnderHeader ?  window.innerHeight - 10 : 0

    if(type === "sticky") {
        window.onscroll = () => {
            console.log(window.pageYOffset > flyingTreshold)
            if (window.pageYOffset > flyingTreshold) {
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
            className={"Logo " + type}
            style={{ top: height + "vh" }}
            ref={logoRef}
            src={logoSrc}
            onClick={() => history.push("/")}
            alt="Josiane Logo"
        />
    )
}

export default Logo