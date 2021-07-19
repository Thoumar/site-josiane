import "./Footer.sass";

import React from "react";

import Social from "./../../components/Social/Social";
import logoBlue from "./../../images/logos/logo_blue.svg";

const Footer = ({ scrollRef }) => {
	return (
		<footer scroll-ref={scrollRef} className="Footer">
			<img className="Footer__Title" src={logoBlue} onClick={() => (document.documentElement.scrollTop = 0)} alt="Josiane Logo" />

			<div className="Footer__Content">
				<div className="Footer__Side Footer__Side-top">
					<span>8 Rue Milton 75009 PARIS</span>
					<span>01 83 75 04 21</span>
					<span>06 76 53 87 71</span>
				</div>

				<div className="Footer__Side Footer__Side-bottom">
					<span>Candidatures/Prod : work@josiane.fr</span>
					<span>Brief/Rp : laurent@josiane.fr</span>
				</div>
			</div>
			<div className="Footer__Bottom">
				<Social />
			</div>
		</footer>
	);
};

export default Footer;
