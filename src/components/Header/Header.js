import React, { useState, useEffect } from 'react';

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
    
    const handleSetFullScreenState = () => {
        setFullScreenState(!fullScreenState)
    }

    const soundIconSrc = soundState ? soundOnIcon : soundOffIcon;

    useEffect(() => {
        window.onscroll = () => {
            if(document.querySelector("#root > div > div > header > div.Header__Scroller")) {
                console.log(window.outerHeight, window.scrollY / 100)
                document.querySelector("#root > div > div > header > div.Header__Scroller").style.opacity = 1 - (window.scrollY / window.outerHeight)
                document.querySelector("#root > div > div > header > div.Header__Scroller").style.transform = "translateX(-50%) translateY(" + window.scrollY / 10 + "px)"
            }
        };
    }, [])

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
            {
                cover.url.indexOf('.mp4') > -1
                    ? [
                        <img className="Header__Button Header__Button--mute" src={soundIconSrc} alt={""} onClick={() => { handleSetSoundState() }} />,
                        <img className="Header__Button Header__Button--fullscreen" src={fullscreenIcon} alt={""} onClick={() => { handleSetFullScreenState() }} />,
                        <div className={fullScreenState ? "Header__Background-video fullscreen" : "Header__Background-video"}>
                            <ReactPlayer  playing={true} muted={!soundState} loop url={cover.url} width='100%' height='100%' />
                        </div>
                    ]
                    : (
                        <div className={"Header__Background-image"}>
                            <img height="100%" width="100%" src={cover.url}  />
                        </div>
                    )
            }
            
            <div className="Header__Scroller">
                <span></span>
                <span>Scroll</span>
            </div>
        </header>
    )
};

export default Header;