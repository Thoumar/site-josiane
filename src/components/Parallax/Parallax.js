import { useEffect, useRef } from 'react';
import './Parallax.sass';

const Parallax = ({ scrollRef, title, paragraph, background }) => {

    console.log(background)
    
    const bgParallax = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', function(){
            const parallaxContainer = bgParallax.current
            if (parallaxContainer) {
                parallaxContainer.style.backgroundPositionY = (window.scrollY * 0.5) + "px"; 
            }
        });
    }, [])


    return (
        <section  scroll-ref={scrollRef} className="Parallax" ref={bgParallax} style={{ background: "url(" + window.location.host + background + ")" }}>
            <h2 className="Parallax__Title">{title}</h2>
            <p className="Parallax__Paragraph">{paragraph}</p>
        </section>
    )
};

export default Parallax;