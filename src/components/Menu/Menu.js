import React, { useState } from 'react';

import './Menu.sass';

import Social from './../../components/Social/Social'

const Menu = ({ handleClick }) => {

    const [menuState, setMenuState] = useState({ isOpen: false })

    const handleMenuClick = () => {
        setMenuState({ isOpen: !menuState.isOpen })   
    }

    return (
        <nav className={"Menu " + (menuState.isOpen ? "open" : "close" )}>
            <div className={"Menu__Switcher"} onClick={handleMenuClick}></div>
            <div className="Menu__Item Menu__Lang">
                <span>FR</span> |<span> EN</span>
            </div>
            <div className="Menu__Item">
                <button onClick={() => handleClick("josiane")}>josiane ?</button>
            </div>
            <div className="Menu__Item">
                <button onClick={() => handleClick("work")}>le travail</button>
            </div>
            <div className="Menu__Item">
                <button onClick={() => handleClick("family")}>la famille</button>
            </div>
            <div className="Menu__Item">
                <button onClick={() => handleClick("cousins")}>les cousines</button>
            </div>
            <div className="Menu__Item">
                <button onClick={() => handleClick("contact")}>le contact</button>
            </div>
            <Social />
        </nav>
    )
}

export default Menu