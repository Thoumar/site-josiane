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
            {text}
        </div>
    )
}

export default Scroller