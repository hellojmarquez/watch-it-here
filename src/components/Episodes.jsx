import React from 'react';

const Episodes = ({ el }) => {
	const { name, episode_number: number } = el;

	return (
		<>
			<p>{`${number}: ${name}`}</p>
		</>
	);
};

export default Episodes;
