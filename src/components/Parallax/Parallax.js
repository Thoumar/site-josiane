import { useEffect, useRef } from 'react';
import './Parallax.sass';

const Parallax = ({ scrollRef, title, htmlText, background }) => {

    const bgParallax = useRef(null);

    useEffect(() => {
        // window.addEventListener('scroll', function(){
        //     const parallaxContainer = bgParallax.current
        //     if (parallaxContainer) {
        //         parallaxContainer.style.backgroundPositionY = (window.scrollY * 0.7) + "px"; 
        //     }
        // });
    }, [])


    return (
        <section className="Parallax" ref={bgParallax} style={{ backgroundImage: "url(" + background + ")" }}>
            <h2 className="Parallax__Title">{title}</h2>
            <p className="Parallax__Paragraph" dangerouslySetInnerHTML={{ __html: htmlText}}></p>
        </section>
    )
};

export default Parallax;