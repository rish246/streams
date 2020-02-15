import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './components/GoogleAuth';

//import GoogleAuth into header and use it inside the header
const Header = () => {
	//return a navbar to the project

	//use Link outside a router

	// i am using it outside a router
	return (
		<nav className="navbar navbar-light" id="main-navbar">
			<Link to="/" className="navbar-brand">
				Streamy
			</Link>

			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<Link to="/" className="nav-link">
						streams
					</Link>
				</li>
			</ul>
			<GoogleAuth />
		</nav>
	);
};

export default Header;

//add google OAuth in the Link inside the Login button
