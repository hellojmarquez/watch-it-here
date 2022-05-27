import React from 'react';

const GenresSeries = ({ data }) => {
	return (
		<div>
			<h2>Series</h2>
			{data.length > 0 ? (
				data.map(el => <p key={el.id}>{el.name}</p>)
			) : (
				<p>sin datos</p>
			)}
		</div>
	);
};

export default GenresSeries;
