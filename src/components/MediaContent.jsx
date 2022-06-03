import React from 'react';
import { useNavigate } from 'react-router-dom';

const MediaContent = ({ data, img, setMediat, setname }) => {
	const {
		original_name: name,
		media_type: media,
		title,
		poster_path: poster,
		first_air_date,
		release_date,
	} = data;
	const navigate = useNavigate();
	const handleClick = () => {
		setMediat(media);
		setname(name || title);
		navigate('/vid', { replace: true });
	};
	return (
		<div className="card" onClick={handleClick}>
			{/* <Link to={`/${name}`}> */}
			<h3 className="card__title">{name || title}</h3>
			<img className="card__img" src={img + poster} alt={name || title} />
			{first_air_date ? (
				<p className="card__date">{'(' + first_air_date + ')'}</p>
			) : (
				<p className="card__date">{'(' + release_date + ')'}</p>
			)}
			<p className="card__media">{media}</p>
		</div>
	);
};

export default MediaContent;
