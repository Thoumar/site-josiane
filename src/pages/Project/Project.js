import './Project.sass';

import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import Header from './../../components/Header/Header';
import Menu from './../../components/Menu/Menu';

import { useHistory } from "react-router-dom";

const Project = (data) => {
    
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	
    const { cover, title, subtitle } = data.project

    const history = useHistory();

    const handleRedirection = () => {
        history.push("/");
    }

    return (
        <div className="Project">
            <Menu handleClick={handleRedirection} />
            <Header cover={cover} title={title} subtitle={subtitle} />
        </div>
    )
}

export default Project