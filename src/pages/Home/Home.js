import React, { useEffect, useState, useRef } from "react";

import Block from "../../components/Block/Block";
import Title from "./../../components/Title/Title";
import Footer from "./../../components/Footer/Footer";
import Header from "./../../components/Header/Header";
import Isotope from "./../../components/Isotope/Isotope";
import Paragraph from "./../../components/Paragraph/Paragraph";
import Menu from "./../../components/Menu/Menu";
import Cousines from "../../components/Cousines/Cousines";
import Button from "./../../components/Button/Button";

import titleLeTravail from "./../../images/titles/le_travail.svg";

import logoBlue from "./../../images/logos/logo_blue.svg";
import logoLesCousines from "./../../images/logos/les_cousines.svg";
import logoEtCousines from "./../../images/logos/et_cousines.svg";

import bgCousines from "./../../images/backgrounds/cousines_background.jpg";

import { useHistory } from "react-router";

import Carousel, { consts } from "react-elastic-carousel";

import "./Home.sass";

import arrowRight from "./../../images/icons/arrow_right.svg";
import arrowLeft from "./../../images/icons/arrow_left.svg";

const Home = ({ projects, peoples }) => {
	const logoJosianeRef = useRef(null);
	const logoCousinesRef = useRef(null);
	const history = useHistory();

	const [menuState, setMenuState] = useState({ isOpen: false });
	const [showIsotope, setShowIsotope] = useState(false);

	const handleLinkClick = (position) => {
		history.push("/#" + position);
		checkScrollPosition();
	};

	const checkScrollPosition = () => {
		if (window.location.hash) {
			const target = window.location.hash.replace("#", "");
			if (target === "work") {
				setShowIsotope(true);
				setTimeout(function () {
					if (document.querySelector('[scroll-ref="' + target + '"]')) {
						document.querySelector('[scroll-ref="' + target + '"]').scrollIntoView({
							behavior: "smooth",
							block: "start",
							inline: "center",
						});
					}
				}, 300);
			} else {
				if (document.querySelector('[scroll-ref="' + target + '"]')) {
					document.querySelector('[scroll-ref="' + target + '"]').scrollIntoView({
						behavior: "smooth",
						block: "start",
						inline: "center",
					});
				}
			}
		}
	};

	const handleSwitchClick = () => setMenuState({ isOpen: !menuState.isOpen });

	useEffect(() => {
		checkScrollPosition();
		console.log("useEffect");
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
	}, []);

	const arrows = ({ type, onClick }) => {
		const pointer = type === consts.PREV ? <img src={arrowLeft} alt="Arrow" /> : <img src={arrowRight} alt="Arrow" />;
		return <button onClick={onClick}>{pointer}</button>;
	};

	const familyCarouselRef = useRef(null);

	const onNextStart = (currentItem, nextItem) => {
		if (currentItem.index === nextItem.index) {
			// We hit the last item, go to first item
			familyCarouselRef.current.goTo(0);
		}
	};
	const onPrevStart = (currentItem, nextItem) => {
		if (currentItem.index === nextItem.index) {
			// We hit the first item, go to last item
			familyCarouselRef.current.goTo(peoples.length);
		}
	};

	if (projects.length >= 1) {
		return (
			<main className="Home">
				<Menu onLinkClick={handleLinkClick} onSwitchClick={handleSwitchClick} isOpen={menuState.isOpen} />
				<Header
					cover={{
						url: "https://res.cloudinary.com/thoumar/video/upload/v1616334851/1_Farming_Simulator_19_Farming_and_furious_d598ade095.mp4",
					}}
				/>

				<div className="Logo" ref={logoJosianeRef}>
					<img className="Logo__Picture Logo__Josiane" src={logoBlue} onClick={() => history.push("/")} alt="Josiane Logo" />
				</div>

				<Title scrollRef="josiane" text="la maman des marques" customStyle={{ marginTop: "12rem" }} />

				<Paragraph
					htmlText={
						"Josiane redonne du <i>bon sens</i>.<br />Aux marques en quête d’idées pour grandir durablement.<br />A la société en recherche de valeurs et d’actes porteurs de progrès.<br />Au modèle des agences tenu de se réinventer. <br />C’est peut-être pour cela que Josiane a été élue <br />agence challenger de l’année."
					}
				/>

				<Title alt="Maman des marques" text={"le travail"} content={titleLeTravail} />

				{projects.map((project, index) => (
					<Block history={history} key={index} data={project} handleClick={() => history.push(project.path)} />
				))}

				<Button text="TOUT LE TRAVAIL" click={() => setShowIsotope(!showIsotope)} customStyle={{ marginBottom: "7rem" }} />

				{showIsotope ? <Isotope scrollRef="work" projects={projects} /> : null}

				<Title alt="La Famille" text={"la famille"} scrollRef="family" />
				<div className="Family">
					<div className="Family__Text">
						<h4>AGENCE D’IDÉE</h4>
						<p>
							Comme nos clients, nos collaborateurs n’ont pas choisi Josiane par hasard. Passés par de grandes entreprises et agences, ils souhaitent revenir à l’essentiel pour retrouver du bon sens,
							du lien, et le goût des idées.
							<br />
							<br />
							C’est ça Josiane : une famille pour grandir et faire grandir.
						</p>
					</div>
					<div className="Family__Carousel">
						<Carousel
							itemsToShow={1}
							outerSpacing={5}
							ref={familyCarouselRef}
							renderArrow={arrows}
							pagination={false}
							infinite={true}
							onPrevStart={onPrevStart}
							onNextStart={onNextStart}
							disableArrowsOnEnd={false}
						>
							{peoples.map((person, key) => {
								return (
									<div className="Person" key={key}>
										<img className="Person__Picture" src={person?.profilePicture?.url} alt="Cousines Background" />
										<div className="Person__Text">
											<h4 className="Person__Name">{person.name}</h4>
											<span className="Person__Position">{person.position}</span>
											<p className="Person__Description">{person.description}</p>
										</div>
									</div>
								);
							})}
						</Carousel>
					</div>
				</div>

				<div className="Logo" ref={logoCousinesRef}>
					<img className="Logo__Picture Logo__Et" src={logoEtCousines} onClick={() => history.push("/")} alt="Et Logo" />
					<img className="Logo__Picture Logo__Cousines" src={logoLesCousines} onClick={() => history.push("/")} alt="Cousines Logo" />
				</div>

				<Title
					alt="Les cousines"
					text="les cousines"
					scrollRef="cousins"
					customStyle={{
						marginTop: "25rem",
						marginBottom: "8rem",
					}}
				/>

				<Cousines
					background={bgCousines}
					title="FAMILLE D’EXPERTS"
					htmlText="<b>Les Cousines entrechoquent les cultures grâce <br />à 100 personnalités – et pas une de plus – reconnues <br>pour leurs expériences et expertises qui répondent aux <br>nouveaux enjeux de transformation des entreprises : </b><br>- Stratégie d’entreprise (Business model, Corporate, RSE) <br>- Stratégie opérationnelle (Data & transformation digitale, <br /> Marketing 360°, Communications spécialisées) <br>- Conduite du changement (Coaching, Formation, <br>Transformation des organisations)."
				/>
				<Footer scrollRef="contact" />
			</main>
		);
	} else {
		return <div>Loading ...</div>;
	}
};

export default Home;
