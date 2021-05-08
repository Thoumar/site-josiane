import { useEffect, useRef } from "react";
import Button from "../Button/Button";

import "./Cousines.sass";

const Cousines = ({ scrollRef, title, htmlText, background }) => {
	const bgCousines = useRef(null);

	useEffect(() => {
		// window.addEventListener('scroll', function(){
		//     const CousinesContainer = bgCousines.current
		//     if (CousinesContainer) {
		//         CousinesContainer.style.backgroundPositionY = (window.scrollY * 0.7) + "px";
		//     }
		// });
	}, []);

	return (
		<section className="Cousines" ref={bgCousines} style={{ backgroundImage: "url(" + background + ")" }}>
			<h2 className="Cousines__Title">{title}</h2>
			<p className="Cousines__Paragraph" dangerouslySetInnerHTML={{ __html: htmlText }}></p>
			<Button text="Rencontrez les cousines" click={() => window.open("https://www.lescousinesde.josiane.fr/fr/")} />
		</section>
	);
};

export default Cousines;
