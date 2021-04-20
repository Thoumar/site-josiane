
import React from 'react';
import logoBlue from './../../images/logos/logo_blue.png';
import logoCousines from './../../images/logos/logo_cousines.svg';

import { useHistory } from 'react-router-dom';

const Logo = ({ color, type }) => {
    const history  = useHistory()

    let logoStyle = {
        zIndex: 22,
        cursor: "pointer",
    }

    switch (type) {
        case "flying":
            logoStyle =  { ...logoStyle, position: "fixed", top: "5rem", left: "5rem", marginBottom: "16rem" }
            break;

        case "static":
            logoStyle =  { ...logoStyle, position: "relative", width: "100%", height: "9rem", objectFit: "contain", objectPosition: "5rem", marginBottom: "10rem" }
            break;
    
        default:
            logoStyle =  { ...logoStyle, position: "fixed" }
            break;
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
            className="Logo"
            style={logoStyle}
            src={logoSrc}
            onClick={() => history.push("/")}
            alt="Josiane Logo"
        />
    )
}

export default Logo