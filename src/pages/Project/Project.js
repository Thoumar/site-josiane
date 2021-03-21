import './Project.sass';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import ReactPlayer from 'react-player';
import Carousel, { consts } from 'react-elastic-carousel';
import React, { useEffect } from 'react';

import logoBlue from './../../images/logos/logo_blue.png';

import { useLocation } from 'react-router-dom';

import Footer from './../../components/Footer/Footer';
import Header from './../../components/Header/Header';
import Menu from './../../components/Menu/Menu';

import arrowRight from './../../images/icons/arrow_right.png'
import arrowLeft from './../../images/icons/arrow_left.png';

const getComponent = (component, componentKey) => {


    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <img src={arrowLeft} alt="Arrow" /> : <img src={arrowRight} alt="Arrow" />
        return (
            <button onClick={onClick} disabled={isEdge}>
                {pointer}
            </button>
        )
    }

    switch(component.__component) {
        case "project-page.carousel":
            return (
                <div className="Component__Carousel">
                    <Carousel
                        itemsToShow={3}
                        pagination={false}
                        outerSpacing={5}
                        renderArrow={myArrow}>
                        {component.Pictures.map((pic, key) => <div><img className="Carousel__Image" key={componentKey + key} src={pic.url} alt="carousel item" /></div>)}
                    </Carousel>
                </div>
            )
        case "project-page.video":
            return (
                <div className="Component__Video">
                    <ReactPlayer
                        width="100%"
                        height="100%"
                        playing={true}
                        loop
                        muted={true}
                        key={componentKey^componentKey}
                        url={component.Source.url} />
                </div>
            )
        case "project-page.single-carousel":
            return (
                <div className="Component__Single-carousel">
                    <Carousel
                        itemsToShow={1}
                        pagination={false}
                        outerSpacing={5}
                        renderArrow={myArrow}>
                        {component.Pictures.map((pic, key) => <img className="Carousel__Singe-Image" key={componentKey + key} src={pic.url} alt="carousel item" />)}
                    </Carousel>
                </div>
            )
        default:
            return null;
    }
}

const Project = ({ project, goToPage }) => {

	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	
    const { cover, title, subtitle, long_description, content } = project

    return (
        <div className="Project">
            <Menu handleClick={() => goToPage()} />
            <img className="Logo_Blue" src={logoBlue} onClick={() => { goToPage() }} alt="Josiane Logo" />
            <Header cover={cover} title={title} subtitle={subtitle} />

            <div className="Project__Labels">
                <div className="Project__Label">AWARD</div>
                <div className="Project__Label">RP | eRP</div>
            </div>

            <div className="Project__Description" dangerouslySetInnerHTML={{__html: long_description}}>
            </div>

            {
                content
                    ? content.map((component, key) =>  getComponent(component, key))
                    : null
                
            }
            <Footer scrollRef="contact" />
        </div>
    )
}

export default Project