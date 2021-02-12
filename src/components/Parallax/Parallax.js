import { useEffect, useRef } from 'react';
import './Parallax.sass';

const Parallax = ({ scrollRef, title, paragraph, background }) => {
    
    const bgParallax = useRef(null);

    // window.addEventListener('scroll', function(){
    //     console.log('scroll')

    //     const parallaxContainer = bgParallax.current

    //     var scrollPosition = window.pageYOffset;
    //     var limit = parallaxContainer.offsetTop + parallaxContainer.offsetHeight;  
    //     if (scrollPosition > parallaxContainer.offsetTop && scrollPosition <= limit){
    //         parallaxContainer.style.backgroundPositionY = (50 - 10*scrollPosition/limit) + '%';   
    //     } else {
    //         parallaxContainer.style.backgroundPositionY = '50%';    
    //     }
    // });
    

    return (
        <section  scroll-ref={scrollRef} className="Parallax" ref={bgParallax}>
            <h2 className="Parallax__Title">{title}</h2>
            <p className="Parallax__Paragraph">{paragraph}</p>
        </section>
    )
};

export default Parallax;