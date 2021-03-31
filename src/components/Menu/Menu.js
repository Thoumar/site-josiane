import React from 'react';

import './Menu.sass';

import Social from './../../components/Social/Social'

const Menu = ({ onLinkClick, onSwitchClick, isOpen }) => {

    return (
        <nav className={"Menu " + (isOpen ? "open" : "close" )}>
            <div className={"Menu__Switcher"} onClick={onSwitchClick}></div>
            <div className="Menu__Item Menu__Lang">
                <span>FR</span> |<span> EN</span>
            </div>
            <div className="Menu__Item">
                <button onClick={() => onLinkClick("josiane")}>josiane</button>
            </div>
            <div className="Menu__Item">
                <button onClick={() => onLinkClick("work")}>le travail</button>
            </div>
            <div className="Menu__Item">
                <button onClick={() => onLinkClick("family")}>la famille</button>
            </div>
            <div className="Menu__Item">
                <button onClick={() => onLinkClick("cousins")}>les cousines</button>
            </div>
            <div className="Menu__Item">
                <button onClick={() => onLinkClick("contact")}>le contact</button>
            </div>
            <Social />
        </nav>
    )
}

export default Menu