import "./Project.sass";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Carousel, { consts } from "react-elastic-carousel";
import React, { useEffect, useState, useRef } from "react";

import logoBlue from "./../../images/logos/logo_blue.svg";

import { useLocation, useHistory } from "react-router-dom";

import Footer from "./../../components/Footer/Footer";
import Header from "./../../components/Header/Header";
import Title from "./../../components/Title/Title";
import Menu from "./../../components/Menu/Menu";

import arrowRight from "./../../images/icons/arrow_right.svg";
import arrowLeft from "./../../images/icons/arrow_left.svg";
import Video from "../../components/Video/Video";

const arrows = ({ type, onClick, isEdge }) => {
	const pointer = type === consts.PREV ? <img src={arrowLeft} alt="Arrow" /> : <img src={arrowRight} alt="Arrow" />;
	return (
		<button onClick={onClick} style={{ display: isEdge ? "none" : "block" }}>
			{pointer}
		</button>
	);
};

const Picture = ({ className, url }) => (
	<div>
		<img className={className} src={url} alt="carousel item" />
	</div>
);

const ProjectCarousel = ({ data }) => (
	<div className={"Component__Carousel  Carousel__Size-" + data.itemsToShow}>
		{data.title && data.description ? (
			<div className="Component__Carousel-caption">
				<h4>{data.title}</h4>
				<p>{data.description}</p>
			</div>
		) : null}
		<Carousel itemsToShow={window.innerWidth > 768 ? data.itemsToShow || 3 : 1} pagination={false} outerSpacing={5} renderArrow={arrows}>
			{data.Pictures.map((pic, key) => (
				<Picture key={key} className={"Carousel__Image"} url={pic.url} />
			))}
		</Carousel>
	</div>
);

const ProjectVideo = ({ data }) => {
	return (
		<div className={"Component__Video" + (data.borders ? " with-borders" : "") + (data.shadows ? " with-shadows" : "")}>
			{data.title && data.description ? (
				<div className="Component__Video-caption">
					<h4>{data.title}</h4>
					<p>{data.description}</p>
				</div>
			) : null}
			<Video source={data.Source.url} controls />
		</div>
	);
};

const ProjectImage = ({ data }) => {
	return (
		<div className="Component__Image">
			{data.title && data.description ? (
				<div className="Component__Image-caption">
					<h4>{data.title}</h4>
					<p>{data.description}</p>
				</div>
			) : null}
			<img src={data.Image.url} alt="Project illustration" />
		</div>
	);
};

const getComponent = (component, componentKey) => {
	switch (component.__component) {
		case "project-page.carousel":
			return <ProjectCarousel data={component} key={"carousel" + componentKey} />;
		case "project-page.video":
			return component.Source ? <ProjectVideo data={component} key={"video" + componentKey} /> : null;
		case "project-page.image":
			return component.Image.url ? <ProjectImage data={component} key={"carousel-image" + componentKey} /> : null;
		default:
			return null;
	}
};

const Project = ({ project, others }) => {
	const history = useHistory();
	const logoJosianeRef = useRef(null);

	const { pathname } = useLocation();
	const [menuState, setMenuState] = useState({ isOpen: false });

	useEffect(() => {
		window.scrollTo(0, 0);

		window.onscroll = () => {
			if (window?.pageYOffset > logoJosianeRef?.current?.offsetTop) {
				logoJosianeRef.current.classList.add("flying");
			} else {
				logoJosianeRef.current.classList.remove("flying");
			}
		};
	}, [pathname]);

	const { cover, title, subtitle, long_description, Content } = project;

	const handleLinkClick = () => {
		setMenuState({ isOpen: false });
		history.push("/");
	};

	const handleSwitchClick = () => setMenuState({ isOpen: !menuState.isOpen });
	return (
		<div className="Project">
			<Menu onLinkClick={handleLinkClick} onSwitchClick={handleSwitchClick} isOpen={menuState.isOpen} />

			<div className="Logo" ref={logoJosianeRef}>
				<img className="Logo__Picture Logo__Josiane" src={logoBlue} onClick={() => history.push("/")} alt="Josiane Logo" />
			</div>
			<Header cover={cover} title={title} subtitle={subtitle} />

			<div className="Project__Description" dangerouslySetInnerHTML={{ __html: long_description }}></div>

			{Content ? Content.map((component, key) => getComponent(component, key)) : null}

			<Title text="Suggestions" customStyle={{ marginBottom: "5rem" }} />

			<div className="Project__Suggestions">
				{others.map((item, k) => {
					switch (item.isotope_cover.ext) {
						case ".png":
							return (
								<div
									key={k}
									className="Suggestions__Item"
									onClick={() => {
										history.push(item.path);
									}}
								>
									<div>
										<img src={item.isotope_cover.url} alt="Suggestion project" />
										<div className="Suggestions__Description">
											<span>{item.title}</span>
											<span>{item.subtitle}</span>
										</div>
									</div>
								</div>
							);

						case ".jpg":
							return (
								<div
									key={k}
									className="Suggestions__Item"
									onClick={() => {
										history.push(item.path);
									}}
								>
									<div>
										<img src={item.isotope_cover.url} alt="Suggestion project" />
										<div className="Suggestions__Description">
											<span>{item.title}</span>
											<span>{item.subtitle}</span>
										</div>
									</div>
								</div>
							);
						case ".mp4":
							return (
								<div
									key={k}
									className="Suggestions__Item"
									onClick={() => {
										history.push(item.path);
									}}
								>
									<div>
										<Video source={item.isotope_cover.url} />
										<div className="Suggestions__Description">
											<span>{item.title}</span>
											<span>{item.subtitle}</span>
										</div>
									</div>
								</div>
							);
						default:
							return null;
					}
				})}
			</div>
			<Footer scrollRef="contact" />
		</div>
	);
};

export default Project;
