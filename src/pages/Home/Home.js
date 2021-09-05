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
import Agence from "./../../components/Agence/Agence";

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

const Home = ({ homeData, projects, peoples }) => {
	const familyCarouselRef = useRef(null);
	const agencyRef = useRef(null);
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

	const logoScrollListenerHandler = (e) => {
		if (window.pageYOffset > logoJosianeRef.current.offsetTop) {
			logoJosianeRef.current.classList.add("flying");
		} else {
			logoJosianeRef.current.classList.remove("flying");
		}

		if (window.pageYOffset > logoCousinesRef.current.offsetTop && window.pageYOffset < logoCousinesRef.current.offsetTop + 700) {
			logoCousinesRef.current.classList.add("flying");
		} else {
			logoCousinesRef.current.classList.remove("flying");
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", logoScrollListenerHandler);
		return () => window.removeEventListener("scroll", logoScrollListenerHandler);
	}, []);

	const arrows = ({ type, onClick }) => {
		const pointer = type === consts.PREV ? <img src={arrowLeft} alt="Arrow" /> : <img src={arrowRight} alt="Arrow" />;
		return <button onClick={onClick}>{pointer}</button>;
	};

	const onNextStart = (currentItem, nextItem) => {
		if (currentItem.index === nextItem.index) {
			familyCarouselRef.current.goTo(0);
		}
	};
	const onPrevStart = (currentItem, nextItem) => {
		if (currentItem.index === nextItem.index) {
			familyCarouselRef.current.goTo(peoples.length);
		}
	};

	if (projects.length >= 1) {
		return (
			<main className="Home">
				<Menu onLinkClick={handleLinkClick} onSwitchClick={handleSwitchClick} isOpen={menuState.isOpen} />

				<div className="Logo" ref={logoJosianeRef} onClick={() => {
					const el = document.scrollingElement || document.documentElement
					el.scrollTop = 0
				}}>
					<img className="Logo__Picture Logo__Josiane" src={logoBlue} onClick={() => history.push("/")} alt="Josiane Logo" />
				</div>

				<Header
					cover={{
						url: "https://res.cloudinary.com/thoumar/video/upload/q_auto/v1622732392/SHOWREEL_JOSIANE_2021_X_zf3szk.mp4",
					}}
				/>

				<Title scrollRef="josiane" text="la maman des marques" customStyle={{ marginTop: "12rem" }} />

				<Paragraph htmlText={homeData.LaMamanDesMarques} />

				<Title alt="Maman des marques" text={"le travail"} content={titleLeTravail} />

				{projects.map((project, index) => (
					<Block key={index} history={history} dataKey={index} data={project} handleClick={() => history.push(project.path)} />
				))}

				<Button text="TOUT LE TRAVAIL" click={() => setShowIsotope(!showIsotope)} />

				{showIsotope ? <Isotope scrollRef="work" projects={projects} /> : null}

				<Title alt="La Famille" text={"la famille"} scrollRef="family" customStyle={{ paddingTop: "6rem" }} />

				<div className="Family">
					<div className="Family__Text">
						<h4>Un modèle hybride</h4>
						<p>{homeData.LaFamille}</p>
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
										<img className="Person__Picture" src={person.profilePicture.url} alt="Cousines Background" />
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

				<div className="Logo" ref={logoCousinesRef} onClick={() => {
					const el = document.scrollingElement || document.documentElement
					el.scrollTop = 0
				}}>
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

				<Cousines background={bgCousines} title="FAMILLE D’EXPERTS" htmlText={homeData.LesCousines} />

				<Title
					alt="vie d'agence"
					text="Vie d'agence"
					scrollRef="agence"
					customStyle={{
						marginTop: "8rem",
						marginBottom: "5rem",
					}}
				/>

				{homeData.ImagesAgence.length ? <Agence ref={agencyRef} pictures={homeData.ImagesAgence} /> : null}

				<Footer scrollRef="contact" />
			</main>
		);
	} else {
		return <div>Loading ...</div>;
	}
};

export default Home;
