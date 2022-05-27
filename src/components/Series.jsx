import React from 'react';
import PopularContent from './PopularContent';

const Series = ({ serie, img }) => {
	console.log(serie);

	return (
		<div>
			<h1>Series populares</h1>
			{serie.length > 0 ? (
				serie.map(el => <PopularContent key={el.id} data={el} img={img} />)
			) : (
				<p>sin datos</p>
			)}
		</div>
	);
};

export default Series;
