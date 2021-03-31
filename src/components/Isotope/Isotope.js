import React, { useState, useRef, useEffect } from "react";
import  IsoTope from "isotope-layout";

import './Isotope.sass'

const Isotope = ({ projects, goToPage }) => {
    // init one ref to store the future isotope object
    const isotope = useRef()
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = useState('*')

    
  // initialize an Isotope object with configs
    useEffect(() => {
        isotope.current = new IsoTope('.filter-container', {
        itemSelector: '.filter-item',
        layoutMode: 'fitRows',
        })
        // cleanup
        return () => isotope.current.destroy()
    }, [])

    // handling filter key change
    useEffect(() => {
        filterKey === '*'
        ? isotope.current.arrange({filter: `*`})
        : isotope.current.arrange({filter: `.${filterKey}`})
    }, [filterKey])

    const handleFilterKeyChange = key => () => setFilterKey(key)

    if(true) {
        return (
            <div className="Isotope">
                <ul className="Isotope__Menu">
                    <li onClick={handleFilterKeyChange('*')}>Show All</li>
                    <li onClick={handleFilterKeyChange('most_viewed')}>Most viewed</li>
                    <li onClick={handleFilterKeyChange('care')}>Care</li>
                    <li onClick={handleFilterKeyChange('advertising')}>Advertising</li>
                    <li onClick={handleFilterKeyChange('activation')}>Activation</li>
                </ul>
                <ul className="filter-container">
                    {
                        projects.map((project, i) => {
                            const filteringClassName = project.filters ? " " + project.filters : ""
                            return (
                                <div key={i} className={"filter-item" + filteringClassName} onClick={() => { goToPage(project) }} 
                                style={{
                                    backgroundImage: "url(" + project.cover.url + ")",
                                    backgroundSize: "cover"
                                }}>
                                    <span>{ project.title }</span>
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