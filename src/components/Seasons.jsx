import React, { useEffect, useState } from 'react';
import helperFetch from '../helper/helperFetch';
import Episodes from './Episodes';

const Seasons = ({ data, id, onToggle, active }) => {
	const [ep, setEp] = useState([]);
	const { name, season_number } = data;
	const fetchData = helperFetch();
	const enpoint = `https://api.themoviedb.org/3/tv/${id}/season/${season_number}?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US`;
	useEffect(() => {
		fetchData
			.GET(enpoint)
			.then(r => r)
			.then(res => setEp(res));
	}, []);
	const { episodes } = ep;
	// console.log('watch-tv: season: ', data);

	return (
		<>
			<div className="acordeon">
				<div onClick={onToggle} className="acordeon__heading">
					<div className="acordeon__container">
						<h2 className="acordeon__title">{`Temporada: ${season_number}`}</h2>
						<span>x</span>
					</div>
				</div>
			</div>
			<div className={(active ? 'showac' : '') + ' acordeon__content'}>
				<div className="acordeon__container-content">
					<ul>
						{episodes !== undefined ? (
							episodes.map(el => <Episodes key={el.id} id={id} el={el} />)
						) : (
							<p>no data</p>
						)}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Seasons;
