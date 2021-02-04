import React, { useState } from 'react';

import './Header.sass';

import backgroundVideo from './../../videos/placeholder_video.mp4';
import soundOnIcon from './../../images/icons/sound_on.svg';
import soundOffIcon from './../../images/icons/sound_off.svg';
import fullscreenIcon from './../../images/icons/fullscreen.svg';

const Header = () => {
    const [soundState, setSoundState] = useState(false);

    const soundIconSrc = soundState ? soundOnIcon : soundOffIcon;

    return (
        <header className="Header">
            <div className="Header__Title">
                <h1>Josiane</h1>
                <span>Agence d'idées</span>
            </div>

            <img className="Header__Button Header__Button--mute" src={soundIconSrc} alt={""} />

            <img className="Header__Button Header__Button--fullscreen" src={fullscreenIcon} alt={""} />

            <video className="Header__Background-video" autoPlay muted loop>
                <source src={backgroundVideo} type="video/mp4" />
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