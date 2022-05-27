import React from 'react';
import { Link } from 'react-router-dom';

const GenresNavbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="genero-peliculas">Peliculas</Link>
				</li>
				<li>
					<Link to="genero-series">Series</Link>
				</li>
			</ul>
		</nav>
	);
};

export default GenresNavbar;
