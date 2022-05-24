import React from 'react';

const Home = ({ dat }) => {
	const { media_type: media, original_name, original_title, overview } = dat;
	return (
		<div>
			<h1>{original_name || original_title}</h1>
			<h2>{media}</h2>
			<p>{overview}</p>
		</div>
	);
};

export default Home;
