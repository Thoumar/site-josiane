import React, { useEffect } from 'react';

import ReactPlayer from 'react-player';

import './Header.sass';

import logoWhite from './../../images/logos/logo_white.png';


const Header = ({ cover, title, subtitle, type }) => {
    useEffect(() => {
        window.onscroll = () => {
            if(document.querySelector(".Header__Scroller")) {
                document.querySelector(".Header__Scroller").style.opacity = 1 - (window.scrollY / window.outerHeight) * 2
                document.querySelector(".Header__Scroller").style.transform = "translateX(-50%) translateY(" + window.scrollY / 5 + "px)"
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
                    ? (
                        <div className="Header__Background-video fullscreen">
                            <ReactPlayer controls playing={true} muted={true} loop url={cover.url} width='100%' height='100%' />
                        </div>
                    ) : (
                        <div className={"Header__Background-image"}>
                            <img height="100%" width="100%" src={cover.url} alt="Background" />
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