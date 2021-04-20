import React, { useEffect, useState } from 'react';

import Menu from './../../components/Menu/Menu';
import Logo from './../../components/Logo/Logo';
import Block from '../../components/Block/Block';
import Title from './../../components/Title/Title';
import Footer from './../../components/Footer/Footer';
import Header from './../../components/Header/Header';
import Isotope from './../../components/Isotope/Isotope';
import Paragraph from './../../components/Paragraph/Paragraph';
import Parallax from './../../components/Parallax/Parallax';

import titleLeTravail from './../../images/titles/le_travail.svg'
import titleMamaDesMarques from './../../images/titles/maman_des_marques.svg';
import titleLaFamille from './../../images/titles/la_famille.svg'

import arrowIcon from './../../images/icons/arrow.svg';

import paraBackground from './../../images/backgrounds/parallax_background.png';

import Carousel, { consts } from 'react-elastic-carousel';

import './Home.sass';

import ScrollReveal from 'scrollreveal';
import { useHistory } from 'react-router';

import arrowRight from './../../images/icons/arrow_right.png'
import arrowLeft from './../../images/icons/arrow_left.png';

// Placeholders
const textLongPlaceHolder = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea";

const Home = ({ projects, peoples }) => {

    const arrows = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <img src={arrowLeft} alt="Arrow" /> : <img src={arrowRight} alt="Arrow" />
    return (
        <button onClick={onClick} style={{ display: isEdge ? "none" : "block" }}>
            {pointer}
        </button>
    )
}

    const history = useHistory()

    const [menuState, setMenuState] = useState({ isOpen: false })
    const [showIsotope, setShowIsotope] = useState(false)

    const handleLinkClick = (position) => {
        console.log(position)
        if(document.querySelector('[scroll-ref="' + position + '"]')) {
            setMenuState({ iOpen: false })
            document.querySelector('[scroll-ref="' + position + '"]')
                .scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
        } else if(position === "work") {
            setShowIsotope(true)
            setTimeout(function () {
                setMenuState({ iOpen: false })
                document.querySelector('[scroll-ref="' + position + '"]')
                    .scrollIntoView({behavior: "smooth", block: "top", inline: "center"});

            }, 200)
        }
    }

    const handleSwitchClick = () => setMenuState({ isOpen: !menuState.isOpen })

    useEffect(() => {
        if(window.scrollY === 0) {
            var slideUp = {
                origin: 'bottom',
                delay: 200,
                easing: 'cubic-bezier(0.5, 0, 0, 1)',
                interval: 200,
                opacity: 0,
                scale: 0.8,
                afterReveal: function(el) {
                    el.style.transform = ""
                    el.style.transition = ""
                }
            };
            
            ScrollReveal().reveal('.Block .Block-caption, .Block > img', slideUp);
        }
    }, [])

    if(projects.length >= 1) {
        return (
            <main className="Home">
                <Menu
                    onLinkClick={handleLinkClick}
                    onSwitchClick={handleSwitchClick}
                    isOpen={menuState.isOpen}
                />
                <Logo color="blue" type="flying" />
                <Header
                    cover={{ url: "https://res.cloudinary.com/thoumar/video/upload/v1616334851/1_Farming_Simulator_19_Farming_and_furious_d598ade095.mp4" }}
                />
                <Title
                    scrollRef="josiane"
                    alt="Maman des marques"
                    content={titleMamaDesMarques} />
                <Paragraph
                    text={textLongPlaceHolder} />
                <Title
                    alt="Maman des marques"
                    text={"Le travail"}
                    content={titleLeTravail} /> 
                {
                    projects.map((project, index) =>
                        <Block
                            key={index}
                            data={project}
                            handleClick={() => { history.push(project.path) }} />
                    )
                }
                <div className="Cta" onClick={() => setShowIsotope(!showIsotope)}>
                    <img className={"Cta__Arrow Cta__Arrow--left" + (showIsotope ? " reverse" : "")} src={arrowIcon} alt="Arrow icon" />
                    <div className="Cta__Text">TOUT LE<br />TRAVAIL</div>
                    <img className={"Cta__Arrow Cta__Arrow--right" + (showIsotope ? " reverse" : "")} src={arrowIcon} alt="Arrow icon" />
                </div>
                {
                    showIsotope ? <Isotope scrollRef="work" projects={projects} /> : null
                }
                <Title
                    alt="La Famille"
                    text={"Le famille"}
                    content={titleLaFamille} /> 

                <div className="Family" scroll-ref="family">
                    <div className="Family__Text">
                        <h4>AGENCE D’IDÉE</h4>
                        <p>
                            Ni une agence de publicité. 
                            Ni une agence digitale. 
                            Ni une agence intégrée.
                            Une agence. Avec plein d’idées dedans.
                            Avant même d’avoir des idées pour les marques, josiane pense qu’il faut d’abord
                            avoir une certaine idée de la société dans laquelle on veut les faire émerger.
                            josiane s’engage à faire émerger 
                            des idées qui construisent les marques 
                            et la société et veut inscrire 
                            de nouveaux symboles porteurs 
                            de progrès social dans la culture publicitaire.
                        </p>
                    </div>
                    <div className="Family__Carousel">
                        <Carousel
                            itemsToShow={1}
                            pagination={false}
                            outerSpacing={5}
                            renderArrow={arrows}>
                            {
                                peoples.map((person, key) => {
                                    return (
                                        <div className="Person" key={key}>
                                            <img className="Person__Picture" src={person.profilePicture.url} alt="Parallax Background" />
                                            <div className="Personn__Text">
                                                <h4 className="Person__Name">{person.name}</h4>
                                                <p className="Person__Description">{person.description}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </div>
                
                <Logo color="cousines" type="static" />
                
                <Parallax
                    title={"FAMILLE D’EXPERTS"}
                    paragraph={"Les Cousines de Josiane, c’est une famille de 100 experts indépendants aux parcours particulièrement riches et variés. Seules ou à plusieurs, elles répondent aux nouveaux enjeux du marketing et de la communication auxquels les entreprises font face aujourd’hui."}
                    background={paraBackground} />

				<Footer scrollRef="contact" />
            </main>
        )
    } else {
        return <div>Loading ...</div>
    }
}

export default Home