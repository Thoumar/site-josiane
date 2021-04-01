import React, { useState, useEffect } from 'react'
import Isotope from "./../../components/Isotope/Isotope";
// import { useLocation } from 'react-router-dom';
import logoBlue from './../../images/logos/logo_blue.png';
import Menu from './../../components/Menu/Menu';

import { useLocation, useHistory } from 'react-router-dom';

const Work = ({ projects }) => {
    const history = useHistory();
	const { pathname } = useLocation();
    const [menuState, setMenuState] = useState({ isOpen: false });

    const handleLinkClick = (position) => setMenuState({ isOpen: false });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

    const handleSwitchClick = () => setMenuState({ isOpen: !menuState.isOpen })

    return (
        <div className="Work">
            <Menu onLinkClick={handleLinkClick} onSwitchClick={handleSwitchClick} isOpen={menuState.isOpen} />
            <img className="Logo_Blue" src={logoBlue} onClick={() => { history.push("/") }} alt="Josiane Logo" />
            <Isotope projects={projects} />
        </div>
    )
}

export default Work