import React from 'react';
import PopularContent from './PopularContent';

const Movies = ({ movie, img }) => {
	return (
		<div>
			<h1>Peliculas populares</h1>
			{movie.length > 0 ? (
				movie.map(el => <PopularContent key={el.id} data={el} img={img} />)
			) : (
				<p>sin datos</p>
			)}
		</div>
	);
};

export default Movies;
