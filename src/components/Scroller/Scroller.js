import React, { useEffect } from 'react';

import './Scroller.sass'

const Scroller = ({ text }) => {
    
    useEffect(() => {
        window.onscroll = () => {
            if(document.querySelector(".Header__Scroller")) {
                document.querySelector(".Header__Scroller").style.opacity = 1 - (window.scrollY / window.outerHeight) * 2
                document.querySelector(".Header__Scroller").style.transform = "translateX(-50%) translateY(" + window.scrollY / 5 + "px)"
            }
        };
    }, [])

    return (
        <div
            className="Scroller"
            style={{ opacity: 1, visibility: "inherit" }}>
            <svg width="17" height="10" xmlns="http://www.w3.org/2000/svg" className="explore__icon">
                <path d="M8.5 9.444L17 0 8.613 2.952 0 0z" fill="#FFF" fillRule="evenodd"></path>
            </svg>
            {text}
        </div>
    )
}

export default Scroller