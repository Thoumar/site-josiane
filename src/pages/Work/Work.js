import './Work.sass';

import React, { useState } from 'react';

import Isotope from '../../components/Isotope/Isotope';

import Footer from './../../components/Footer/Footer';
import Logo from './../../components/Logo/Logo';
import Menu from './../../components/Menu/Menu';
import { useHistory } from 'react-router';

const Work = ({ projects }) => {

    const history = useHistory()
    const [menuState, setMenuState] = useState({ isOpen: false })

    
    const handleLinkClick = (position) => {
        if(document.querySelector('[scroll-ref="' + position + '"]')) {
            setMenuState({ iOpen: false })
            document.querySelector('[scroll-ref="' + position + '"]')
                .scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
        } else if(position === "work") {
            history.push("/work") 
        } else {
            setMenuState({ isOpen: false })
        }
    }

    const handleSwitchClick = () => setMenuState({ isOpen: !menuState.isOpen })

    return (
        <div className="Work">
                <Logo color="blue" />
            <Menu
                onLinkClick={handleLinkClick}
                onSwitchClick={handleSwitchClick}
                isOpen={menuState.isOpen}
            />
            <Isotope
                projects={projects}
            />
            <Footer
                scrollRef="contact"
            />
        </div>
    )
}

export default Work