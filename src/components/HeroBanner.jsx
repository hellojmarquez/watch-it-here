import React, { useEffect, useState } from 'react';

const HeroBanner = ({ img, data }) => {
	let [counter, setCounter] = useState(0);
	useEffect(() => {
		const timer = setInterval(() => {
			setCounter(counter => counter + 1);
			if (counter > 4) setCounter(0);
		}, 4000);
		return () => clearInterval(timer);
	}, []);

	return (
		<main className="hero-banner">
			{data.length > 0 && (
				<img
					className="hero-banner__img"
					src={data.length > 0 && `${img}${data[1].poster_path}`}
					alt={data.original_title || data.original_name}
				/>
			)}
		</main>
	);
};

export default HeroBanner;
