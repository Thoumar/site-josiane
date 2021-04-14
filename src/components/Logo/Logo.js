
import React from 'react';
import logoBlue from './../../images/logos/logo_blue.png';

import { useHistory } from 'react-router-dom';

import './Logo.sass'

const Logo = ({ color }) => {
    const history  = useHistory()

    let logoSrc = logoBlue
    switch (color) {
        case "blue":
            logoSrc =  logoBlue
            break;
    
        default:
            logoSrc =  logoBlue
            break;
    }

    return (
        <img
            className="Logo"
            src={logoSrc}
            onClick={() => history.push("/")}
            alt="Josiane Logo"
        />
    )
}

export default Logo