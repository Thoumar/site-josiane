
// React and Librairies
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Switch, Route } from "react-router-dom";

// Pages
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import Work from './pages/Work/Work';

// Components
import Loader from './components/Loader/Loader'

const serverUri = process.env.REACT_APP_BASE_URL || "https://admin-josiane.herokuapp.com"

const Routes = () => {

	const [isLoading, setLoadingState] = useState(true)
    const [projects, setProjects] = useState([]);
    const [peoples, setPeoples] = useState([]);

    const setProjectList = () => projects.map((project, i) => {
		const randProjects = []

		for (var j = 0; j < 3; j++) {
			var rand = projects[Math.floor(Math.random() * projects.length)];
			randProjects.push(rand);
		}
						
		return (
            <Route
                key={"r" + i}
                path={'/' + project.path}>
				<Project
					project={project}
					others={randProjects}
					key={"p" + i}
				/>
			</Route>
        )
	});

    useEffect(() => {
		fetch(serverUri + "/projects").then((response) => {
			response.json().then((jsonResponse) => {
				const jsonProjectsOrdered = jsonResponse.sort((a, b) => a.order - b.order ).filter(project => project.order)
				setProjects(jsonProjectsOrdered)
				setLoadingState(false)
			})
		})
		
		fetch(serverUri + "/people").then((response) => {
			response.json().then((jsonResponse) => {
				setPeoples(jsonResponse)
			})
		})
	}, [])

	return [
		<Loader loading={isLoading} />,
		<Switch>
			<Route exact path="/">
				<Home projects={projects} peoples={peoples} />
			</Route>
			<Route exact path="/work">
				<Work projects={projects} />
			</Route>
			{
				setProjectList()
			}
		</Switch>
	];
};

export default Routes