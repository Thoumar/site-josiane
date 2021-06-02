// React and Librairies
import React, { useEffect, useState } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";

import { useHistory } from "react-router";

// Components
import Loader from "./components/Loader/Loader";

const serverUri = process.env.REACT_APP_BASE_URL || "https://admin-josiane.herokuapp.com";

const Routes = () => {
	const history = useHistory();

	const [isLoading, setLoadingState] = useState(true);
	const [projects, setProjects] = useState([]);
	const [peoples, setPeoples] = useState([]);

	const peoplesList = peoples.sort((a, b) => a.ordre - b.ordre);

	const setProjectList = () =>
		projects.map((project, i) => {
			const recommendedProjects = [...projects]
				.sort(() => Math.random() - 0.5)
				.filter((reco) => reco.filters !== project.filters)
				.slice(0, 3);

			return (
				<Route key={"r" + i} path={"/" + project.path}>
					<Project project={project} others={recommendedProjects} key={"p" + i} />
				</Route>
			);
		});

	useEffect(() => {
		// Fetch projects
		fetch(serverUri + "/projects").then((response) => {
			response.json().then((jsonResponse) => {
				const jsonProjectsOrdered = jsonResponse.sort((a, b) => a.order - b.order).filter((project) => project.order);
				setProjects(jsonProjectsOrdered);
				setLoadingState(false);
			});
		});

		// Fetch peoples
		fetch(serverUri + "/people").then((response) => {
			response.json().then((jsonResponse) => {
				setPeoples(jsonResponse);
			});
		});
	}, []);

	return [
		<Loader loading={isLoading} />,
		<Switch>
			<Route exact path="/">
				<Home history={history} projects={projects} peoples={peoplesList} />
			</Route>
			{setProjectList()}
		</Switch>,
	];
};

export default Routes;
