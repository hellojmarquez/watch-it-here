import React from 'react';

const MediaContent = ({ data, img }) => {
	const {
		original_name: name,
		title,
		poster_path: poster,
		first_air_date,
		release_date,
	} = data;

	return (
		<div>
			<h3>{name || title}</h3>
			{/* <img src={img + poster} alt={name || title} /> */}
			{first_air_date ? (
				<p>{'(' + first_air_date + ')'}</p>
			) : (
				<p>{'(' + release_date + ')'}</p>
			)}
		</div>
	);
};

export default MediaContent;
