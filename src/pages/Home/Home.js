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
import titleMamamDesMarques from './../../images/titles/maman_des_marques.svg';
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

                <Header
                    cover={{ url: "https://res.cloudinary.com/thoumar/video/upload/v1616334851/1_Farming_Simulator_19_Farming_and_furious_d598ade095.mp4" }}
                />

                <Logo color="blue" type="sticky" />
                
                <Title
                    scrollRef="josiane"
                    alt="Maman des marques"
                    content={titleMamamDesMarques} />
                <Paragraph
                    htmlText={"Josiane redonne du bon sens.<br />Aux marques en quête d’idées pour grandir durablement.<br />A la société en recherche de valeurs et d’actes porteurs de progrès.<br />Au modèle des agences tenu de se réinventer. <br />C’est peut-être pour cela que Josiane a été élue agence challenger de l’année."} />
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
                            Comme nos clients, nos collaborateurs n’ont pas choisi Josiane par hasard.
                            Passés par de grandes entreprises 
                            et agences, ils souhaitent revenir 
                            à l’essentiel pour retrouver du bon sens, du lien, et le goût des idées.<br /><br />

                            C’est ça Josiane : une famille pour grandir et faire grandir.
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
                                            <div className="Person__Text">
                                                <h4 className="Person__Name">{person.name}</h4>
                                                <span className="Person__Position">{person.position}</span>
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
                    htmlText={"Les Cousines entrechoquent les cultures grâce à 100 personnalités – et pas une de plus – reconnues pour leurs expériences et expertises qui répondent aux nouveaux enjeux de transformation des entreprises :  - Stratégie d’entreprise (Business model, Corporate, RSE) - Stratégie opérationnelle (Data & transformation digitale, Marketing 360°, Communications spécialisées) - Conduite du changement (Coaching, Formation, Transformation des organisations)."}
                    background={paraBackground} />

				<Footer scrollRef="contact" />
            </main>
        )
    } else {
        return <div>Loading ...</div>
    }
}

export default Home