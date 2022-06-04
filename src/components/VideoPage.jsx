import React, { useEffect, useState } from 'react';
import helperFetch from '../helper/helperFetch';

const VideoPage = ({ id, media }) => {
	const [search, setSearch] = useState([]);
	const f = helperFetch();
	const movieUrl =
		'https://api.themoviedb.org/3/movie/414906?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US';
	const serieUrl =
		'https://api.themoviedb.org/3/search/tv?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US&page=1&query=park&include_adult=false';
	useEffect(() => {
		if (media === 'movie') {
			f.GET(movieUrl)
				.then(r => r)
				.then(res => console.log(res.jsonResponse));
		} else {
			console.log('es tv');
		}
	}, []);
	// 414906
	return (
		<div>
			<p>{id}</p>
			<p>{media}</p>
		</div>
	);
};

export default VideoPage;
