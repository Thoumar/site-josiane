import React, { useEffect, useState } from 'react'

import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import Menu from './../../components/Menu/Menu';
import Title from './../../components/Title/Title';
import Paragraph from './../../components/Paragraph/Paragraph';
import Block from '../../components/Block/Block';
import Parallax from '../../components/Parallax/Parallax';

import './Home.sass'

import ScrollReveal from 'scrollreveal'
import { useHistory } from 'react-router';

// Placeholders
const textLongPlaceHolder = "Yeah, lots of people did. Stop! Don't shoot fire stick in space canoe! Cause explosive decompression! Oh, I always feared he might run off like this. Why, why, why didn't I break his legs? Goodbye, friends. I never thought I'd die like this. But I always really hoped.";

const Home = ({ projects, goToPage }) => {
    const history = useHistory()

    const [menuState, setMenuState] = useState({ isOpen: false })
    const [showAllProjects, setShowAllProjects] = useState(false)

    const handleLinkClick = (position) => {
        if(document.querySelector('[scroll-ref="' + position + '"]')) {
            setMenuState({ iOpen: false })
            document.querySelector('[scroll-ref="' + position + '"]')
                .scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
        } else {
            setMenuState({ isOpen: false })
        }
    }

    const handleSwitchClick = () => setMenuState({ isOpen: !menuState.isOpen })

    const handleShowMoreProjects = () => setShowAllProjects(true)

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
                <Menu onLinkClick={handleLinkClick} onSwitchClick={handleSwitchClick} isOpen={menuState.isOpen} />
                <Header subtitle={"Agence d’idées"}  cover={{ url: "https://res.cloudinary.com/thoumar/video/upload/v1616334851/1_Farming_Simulator_19_Farming_and_furious_d598ade095.mp4" }} />
                <Title
                    scrollRef="josiane"
                    text={"La maman des marques"} />
                <Paragraph
                    text={textLongPlaceHolder} />
                <Title
                    scrollRef="work"
                    text={"Le travail"} /> 
                {
                    projects.map((project, index) => {
                        if(index === 3) {
                            return [
                                <Block
                                    key={index}
                                    show={true}
                                    data={project}
                                    handleClick={() => { history.push(project.path) }} />,
                                <Parallax
                                    key={index + "p"}
                                    scrollRef="family"
                                    title={"La Famille"}
                                    paragraph={textLongPlaceHolder}
                                    background="https://images.unsplash.com/photo-1612446350755-6dc705c693d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                                ]
                        } else if(index === 11) {
                            return [
                                <Block key={index} show={true} data={project} handleClick={() => { history.push(project.path) }} />,
                                <Parallax
                                    key={index + "p"}
                                    scrollRef="cousins"
                                    title={"Les cousines"}
                                    paragraph={textLongPlaceHolder}
                                    background="https://images.unsplash.com/photo-1612446350755-6dc705c693d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                            ]
                        } else if(index === 12) {
                            return [
                                <button key={index+"btn"} className="LoadMore__Btn" style={{ display: showAllProjects ? "none" : "block" }}onClick={handleShowMoreProjects}>Load more</button>,
                                <Block show={showAllProjects} key={index} data={project} handleClick={() => { history.push(project.path) }} />
                            ]
                        } else if(index >= 13) {
                            return (<Block show={showAllProjects} key={index} data={project} handleClick={() => { history.push(project.path) }} />)
                        } else {
                            return <Block show={true} key={index} data={project} handleClick={() => { history.push(project.path) }} />
                        }
                    }) }
				<Footer scrollRef="contact" />
            </main>
        )
    } else {
        return <div>Loading ...</div>
    }
}

export default Home