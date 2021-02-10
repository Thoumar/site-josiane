import React from 'react'

import Title from './../../components/Title/Title';
import Paragraph from './../../components/Paragraph/Paragraph';
import Project from './../../components/Project/Project';
import Parallax from '../../components/Parallax/Parallax';

import './Home.sass'

import projects from './../../projects.json'

// Placeholders
const textLongPlaceHolder = "Yeah, lots of people did. Stop! Don't shoot fire stick in space canoe! Cause explosive decompression! Oh, I always feared he might run off like this. Why, why, why didn't I break his legs? Goodbye, friends. I never thought I'd die like this. But I always really hoped.";

const Home = () => {
    // const [menuState, setMenuState] = useState(false)
    
    return (
        <main className="Home">
            <Title text={"La maman des marques"} />
            <Paragraph text={textLongPlaceHolder} />
            <Title text={"Le travail"} />
            <Project { ...projects[0] } />
            <Project { ...projects[1] } />
            <Project { ...projects[2] } />
            <Project { ...projects[3] } />
            <Parallax
                title={"La Famille"}
                paragraph={textLongPlaceHolder}
                background="https://images.unsplash.com/photo-1612446350755-6dc705c693d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            />
            <Project { ...projects[4] } />
            <Project { ...projects[5] } />
            <Project { ...projects[6] } />
            <Project { ...projects[7] } />
            <Project { ...projects[8] } />
            <Project { ...projects[9] } />
            <Project { ...projects[10] } />
            <Project { ...projects[11] } />
            <Parallax
                title={"Les cousines"}
                paragraph={textLongPlaceHolder}
                background="https://images.unsplash.com/photo-1612446350755-6dc705c693d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            />
        </main>
    )
}

export default Home