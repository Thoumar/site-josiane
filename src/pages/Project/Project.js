import './Project.sass';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Carousel, { consts } from 'react-elastic-carousel';
import React, { useEffect, useState } from 'react';

import Logo from './../../components/Logo/Logo';

import { useLocation, useHistory } from 'react-router-dom';

import Footer from './../../components/Footer/Footer';
import Header from './../../components/Header/Header';
import Menu from './../../components/Menu/Menu';

import arrowRight from './../../images/icons/arrow_right.png'
import arrowLeft from './../../images/icons/arrow_left.png';
import Video from '../../components/Video/Video';

const arrows = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <img src={arrowLeft} alt="Arrow" /> : <img src={arrowRight} alt="Arrow" />
    return (
        <button onClick={onClick} style={{ display: isEdge ? "none" : "block" }}>
            {pointer}
        </button>
    )
}

const Picture = ({ className, url }) => <div><img className={className} src={url} alt="carousel item" /></div>

const ProjectCarousel = ({ data }) => (
    <div className="Component__Carousel">
            {
                data.title && data.description
                    ? (
                        <div className="Component__Carousel-caption">
                            <h4>{data.title}</h4>
                            <p>{data.description}</p>
                        </div>
                    ) : null
            }
        <Carousel
            itemsToShow={window.innerWidth > 768 ? (data.itemsToShow || 3) : 1 }
            pagination={false}
            outerSpacing={5}
            renderArrow={arrows}>
            {
                data.Pictures.map((pic, key) =>
                    <Picture
                        key={key}
                        className={"Carousel__Image"}
                        url={pic.url}
                    />
                )
            }
        </Carousel>
    </div>
)

const ProjectVideo = ({ data }) => {
    return (
        <div className="Component__Video">
            {
                data.title && data.description
                    ? (
                        <div className="Component__Video-caption">
                            <h4>{data.title}</h4>
                            <p>{data.description}</p>
                        </div>
                    ) : null
            }
            <Video autoPlay={false} source={data.Source.url} />
        </div>
    )
}

const ProjectSingleCarousel = ({ data }) => (
    <div className="Component__Single-carousel">
        {
                data.title && data.description
                    ? (

                        <div className="Component__Single-carousel-caption">
                            <h4>{data.title}</h4>
                            <p>{data.description}</p>
                        </div>
                    ) : null
            }
        <Carousel
            itemsToShow={data.itemsToShow || 3}
            pagination={false}
            outerSpacing={5}
            renderArrow={arrows}>
            {data.Pictures.map((pic, key) =>
                <Picture
                    key={key}
                    className={"Carousel__Single-Image"}
                    url={pic.url}
                />)}
        </Carousel>
    </div>
)

const getComponent = (component, componentKey) => {
    switch(component.__component) {
        case "project-page.carousel":
            return <ProjectCarousel data={component} key={"carousel" + componentKey} />
        case "project-page.video":
            if(component.Source) {
                return <ProjectVideo data={component} key={"video" + componentKey}/>
            } else {
                return null
            }

        case "project-page.single-carousel":
            return <ProjectSingleCarousel data={component} key={"carousel-single" + componentKey} />
        default:
            return null;
    }
}

const Project = ({ project, others }) => {
    const history  = useHistory()

	const { pathname } = useLocation();
    const [menuState, setMenuState] = useState({ isOpen: false })

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	
    const { cover, title, subtitle, long_description, content } = project

    const handleLinkClick = (position) => {
        setMenuState({ isOpen: false })
        history.push("/")
    }

    const handleSwitchClick = () => setMenuState({ isOpen: !menuState.isOpen })

    return (
        <div className="Project">
            <Menu
                onLinkClick={handleLinkClick}
                onSwitchClick={handleSwitchClick}
                isOpen={menuState.isOpen}
            />

            <Logo
                color="blue"
                type="sticky"
                isUnderHeader={false}
            />

            <Header
                cover={cover} title={title}
                subtitle={subtitle}
            />

            <div
                className="Project__Description"
                dangerouslySetInnerHTML={{__html: long_description}}>
            </div>

            {
                content ? content.map((component, key) =>  getComponent(component, key)) : null
            }

            <div className="Project__Suggestions">
                {
                    others.map((item, k) => {
                        return (
                            <div
                                key={k}
                                className="Suggestions__item"
                                onClick={() => { history.push(item.path) }}>
                                <div>
                                    <img src={item.isotope_cover.url} alt="Suggestion project" />
                                    <span>{ item.title }</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Footer scrollRef="contact" />
        </div>
    )
}

export default Project