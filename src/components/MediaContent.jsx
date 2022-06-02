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
		<div className="card">
			<h3 className="card__title">{name || title}</h3>
			<img className="card__img" src={img + poster} alt={name || title} />
			{first_air_date ? (
				<p className="card__date">{'(' + first_air_date + ')'}</p>
			) : (
				<p className="card__date">{'(' + release_date + ')'}</p>
			)}
		</div>
	);
};

export default MediaContent;
