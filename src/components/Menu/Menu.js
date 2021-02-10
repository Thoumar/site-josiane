import React, { useState } from 'react';

import './Menu.sass';

import facebookIcon from './../../images/icons/facebook.png';
import instagramIcon from './../../images/icons/instagram.png';
import twitterIcon from './../../images/icons/twitter.png';
import linkedinIcon from './../../images/icons/linkedin.png';


const Menu = ({ handleNavigation }) => {

    const [menuState, setMenuState] = useState({ isOpen: false })

    const handleMenuClick = () => {
        setMenuState({ isOpen: !menuState.isOpen })   
    }

    return (
        <nav className={"Menu " + (menuState.isOpen ? "open" : "close" )}>
            <div className={"Menu__Switcher"} onClick={handleMenuClick}></div>
            <div class="Menu__Item Menu__Lang">
                <span>FR</span> |<span> EN</span>
            </div>
            <div class="Menu__Item">
                <button onPress={() => handleNavigation("josiane")}>josiane ?</button>
            </div>
            <div class="Menu__Item">
                <button onPress={() => handleNavigation("work")}>le travail</button>
            </div>
            <div class="Menu__Item">
                <button onPress={() => handleNavigation("family")}>la famille</button>
            </div>
            <div class="Menu__Item">
                <button onPress={() => handleNavigation("cousines")}>les cousines</button>
            </div>
            <div class="Menu__Item">
                <button onPress={() => handleNavigation("josiane")}>le contact</button>
            </div>
            <div class="Menu__Item Menu__Social">
                <a href="#">
                    <img src={facebookIcon} alt="Facebook link" />
                </a>
                <a href="#">
                    <img src={instagramIcon} alt="Instagram link" />
                </a>
                <a href="#">
                    <img src={twitterIcon} alt="Twitter link" />
                </a>
                <a href="#">
                    <img src={linkedinIcon} alt="Linkdein link" />
                </a>
            </div>
        </nav>
    )
}

export default Menu