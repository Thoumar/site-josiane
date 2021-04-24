import React, { useState, useRef, useEffect } from "react";
import  IsoTope from "isotope-layout";
import { useHistory } from 'react-router-dom';

import './Isotope.sass'

const Isotope = ({ projects, scrollRef }) => {
    const isotope = useRef()
    const history = useHistory()
    const [filterKey, setFilterKey] = useState('*')

    useEffect(() => {
        isotope.current = new IsoTope('.Isotope__Container', {
            itemSelector: '.Isotope__Item',
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
                <ul className="Isotope__Container">
                    {
                        projects.map((project, i) => {
                            return (
                                <div
                                    key={i}
                                    className={"Isotope__Item" + (project.filters ? " " + project.filters : "")}
                                    onClick={() => { history.push(project.path) }}>
                                    <div>
                                        <img src={project.isotope_cover.url} alt="Isotope item" />
                                        <div className="Isotope__Description">
                                            <span>{ project.title }</span>
                                            <span>{ project.subtitle }</span>
                                        </div>
                                    </div>
                                </div>
                            )
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