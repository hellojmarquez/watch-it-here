import React from 'react';

const VideoPage = ({ name, media }) => {
	console.log(name, media);
	return (
		<div>
			<p>{name}</p>
			<p>{media}</p>
		</div>
	);
};

export default VideoPage;
