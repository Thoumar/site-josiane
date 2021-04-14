import './Work.sass';

import React from 'react';

import Isotope from '../../components/Isotope/Isotope';

import Footer from './../../components/Footer/Footer';

const Work = ({ projects }) => {

    return (
        <div className="Work">
            <Isotope
                projects={projects}
            />
            <Footer
                scrollRef="contact"
            />
        </div>
    )
}

export default Work