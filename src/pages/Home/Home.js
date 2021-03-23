import React, { useEffect } from 'react'

import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import Menu from './../../components/Menu/Menu';
import Title from './../../components/Title/Title';
import Paragraph from './../../components/Paragraph/Paragraph';
import Block from '../../components/Block/Block';
import Parallax from '../../components/Parallax/Parallax';

import './Home.sass'

import ScrollReveal from 'scrollreveal'

// Placeholders
const textLongPlaceHolder = "Yeah, lots of people did. Stop! Don't shoot fire stick in space canoe! Cause explosive decompression! Oh, I always feared he might run off like this. Why, why, why didn't I break his legs? Goodbye, friends. I never thought I'd die like this. But I always really hoped.";

const Home = ({ projects, goToPage }) => {

    const scrollToPosition = (position) => {
        if(document.querySelector('[scroll-ref="' + position + '"]')) {
            document.querySelector('[scroll-ref="' + position + '"]')
                .scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
        }
    }

    useEffect(() => {
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
    }, [])

    if(projects.length >= 1) {
        return (
            <main className="Home">
                <Menu handleClick={scrollToPosition} />
                <Header subtitle={"Agence d’idées"}  cover={{ url: "https://res.cloudinary.com/thoumar/video/upload/v1616334851/1_Farming_Simulator_19_Farming_and_furious_d598ade095.mp4" }} />
                <Title
                    scrollRef="josiane"
                    text={"La maman des marques"} />
                <Paragraph
                    text={textLongPlaceHolder} />
                <Title
                    scrollRef="work"
                    text={"Le travail"} /> 
                { projects.map((project, index) => {
                    if(index === 3) {
                        return [
                            <Block key={index} data={project} handleClick={() => { goToPage(project) }} />,
                            <Parallax
                                key={index + "p"}
                                scrollRef="family"
                                title={"La Famille"}
                                paragraph={textLongPlaceHolder}
                                background="https://images.unsplash.com/photo-1612446350755-6dc705c693d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                            ]
                    } else if(index === 11) {
                        return [
                            <Block key={index} data={project} handleClick={() => { goToPage(project) }} />,
                            <Parallax
                                key={index + "p"}
                                scrollRef="cousins"
                                title={"Les cousines"}
                                paragraph={textLongPlaceHolder}
                                background="https://images.unsplash.com/photo-1612446350755-6dc705c693d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                        ]
                    } else {
                        return <Block key={index} data={project} handleClick={() => { goToPage(project) }} />
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