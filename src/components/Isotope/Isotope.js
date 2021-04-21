import React, { useState, useRef, useEffect } from "react";
import  IsoTope from "isotope-layout";
import { useHistory } from 'react-router-dom';

import './Isotope.sass'

const Isotope = ({ projects, scrollRef }) => {
    const isotope = useRef()
    const history = useHistory()
    const [filterKey, setFilterKey] = useState('*')

    useEffect(() => {
        isotope.current = new IsoTope('.filter-container', {
            itemSelector: '.filter-item',
            layoutMode: 'fitRows',
        })
        return () => isotope.current.destroy()
    }, [])

    useEffect(() => {
        filterKey === '*'
        ? isotope.current.arrange({filter: `*`})
        : isotope.current.arrange({filter: `.${filterKey}`})
    }, [filterKey])

    const handleFilterKeyChange = key => () => setFilterKey(key)

    if(true) {
        return (
            <div className="Isotope" scroll-ref={scrollRef}>
                <ul className="Isotope__Menu">
                    <li className={filterKey === "*" ? "active" : ""} onClick={handleFilterKeyChange('*')}>Tout le travail</li>
                    <li className={filterKey === "campagnes" ? "active" : ""} onClick={handleFilterKeyChange('campagnes')}>Les campagnes</li>
                    <li className={filterKey === "causes" ? "active" : ""} onClick={handleFilterKeyChange('causes')}>Les grandes causes</li>
                    <li className={filterKey === "activations" ? "active" : ""} onClick={handleFilterKeyChange('activations')}>Les activations</li>
                </ul>
                <ul className="filter-container">
                    {
                        projects.map((project, i) => {
                            switch (project.cover.ext) {
                                case '.png':
                                    return (
                                        <div
                                            key={i}
                                            className={"filter-item" + (project.filters ? " " + project.filters : "")}
                                            onClick={() => { history.push(project.path) }} 
                                            style={{
                                                backgroundImage: "url(" + project.isotope_cover.url + ")",
                                                backgroundSize: "cover"
                                            }}>
                                            <span>{ project.title }</span>
                                        </div>
                                    )
                                case '.jpg':
                                    return (
                                        <div
                                            key={i}
                                            className={"filter-item" + (project.filters ? " " + project.filters : "")}
                                            onClick={() => { history.push(project.path) }} 
                                            style={{
                                                backgroundImage: "url(" + project.isotope_cover.url + ")",
                                                backgroundSize: "cover"
                                            }}>
                                            <span>{ project.title }</span>
                                        </div>
                                    )
                                case '.mp4':
                                    return (
                                        <div
                                            key={i}
                                            className={"filter-item" + (project.filters ? " " + project.filters : "")}
                                            onClick={() => { history.push(project.path) }} 
                                            style={{
                                                backgroundImage: "url(" + project.isotope_cover.url + ")",
                                                backgroundSize: "cover"
                                            }}>
                                            <video controls autoPlay muted width="100%" height="100%">
                                                <source src={project.isotope_cover.url} />
                                            </video>
                                            <span>{ project.title }</span>
                                        </div>
                                    )
                                default:
                                    return null
                            }
                        })
                    }
                </ul>
            </div>
        )
    } else {
        return 'Loading ...'
    }
}

export default Isotope