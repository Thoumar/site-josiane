import React from 'react';

import Scroller from './../Scroller/Scroller'
import Video from './../Video/Video'

import './Header.sass';

const Header = ({ cover, title, subtitle }) => {
    return (
        <header className="Header">
            <div className="Header__Title">
            {
                    title
                    ? <h1>{title}</h1>
                    : null
                }
                {
                    subtitle
                    ? <span>{subtitle}</span>
                    : null
                }
                
            </div>
            {
                cover.url.indexOf('.mp4') > -1
                    ? (
                        <Video source={cover.url} />
                    ) : (
                        <div className={"Header__Background-image"}>
                            <img height="100%" width="100%" src={cover.url} alt="Background" />
                        </div>
                    )
            }
            



            <Scroller text="Scroll" />
        </header>
    )
};

export default Header;