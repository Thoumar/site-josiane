import React, { useState } from 'react';
import ReactPlayer from 'react-player'

import './Header.sass';

import logoWhite from './../../images/logos/logo_white.png';
// import placeHolderVideo from './../../videos/placeholder_video.mp4';
import soundOnIcon from './../../images/icons/sound_on.png';
import soundOffIcon from './../../images/icons/sound_off.png';
import fullscreenIcon from './../../images/icons/fullscreen.png';

const Header = ({ cover, title, subtitle, type }) => {
    const [soundState, setSoundState] = useState(false);
    const [fullScreenState, setFullScreenState] = useState(false);
    const handleSetSoundState = () => {
        setSoundState(!soundState)
    }

    const soundIconSrc = soundState ? soundOnIcon : soundOffIcon;
    return (
        <header className="Header">
            <div className="Header__Title">
                {
                    title
                    ? <h1>{title}</h1>
                    : <img src={logoWhite} alt="Logo Josiane" />
                }
                <span>{subtitle}</span>
            </div>
            <img className="Header__Button Header__Button--mute" src={soundIconSrc} alt={""} onClick={() => { handleSetSoundState() }} />
            <img className="Header__Button Header__Button--fullscreen" src={fullscreenIcon} alt={""} />
            <div className="Header__Background-video">
                <ReactPlayer  playing={true} muted={!soundState} loop url={"https://res.cloudinary.com/thoumar/video/upload/v1615030635/placeholder_video_351fc77517.mp4"} width='100%' height='100%' />
            </div>
            <div className="Header__Scroller">
                <span></span>
                <span>Scroll</span>
            </div>
        </header>
    )
};

export default Header;