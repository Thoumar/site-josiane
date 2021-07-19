import Button from "../Button/Button";

import React from "react";

import "./Cousines.sass";

const Cousines = ({ title, htmlText, background }) => (
	<section className="Cousines" style={{ backgroundImage: "url(" + background + ")" }}>
		<h2 className="Cousines__Title">{title}</h2>
		<p className="Cousines__Paragraph" dangerouslySetInnerHTML={{ __html: htmlText }}></p>
		<Button text="Rencontrez les cousines" click={() => window.open("https://www.lescousinesde.josiane.fr/fr/")} />
	</section>
);

export default Cousines;
