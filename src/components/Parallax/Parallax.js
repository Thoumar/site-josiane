import { useEffect, useRef } from 'react';
import './Parallax.sass';

const Parallax = ({ title, paragraph, background }) => {
    
    const bgParallax = useRef(null);

    useEffect(() => {
        // window.addEventListener('scroll', function(){

        //     const parallaxContainer = bgParallax.current

        //     var scrollPosition = window.pageYOffset;
        //     var limit = parallaxContainer.offsetTop + parallaxContainer.offsetHeight;  
        //     if (scrollPosition > parallaxContainer.offsetTop && scrollPosition <= limit){
        //         parallaxContainer.style.backgroundPositionY = (50 - 10*scrollPosition/limit) + '%';   
        //     } else {
        //         parallaxContainer.style.backgroundPositionY = '50%';    
        //     }
        // });
    })

    return (
        <section className="Home__Parallax" ref={bgParallax}>
            <h2 className="Home__Parallax-title">{title}</h2>
            <p className="Home__Parallax-paragraph">{paragraph}</p>
        </section>
    )
};

export default Parallax;