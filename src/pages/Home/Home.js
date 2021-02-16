import React, { useState, useEffect } from 'react'

import Header from './../../components/Header/Header';
import Menu from './../../components/Menu/Menu';
import Title from './../../components/Title/Title';
import Paragraph from './../../components/Paragraph/Paragraph';
import Project from './../../components/Project/Project';
import Parallax from '../../components/Parallax/Parallax';

import './Home.sass'

// import projects from './../../projects.json'

import { useHistory } from "react-router-dom";

// Placeholders
const textLongPlaceHolder = "Yeah, lots of people did. Stop! Don't shoot fire stick in space canoe! Cause explosive decompression! Oh, I always feared he might run off like this. Why, why, why didn't I break his legs? Goodbye, friends. I never thought I'd die like this. But I always really hoped.";

const Home = () => {

    const history = useHistory();
    const [projects, setProjects] = useState([]);

    const handleClick = (path) => history.push("/" + path);

    const scrollToPosition = (position) => {
        if(document.querySelector('[scroll-ref="' + position + '"]')) {
            document.querySelector('[scroll-ref="' + position + '"]')
                .scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            setTimeout(() => {  }, 500)
        }
    }

    useEffect(() => {
        fetch("http://localhost:1337/projects").then((response) => {
            response.json().then((jsonResponse) => {
                setProjects(jsonResponse)
            })
        })
    }, [])


    if(projects.length >= 1) {
        return (
            <main className="Home">
                <Menu handleScroll={scrollToPosition} />
                <Header />
                <Title
                    scrollRef="josiane"
                    text={"La maman des marques"} />
                <Paragraph
                    text={textLongPlaceHolder} />
                <Title
                    scrollRef="work"
                    text={"Le travail"} />
                { projects.map((project, index) => {
                    if(index === 4) {
                        return [
                                <Parallax
                                    key={index}
                                    scrollRef="family"
                                    title={"La Famille"}
                                    paragraph={textLongPlaceHolder}
                                    background="https://images.unsplash.com/photo-1612446350755-6dc705c693d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                                />,
                                <Project key={index} data={project} handleClick={handleClick} />
                            ]
                    } else if(index === 13) {
                        return [
                            <Parallax
                                key={index}
                                scrollRef="cousins"
                                title={"Les cousines"}
                                paragraph={textLongPlaceHolder}
                                background="https://images.unsplash.com/photo-1612446350755-6dc705c693d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                            />,
                            <Project key={index} data={project} handleClick={handleClick} />
                        ]
                    } else {
                        return <Project key={index} data={project} handleClick={handleClick} />
                    }
                }) }
            </main>
        )
    } else {
        return <div>Loading ...</div>
    }
}

export default Home