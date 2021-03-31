import React, { useState, useEffect } from 'react'
import Isotope from "./../../components/Isotope/Isotope";
// import { useLocation } from 'react-router-dom';
import logoBlue from './../../images/logos/logo_blue.png';
import Menu from './../../components/Menu/Menu';

import { useLocation } from 'react-router-dom';

const Work = ({ navigation, projects, goToPage}) => {
	const { pathname } = useLocation();
    const [menuState, setMenuState] = useState({ isOpen: false })

    const handleLinkClick = (position) => {
        setMenuState({ isOpen: false })
        goToPage()
    }

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

    const handleSwitchClick = () => setMenuState({ isOpen: !menuState.isOpen })


    return (
        <div className="Work">
            <Menu onLinkClick={handleLinkClick} onSwitchClick={handleSwitchClick} isOpen={menuState.isOpen} />
            <img className="Logo_Blue" src={logoBlue} onClick={() => { goToPage() }} alt="Josiane Logo" />
            <Isotope projects={projects} goToPage={goToPage} />
        </div>
    )
}

export default Work