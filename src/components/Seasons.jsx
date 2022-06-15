import React, { useEffect, useState } from 'react';
import helperFetch from '../helper/helperFetch';
import Episodes from './Episodes';

const Seasons = ({ data, id, itemid, showac, setShowac }) => {
	const [ep, setEp] = useState([]);
	const { name, season_number } = data;
	const fetchData = helperFetch();
	const enpoint = `https://api.themoviedb.org/3/tv/${id}/season/${season_number}?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US`;
	useEffect(() => {
		fetchData
			.GET(enpoint)
			.then(r => r)
			.then(res => setEp(res.jsonResponse));
	}, []);
	const { episodes } = ep;
	const handleCLick = () => {
		setShowac(id);
	};
	return (
		<>
			<div className="acordeon">
				<div className="acordeon-heading">
					<div className="acordeon-container">
						<h2>{name}</h2>
						<span onClick={handleCLick}>x</span>
					</div>
				</div>
			</div>
			<div className={(showac === id ? 'showac' : '') + ' acordeon-content'}>
				<div className="acordeon-container">
					{episodes !== undefined ? (
						episodes.map(el => <Episodes key={el.id} el={el} />)
					) : (
						<p>no data</p>
					)}
				</div>
			</div>
		</>
	);
};

export default Seasons;
