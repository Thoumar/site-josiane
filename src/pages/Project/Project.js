import './Project.sass';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import ReactPlayer from 'react-player';
import Carousel, { consts } from 'react-elastic-carousel';
import React, { useEffect, useState } from 'react';

import logoBlue from './../../images/logos/logo_blue.png';
import { useLocation, useHistory } from 'react-router-dom';

import Footer from './../../components/Footer/Footer';
import Header from './../../components/Header/Header';
import Menu from './../../components/Menu/Menu';

import arrowRight from './../../images/icons/arrow_right.png'
import arrowLeft from './../../images/icons/arrow_left.png';
import soundOnIcon from './../../images/icons/sound_on.png';
import soundOffIcon from './../../images/icons/sound_off.png';
import fullscreenIcon from './../../images/icons/fullscreen.png';

const arrows = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <img src={arrowLeft} alt="Arrow" /> : <img src={arrowRight} alt="Arrow" />
    return (
        <button onClick={onClick} disabled={isEdge}>
            {pointer}
        </button>
    )
}

const Picture = ({ className, url }) => <div><img className={className} src={url} alt="carousel item" /></div>

const ProjectCarousel = ({ data }) => (
    <div className="Component__Carousel">
        <Carousel
            itemsToShow={window.innerWidth > 768 ? 3 : 1 }
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
    const [soundState, setSoundState] = useState(false);
    const [fullScreenState, setFullScreenState] = useState(false);
    
    const handleSetSoundState = () => setSoundState(!soundState)
    
    const handleSetFullScreenState = () => {
        setFullScreenState(!fullScreenState)
        if(!fullScreenState) {
            if (document.querySelector(".Component__Video").requestFullscreen) {
                document.querySelector(".Component__Video").requestFullscreen();
            } else if (document.querySelector(".Component__Video").webkitRequestFullscreen) {
                document.querySelector(".Component__Video").webkitRequestFullscreen();
            } else if (document.querySelector(".Component__Video").msRequestFullscreen) {
                document.querySelector(".Component__Video").msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    }
    
    const soundIconSrc = soundState ? soundOnIcon : soundOffIcon;

    return (
        <div className="Component__Video">
            <img className="Header__Button Header__Button--mute" src={soundIconSrc} alt={""} onClick={() => { handleSetSoundState() }} />
            <img className="Header__Button Header__Button--fullscreen" src={fullscreenIcon} alt={""} onClick={() => { handleSetFullScreenState() }} />
            <ReactPlayer
                width="100%"
                height="100%"
                playing={true}
                loop
                muted={!soundState}
                url={data.Source.url} />
        </div>
    )
}

const ProjectSingleCarousel = ({ data }) => (
    <div className="Component__Single-carousel">
        <Carousel
            itemsToShow={1}
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
            return <ProjectVideo data={component} key={"video" + componentKey}/>
        case "project-page.single-carousel":
            return <ProjectSingleCarousel data={component} key={"carousel-single" + componentKey} />
        default:
            return null;
    }
}

const Project = ({ project }) => {
    const history  = useHistory()

	const { pathname } = useLocation();
    const [menuState, setMenuState] = useState({ isOpen: false })

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	
    const { cover, title, subtitle, long_description, content } = project

    const handleLinkClick = (position) => {
        setMenuState({ isOpen: false })
        history.pushState("/")
    }

    const handleSwitchClick = () => setMenuState({ isOpen: !menuState.isOpen })

    return (
        <div className="Project">
            <Menu onLinkClick={handleLinkClick} onSwitchClick={handleSwitchClick} isOpen={menuState.isOpen} />
            <img
                className="Logo_Blue"
                src={logoBlue}
                onClick={() => history.push("/")}
                alt="Josiane Logo"
            />
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