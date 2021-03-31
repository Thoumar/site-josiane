
// React and Librairies
import { useHistory } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import ScrollReveal from 'scrollreveal'
import { BrowserRouter as Switch, Route, withRouter } from "react-router-dom";

// Pages
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import Work from './pages/Work/Work';

// Components
import Loader from './components/Loader/Loader'

const serverUri = process.env.REACT_APP_BASE_URL || "https://admin-josiane.herokuapp.com"

const Routes = withRouter(({ location }) => {

    const history = useHistory();
	const [isLoading, setLoadingState] = useState(true)
    const [projects, setProjects] = useState([]);
	
    const handleGoToPage = (data) => {
		const path = data ? data.path : ""
		ScrollReveal().destroy();
		setLoadingState(true)
		setTimeout(() => {
			history.push("/" + path);
			setLoadingState(false)
		}, 1000)
    }

    const setProjectList = () => projects.map((project, i) => (
            <Route
                key={"r" + i}
                exact
                path={'/' + project.path}
                component={() =>
                    <Project
                        goToPage={() => handleGoToPage(null)}
                        project={project}
                        key={"p" + i}
                    />
                }
            />
        )
    )

    useEffect(() => fetch(serverUri + "/projects").then((response) => {
        response.json().then((jsonResponse) => {
            const jsonProjectsOrdered = jsonResponse.sort((a, b) => a.id - b.id )
            setProjects(jsonProjectsOrdered)
            setLoadingState(false)
        })
    }), [])

	return [
		<Loader loading={isLoading} />,
		<Switch>
			{ setProjectList() }
			<Route exact path="/" component={() => <Home projects={projects} goToPage={(data) => handleGoToPage(data)} />} />
			<Route exact path="/work" component={() => <Work projects={projects} goToPage={(data) => handleGoToPage(data)} />} />
		</Switch>
	];
});

export default Routes