import Footer from './components/Footer/Footer';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	withRouter
} from "react-router-dom";

import Home from './pages/Home/Home'
import Project from './pages/Project/Project'

import posed, { PoseGroup } from "react-pose";

import projects from './projects.json' 

import './App.sass';


const ContextRouteAnimation = posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 }
});

const Page = ({ history, location, children, ...rest }) => {
	return (
		<PoseGroup flipMove={true}>
			<ContextRouteAnimation key={location.pathname}>
				<Switch location={location} {...rest}>
					{children}
				</Switch>
			</ContextRouteAnimation>
		</PoseGroup>
	);
};

const Routes = withRouter(({ location }) => {
	return (
		<Page location={location}>
			<Switch>
				{projects.map((project, i) => {
					return (
						<Route key={i} path={'/' + project.slug}>
							<Project data={project} key={i} />
						</Route>
					);
				})}
				<Route exact path="/" component={Home} />
			</Switch>
		</Page>
	);
});


function App() {
	return (
		<div className="App">
			<Router>
				<Routes />
				<Footer scrollRef="contact" />
			</Router>
		</div>
	);
}

export default App;
