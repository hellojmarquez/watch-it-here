import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/series">Series</Link>
				</li>
				<li>
					<Link to="/movies">Peliculas</Link>
				</li>
				<li>
					<Link to="/generos">Generos</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
