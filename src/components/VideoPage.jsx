import React, { useEffect, useState } from 'react';
import helperFetch from '../helper/helperFetch';

const VideoPage = ({ imgBaseUrl }) => {
	const data = JSON.parse(localStorage.getItem('search'));
	const { id, media } = data;
	const [search, setSearch] = useState('');
	const [mediaVideo, setMediaVideo] = useState('');
	const fetchData = helperFetch();
	const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US`;
	const serieUrl = `https://api.themoviedb.org/3/tv/${id}?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US`;
	const tvVideoUrl = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US`;
	const movieVideoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US`;

	useEffect(() => {
		if (media === 'movie') {
			fetchData
				.GET(movieUrl)
				.then(r => r)
				.then(res => setSearch(res.jsonResponse));

			fetchData
				.GET(movieVideoUrl)
				.then(r => r)
				.then(res => setMediaVideo(res.jsonResponse.results));
		} else {
			fetchData
				.GET(serieUrl)
				.then(r => r)
				.then(res => setSearch(res.jsonResponse));
			fetchData
				.GET(tvVideoUrl)
				.then(r => r)
				.then(res => setMediaVideo(res.jsonResponse.results));
		}
	}, []);

	const {
		vote_average,
		original_name,
		release_date,
		overview,
		poster_path,
		title,
		first_air_date,
		original_title,
	} = search;
	return (
		<>
			<p>oli</p>
			<h1>{title || original_name}</h1>
			<div>
				{poster_path !== undefined ? (
					<img
						src={imgBaseUrl + poster_path}
						alt={title || original_name || original_title}
					/>
				) : (
					<p>sin datos</p>
				)}
			</div>
			<div>
				<p>{overview}</p>
				<div>
					<h3>Original title:</h3>
					<p>{title || original_name || original_title}</p>
					<h3>Release date:</h3>
					<p>{release_date || first_air_date}</p>
					<h3>IMDB score</h3>
					<p>{`${vote_average}/10`}</p>
				</div>
			</div>
			<div className="video-responsive">
				{mediaVideo.length > 0 && (
					<iframe
						className="frame"
						width="853"
						height="480"
						src={`https://www.youtube.com/embed/${mediaVideo[0].key}`}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						title="Embedded youtube"
					/>
				)}
			</div>
		</>
	);
};

export default VideoPage;
