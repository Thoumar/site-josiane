import './Project.sass';

import Slider from "react-slick";
import ReactPlayer from 'react-player'
import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import Header from './../../components/Header/Header';
import Menu from './../../components/Menu/Menu';

import { useHistory } from "react-router-dom";

const getComponent = (component, componentKey) => {
    const multiCarouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const singleCarouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    switch(component.__component) {
        case "project-page.carousel":
            return (
                <div className="Component__Carousel">
                    <Slider {...multiCarouselSettings}>
                        {
                            component.Pictures.map((pic, key) => <img key={componentKey + key} src={pic.url} alt="carousel item" />)
                        }
                    </Slider>
                </div>
            )
        case "project-page.video":
            return (
                <div className="Component__Video">
                    <ReactPlayer url={component.Source} />
                </div>
            )
        case "project-page.single-carousel":
            return (
                <div className="Component__Single-carousel">
                <Slider {...singleCarouselSettings}>
                    {
                        component.Pictures.map((pic, key) => <img key={componentKey + key} src={pic.url} alt="carousel item" />)
                    }
                </Slider>
                </div>
            )
        default:
            return null;
    }
}

const Project = (data) => {

	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	
    const { cover, title, subtitle, content } = data.project

    const history = useHistory();

    const handleRedirection = () => {
        history.push("/");
    }

    return (
        <div className="Project">
            <Menu handleClick={handleRedirection} />
            <Header cover={cover} title={title} subtitle={subtitle} />

            <div className="Description">
                <p>
                Challenge
                Moderniser l’image de la marque et rajeunir sa cible de recrutement sans pour autant perdre sa cible business actuelle.

                Idée
                Des Femmes À Suivre.
                En se démarquant d’une mode conçue pour être éphémère, Un Jour Ailleurs suit et habille la femme dans la richesse de son quotidien de femme plurielle.

                Dispositif
                La nouvelle plateforme de marque a vu le jour lors de campagnes d’affichages  offline et digital ainsi qu’en presse et sur les réseaux sociaux.
                </p>
            </div>

            {
                content
                    ? content.map((component, key) =>  getComponent(component, key))
                    : null
                
            }

            <div className="Project__Labels">
                <div className="Project__Label">AWARD</div>
                <div className="Project__Label">RP | eRP</div>
            </div>


            <div className="Project__Carousel">
                
            </div>
        </div>
    )
}

export default Project