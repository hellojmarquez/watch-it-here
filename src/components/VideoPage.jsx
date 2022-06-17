import React, { useEffect, useState } from 'react';
import helperFetch from '../helper/helperFetch';

const VideoPage = ({ imgBaseUrl }) => {
	const data = JSON.parse(localStorage.getItem('search'));
	const { id, media, season, episode } = data;
	const [search, setSearch] = useState('');
	const [mediaVideo, setMediaVideo] = useState('');
	const fetchData = helperFetch();
	const endp_movie_url = `https://api.themoviedb.org/3/movie/${id}?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US`;
	const endp_tv_url = `https://api.themoviedb.org/3/tv/${id}?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US`;
	const endp_tv_video = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US`;
	const endp_movie_video = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US`;
	const endp_episode = `https://api.themoviedb.org/3/tv/${id}/season/${season}/episode/${episode}?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US`;
	const endp_episode_video = `https://api.themoviedb.org/3/tv/${id}/season/${season}/episode/${episode}/videos?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US`;

	useEffect(() => {
		if (!season) {
			if (media === 'movie') {
				fetchData
					.GET(endp_movie_url)
					.then(r => r)
					.then(res => setSearch(res.jsonResponse));

				fetchData
					.GET(endp_movie_video)
					.then(r => r)
					.then(res => setMediaVideo(res.jsonResponse.results));
			} else {
				fetchData
					.GET(endp_tv_url)
					.then(r => r)
					.then(res => setSearch(res.jsonResponse));
				fetchData
					.GET(endp_tv_video)
					.then(r => r)
					.then(res => setMediaVideo(res.jsonResponse.results));
			}
		} else {
			fetchData
				.GET(endp_episode)
				.then(r => r)
				.then(res => setSearch(res.jsonResponse));
			fetchData
				.GET(endp_episode_video)
				.then(r => r)
				.then(res => setMediaVideo(res.jsonResponse.results));
		}
	}, []);
	const {
		name,
		still_path,
		vote_average,
		original_name,
		release_date,
		overview,
		poster_path,
		title,
		first_air_date,
		original_title,
		air_date,
	} = search;

	return (
		<>
			{season ? (
				<h1>
					{`Episodio ${episode}: `}
					<span>{name}</span>
				</h1>
			) : (
				<h1>{title || original_name}</h1>
			)}
			<div>
				{poster_path !== undefined ? (
					<img
						src={imgBaseUrl + poster_path}
						alt={title || original_name || original_title || name}
					/>
				) : (
					<img
						src={imgBaseUrl + still_path}
						alt={title || original_name || original_title || name}
					/>
				)}
			</div>
			<div>
				<p>{overview}</p>
				<div>
					<h3>Original title:</h3>
					<p>{title || original_name || original_title || name}</p>
					<h3>Release date:</h3>
					<p>{release_date || first_air_date || air_date}</p>
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
