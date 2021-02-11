import React from 'react'

import Header from './../../components/Header/Header';
import Title from './../../components/Title/Title';
import Paragraph from './../../components/Paragraph/Paragraph';
import Project from './../../components/Project/Project';
import Parallax from '../../components/Parallax/Parallax';

import './Home.sass'

import projects from './../../projects.json'

import { useHistory } from "react-router-dom";

// Placeholders
const textLongPlaceHolder = "Yeah, lots of people did. Stop! Don't shoot fire stick in space canoe! Cause explosive decompression! Oh, I always feared he might run off like this. Why, why, why didn't I break his legs? Goodbye, friends. I never thought I'd die like this. But I always really hoped.";

const Home = () => {
    
    const history = useHistory();

    const handleClick = (path) => {
        history.push("/" + path);
        console.log("test")
    }

    return (
        <main className="Home">
            <Header />
            <Title text={"La maman des marques"} />
            <Paragraph text={textLongPlaceHolder} />
            <Title text={"Le travail"} />
            <Project data={projects[0]} handleClick={handleClick} />
            <Project data={projects[1]} handleClick={handleClick} />
            <Project data={projects[2]} handleClick={handleClick} />
            <Project data={projects[3]} handleClick={handleClick} />
            <Parallax
                title={"La Famille"}
                paragraph={textLongPlaceHolder}
                background="https://images.unsplash.com/photo-1612446350755-6dc705c693d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            />
            <Project data={projects[4]} handleClick={handleClick} />
            <Project data={projects[5]} handleClick={handleClick} />
            <Project data={projects[6]} handleClick={handleClick} />
            <Project data={projects[7]} handleClick={handleClick} />
            <Project data={projects[8]} handleClick={handleClick} />
            <Project data={projects[9]} handleClick={handleClick} />
            <Project data={projects[10]} handleClick={handleClick} />
            <Project data={projects[11]} handleClick={handleClick} />
            <Parallax
                title={"Les cousines"}
                paragraph={textLongPlaceHolder}
                background="https://images.unsplash.com/photo-1612446350755-6dc705c693d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            />
        </main>
    )
}

export default Home