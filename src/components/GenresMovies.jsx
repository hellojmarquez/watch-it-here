import React from 'react';

const GenresMovies = ({ data }) => {
	return (
		<div>
			<h2>Peliculas</h2>
			{data.length > 0 ? (
				data.map(el => <p key={el.id}>{el.name}</p>)
			) : (
				<p>sin datos</p>
			)}
		</div>
	);
};

export default GenresMovies;
