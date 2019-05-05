import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Contact from "./Contact";

const Home = () => (
	<h1>Home</h1>
)
const About = () => (
	<h2>About</h2>
)

const Main = (
	<Router>
		<div className="body">
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/contact">Contact</Link></li>
			</ul>

			<hr />
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/contact" component={Contact} />
		</div>
	</Router>
);

export default Main;