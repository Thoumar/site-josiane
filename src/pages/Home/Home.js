import React, { useEffect, useState, useRef } from "react";

import Menu from "./../../components/Menu/Menu";
import Block from "../../components/Block/Block";
import Title from "./../../components/Title/Title";
import Footer from "./../../components/Footer/Footer";
import Header from "./../../components/Header/Header";
import Isotope from "./../../components/Isotope/Isotope";
import Paragraph from "./../../components/Paragraph/Paragraph";
import Parallax from "./../../components/Parallax/Parallax";

import titleLeTravail from "./../../images/titles/le_travail.svg";

import logoBlue from "./../../images/logos/logo_blue.svg";
import logoCousines from "./../../images/logos/logo_cousines.svg";

import Carousel, { consts } from "react-elastic-carousel";

import "./Home.sass";

import ScrollReveal from "scrollreveal";
import { useHistory } from "react-router";

import arrowRight from "./../../images/icons/arrow_right.png";
import arrowLeft from "./../../images/icons/arrow_left.png";

const Home = ({ projects, peoples }) => {
	const logoJosianeRef = useRef(null);
	const logoCousinesRef = useRef(null);

	window.onscroll = () => {
		if (window.pageYOffset > logoJosianeRef.current.offsetTop) {
			logoJosianeRef.current.classList.add("flying");
		} else {
			logoJosianeRef.current.classList.remove("flying");
		}
		if (window.pageYOffset > logoCousinesRef.current.offsetTop) {
			logoCousinesRef.current.classList.add("flying");
		} else {
			logoCousinesRef.current.classList.remove("flying");
		}
	};

	const arrows = ({ type, onClick, isEdge }) => {
		const pointer =
			type === consts.PREV ? (
				<img src={arrowLeft} alt="Arrow" />
			) : (
				<img src={arrowRight} alt="Arrow" />
			);
		return (
			<button onClick={onClick} style={{ display: isEdge ? "none" : "block" }}>
				{pointer}
			</button>
		);
	};

	const history = useHistory();

	const [menuState, setMenuState] = useState({ isOpen: false });
	const [showIsotope, setShowIsotope] = useState(false);

	const handleLinkClick = (position) => {
		if (document.querySelector('[scroll-ref="' + position + '"]')) {
			setMenuState({ iOpen: false });
			document.querySelector('[scroll-ref="' + position + '"]').scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "center",
			});
		} else if (position === "work") {
			setShowIsotope(true);
			setTimeout(function () {
				setMenuState({ iOpen: false });
				document
					.querySelector('[scroll-ref="' + position + '"]')
					.scrollIntoView({
						behavior: "smooth",
						block: "start",
						inline: "center",
					});
			}, 200);
		}
	};

	const handleSwitchClick = () => setMenuState({ isOpen: !menuState.isOpen });

	useEffect(() => {
		if (window.scrollY === 0) {
			var slideUp = {
				origin: "bottom",
				delay: 200,
				easing: "cubic-bezier(0.5, 0, 0, 1)",
				interval: 200,
				opacity: 0,
				scale: 0.8,
				afterReveal: function (el) {
					el.style.transform = "";
					el.style.transition = "";
				},
			};

			ScrollReveal().reveal(".Block .Block-caption, .Block > img", slideUp);
		}
	}, []);

	if (projects.length >= 1) {
		return (
			<main className="Home">
				<Menu
					onLinkClick={handleLinkClick}
					onSwitchClick={handleSwitchClick}
					isOpen={menuState.isOpen}
				/>
				<Header
					cover={{
						url:
							"https://res.cloudinary.com/thoumar/video/upload/v1616334851/1_Farming_Simulator_19_Farming_and_furious_d598ade095.mp4",
					}}
				/>
				<div className="Logo" ref={logoJosianeRef}>
					<img
						className="Logo__Picture Logo__Josiane"
						src={logoBlue}
						onClick={() => history.push("/")}
						alt="Josiane Logo"
					/>
				</div>
				<Title
					scrollRef="josiane"
					text="la maman des marques"
					customStyle={{ marginTop: "12rem" }}
				/>
				<Paragraph
					htmlText={
						"Josiane redonne du <i>bon sens</i>.<br />Aux marques en quête d’idées pour grandir durablement.<br />A la société en recherche de valeurs et d’actes porteurs de progrès.<br />Au modèle des agences tenu de se réinventer. <br />C’est peut-être pour cela que Josiane a été élue <br />agence challenger de l’année."
					}
				/>
				<Title
					alt="Maman des marques"
					text={"le travail"}
					content={titleLeTravail}
				/>
				{projects.map((project, index) => (
					<Block
						key={index}
						data={project}
						handleClick={() => {
							history.push(project.path);
						}}
					/>
				))}
				<div className="Cta" onClick={() => setShowIsotope(!showIsotope)}>
					<div className="Cta__Text">TOUT LE TRAVAIL</div>
				</div>
				{showIsotope ? <Isotope scrollRef="work" projects={projects} /> : null}
				<Title alt="La Famille" text={"la famille"} />
				<div className="Family" scroll-ref="family">
					<div className="Family__Text">
						<h4>AGENCE D’IDÉE</h4>
						<p>
							Comme nos clients, nos collaborateurs n’ont pas choisi Josiane par
							hasard. Passés par de grandes entreprises et agences, ils
							souhaitent revenir à l’essentiel pour retrouver du bon sens, du
							lien, et le goût des idées.
							<br />
							<br />
							C’est ça Josiane : une famille pour grandir et faire grandir.
						</p>
					</div>
					<div className="Family__Carousel">
						<Carousel
							itemsToShow={1}
							outerSpacing={5}
							renderArrow={arrows}
							pagination={false}
						>
							{peoples.map((person, key) => {
								return (
									<div className="Person" key={key}>
										<img
											className="Person__Picture"
											src={person.profilePicture.url}
											alt="Parallax Background"
										/>
										<div className="Person__Text">
											<h4 className="Person__Name">{person.name}</h4>
											<span className="Person__Position">
												{person.position}
											</span>
											<p className="Person__Description">
												{person.description}
											</p>
										</div>
									</div>
								);
							})}
						</Carousel>
					</div>
				</div>
				<div className="Logo" ref={logoCousinesRef}>
					<img
						className="Logo__Picture Logo__Cousines"
						src={logoCousines}
						onClick={() => history.push("/")}
						alt="Cousines Logo"
					/>
				</div>
				<Title
					alt="Les cousines"
					text="les cousines"
					customStyle={{
						marginTop: "25rem",
						marginBottom: "8rem",
					}}
				/>
				<Parallax
					title="FAMILLE D’EXPERTS"
					htmlText="Les Cousines entrechoquent les cultures grâce à 100 personnalités – et pas une de plus – reconnues pour leurs expériences et expertises qui répondent aux nouveaux enjeux de transformation des entreprises :  - Stratégie d’entreprise (Business model, Corporate, RSE) - Stratégie opérationnelle (Data & transformation digitale, Marketing 360°, Communications spécialisées) - Conduite du changement (Coaching, Formation, Transformation des organisations)."
				/>
				<Footer scrollRef="contact" />
			</main>
		);
	} else {
		return <div>Loading ...</div>;
	}
};

export default Home;
