import React from 'react';
import { useNavigate } from 'react-router-dom';

const MediaContent = ({ data, img }) => {
	const {
		id,
		vote_average,
		original_name: name,
		media_type: media,
		title,
		poster_path: poster,
		first_air_date,
		release_date,
	} = data;
	const navigate = useNavigate();
	const handleClick = () => {
		const search = {
			id: id,
			media: media,
		};
		window.localStorage.setItem('search', JSON.stringify(search));
		navigate('/vid');
	};
	return (
		<div
			className="card"
			onClick={handleClick}
			style={{ backgroundImage: `url("${img + poster}")` }}
		>
			<div className="card__info">
				<h3 className="card__title">{name || title}</h3>
				{first_air_date ? (
					<p className="card__date">{`Fecha: ${first_air_date}`}</p>
				) : (
					<p className="card__date">{`Fecha: ${release_date}`}</p>
				)}
				<p className="card__score">
					&#9733; score: <span>{vote_average}</span>
				</p>
			</div>
		</div>
	);
};

export default MediaContent;
