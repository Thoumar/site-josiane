import React from 'react'

import Title from './../../components/Title/Title';
import Paragraph from './../../components/Paragraph/Paragraph';
import Project from './../../components/Project/Project';

import './Home.sass'

// Placeholders
const textLongPlaceHolder = "Yeah, lots of people did. Stop! Don't shoot fire stick in space canoe! Cause explosive decompression! Oh, I always feared he might run off like this. Why, why, why didn't I break his legs? Goodbye, friends. I never thought I'd die like this. But I always really hoped.";

const Home = () => {
    return (
        <main className="Home">

            <Title text={"La maman des marques"} />
            
            <Paragraph text={textLongPlaceHolder} />
            
            <Title text={"Le travail"} />

            <Project
                title="Afsep"
                domain="www.clientdomain.com"
                description="Lorem Ipsum Dolor"
                items={
                    [
                        {
                            type: 'video',
                            src: 'https://cdn.videvo.net/videvo_files/video/free/2013-08/small_watermarked/hd0992_preview.webm',
                            alt: "Sorry, your browser doesn't support embedded videos.",
                            style: { height: "50%" }
                        },
                        {
                            type: 'picture',
                            src: 'https://images.unsplash.com/photo-1612446350755-6dc705c693d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                            alt: "",
                            style: { height: "100%" }
                        }
                    ]
                }
            />

            <section className="Project Project__Two-items">
                <img className="Project-illustration-first" src={""} alt={""} />
                <img className="Project-illustration-second" src={""} alt={""} />
                <div className="Project-caption">
                    <h4>Afsep</h4>
                    <span>Domaine du sujet</span>
                    <span>Lorem Ipsum Dolor</span>
                </div>
            </section>

            <section className="Project Project__Four-items">
                <img className="Project-illustration-first" src={""} alt={""} />
                <div className="Project-Thumbs">
                    <img className="Project-Thumb" src={""} alt={""} />
                    <img className="Project-Thumb" src={""} alt={""} />
                    <img className="Project-Thumb" src={""} alt={""} />
                </div>
                <div className="Project-caption">
                    <h4>Afsep</h4>
                    <span>Domaine du sujet</span>
                    <span>Lorem Ipsum Dolor</span>
                </div>
            </section>

            <section className="Project Project__Two-items">
                <img className="Project-illustration-first" src={""} alt={""} />
                <img className="Project-illustration-second" src={""} alt={""} />
                <div className="Project-caption">
                    <h4>Afsep</h4>
                    <span>Domaine du sujet</span>
                    <span>Lorem Ipsum Dolor</span>
                </div>
            </section>
            
            <section className="Project Project__Three-items">
                <img className="Project-illustration-first" src={""} alt={""} />
                <img className="Project-illustration-second" src={""} alt={""} />
                <img className="Project-illustration-third" src={""} alt={""} />
                <div className="Project-caption">
                    <h4>Croustipate</h4>
                    <span>Domaine du sujet</span>
                    <span>Lorem Ipsum Dolor</span>
                </div>
            </section>

            <section className="Home__Parallax">
                <h2 className="Home__Parallax-title">La famille</h2>
                <p className="Home__Parallax-paragraph">Yeah, lots of people did. Stop! Don't shoot fire stick in space canoe! Cause explosive decompression! Oh, I always feared he might run off like this. Why, why, why didn't I break his legs? Goodbye, friends. I never thought I'd die like this. But I always really hoped.</p>
            </section>

            <section className="Project Project__Two-items">
                <img className="Project-illustration-first" src={""} alt={""} />
                <img className="Project-illustration-second" src={""} alt={""} />
                <div className="Project-caption">
                    <h4>Loué</h4>
                    <span>Rien</span>
                    <span>Lorem Ipsum Dolor</span>
                </div>
            </section>

            <section className="Project Project__Two-items">
                <img className="Project-illustration-first" src={""} alt={""} />
                <img className="Project-illustration-second" src={""} alt={""} />
                <div className="Project-caption">
                    <h4>PFDP</h4>
                    <span>Domaine du sujet</span>
                    <span>Lorem Ipsum Dolor</span>
                </div>
            </section>
            
            <section className="Project Project__Two-items">
                <img className="Project-illustration-first" src={""} alt={""} />
                <img className="Project-illustration-second" src={""} alt={""} />
                <div className="Project-caption">
                    <h4>La Cimade</h4>
                    <span>Campagne de lancement</span>
                    <span>Lorem Ipsum Dolor</span>
                </div>
            </section>

            <section className="Project Project__Two-items">
                <img className="Project-illustration-first" src={""} alt={""} />
                <img className="Project-illustration-second" src={""} alt={""} />
                <div className="Project-caption">
                    <h4>Farming Simulator</h4>
                    <span>Domaine du sujet</span>
                    <span>Lorem Ipsum Dolor</span>
                </div>
            </section>

            <section className="Project Project__Two-items">
                <img className="Project-illustration-first" src={""} alt={""} />
                <img className="Project-illustration-second" src={""} alt={""} />
                <div className="Project-caption">
                    <h4>fondation pour l'enfance</h4>
                    <span>Domaine du sujet</span>
                    <span>Lorem Ipsum Dolor</span>
                </div>
            </section>

            <section className="Project Project__Two-items">
                <img className="Project-illustration-first" src={""} alt={""} />
                <img className="Project-illustration-second" src={""} alt={""} />
                <div className="Project-caption">
                    <h4>samusocial</h4>
                    <span>Domaine du sujet</span>
                    <span>Lorem Ipsum Dolor</span>
                </div>
            </section>

            <section className="Project Project__Three-items">
                <img className="Project-illustration-first" src={""} alt={""} />
                <img className="Project-illustration-second" src={""} alt={""} />
                <img className="Project-illustration-third" src={""} alt={""} />
                <div className="Project-caption">
                    <h4>Carrefour pikit</h4>
                    <span>Domaine du sujet</span>
                    <span>Lorem Ipsum Dolor</span>
                </div>
            </section>

            <section className="Project Project__Two-items">
                <img className="Project-illustration-first" src={""} alt={""} />
                <img className="Project-illustration-second" src={""} alt={""} />
                <div className="Project-caption">
                    <h4>Happn</h4>
                    <span>Des femmes à suivre.</span>
                    <span>Lorem Ipsum Dolor</span>
                </div>
            </section>

            <section className="Home__Parallax">
                <h2 className="Home__Parallax-title">Les cousines</h2>
                <p className="Home__Parallax-paragraph">Yeah, lots of people did. Stop! Don't shoot fire stick in space canoe! Cause explosive decompression! Oh, I always feared he might run off like this. Why, why, why didn't I break his legs? Goodbye, friends. I never thought I'd die like this. But I always really hoped.</p>
            </section>
        </main>
    )
}

export default Home