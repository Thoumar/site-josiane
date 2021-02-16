import React, { useState } from 'react';

import './Header.sass';

import logoWhite from './../../images/logos/logo_white.png';
import soundOnIcon from './../../images/icons/sound_on.png';
import soundOffIcon from './../../images/icons/sound_off.png';
import fullscreenIcon from './../../images/icons/fullscreen.png';

const Header = () => {
    const [soundState, setSoundState] = useState(false);
    const handleSetSoundState = () => {
        setSoundState(!soundState)
    }

    const soundIconSrc = soundState ? soundOnIcon : soundOffIcon;

    return (
        <header className="Header">
            <div className="Header__Title">
                <img src={logoWhite} alt="Logo Josiane" />
                <span>Agence d'idées</span>
            </div>

            <img className="Header__Button Header__Button--mute" src={soundIconSrc} alt={""} onClick={() => { handleSetSoundState() }} />

            <img className="Header__Button Header__Button--fullscreen" src={fullscreenIcon} alt={""} />

            <video className="Header__Background-video" autoPlay muted loop>
                <source src={""} type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
            </video>

            <div className="Header__Scroller">
                <span></span>
                <span>Scroll</span>
            </div>
        </header>
    )
};

export default Header;