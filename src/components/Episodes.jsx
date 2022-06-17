import React from 'react';
import { NavLink } from 'react-router-dom';

const Episodes = ({ el, id }) => {
	const { name, episode_number: episode, season_number: season } = el;

	const handleClick = () => {
		console.log('hola, episodio: ', name);
		const search = {
			id: id,
			season: season,
			episode: episode,
		};
		window.localStorage.setItem('search', JSON.stringify(search));
	};
	return (
		<li className="acordeon__items">
			<NavLink onClick={handleClick} to="/vid">
				{`${episode}: ${name}`}
			</NavLink>
		</li>
	);
};

export default Episodes;
