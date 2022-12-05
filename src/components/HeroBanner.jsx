import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroBanner = ({ img, data }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		const search = {
			id: data.id,
			media: data.media,
		};
		window.localStorage.setItem('search', JSON.stringify(search));
		navigate('/vid');
	};

	return (
		<>
			<div className="hero-banner">
				<div className="slider">
					<div
						key={data.id}
						className="slider__element"
						style={{ backgroundImage: `url(${img}${data.poster_path})` }}
					>
						<div className="hero-info">
							<h2 className="hero-info__title">{data.title || data.name}</h2>
							<a onClick={handleClick} className="hero-info__btn">
								ver ahora
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroBanner;
