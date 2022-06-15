import React, { useEffect, useState } from 'react';
import helperFetch from '../helper/helperFetch';
import Seasons from './Seasons';

const WatchTv = ({ imgBaseUrl }) => {
	const data = JSON.parse(localStorage.getItem('search'));
	const [ep, setEp] = useState([]);
	const { id } = data;
	const [search, setSearch] = useState('');
	const [showTrailer, setShowTrailer] = useState(false);
	const [mediaVideo, setMediaVideo] = useState('');
	const fetchData = helperFetch();
	const serieUrl = `https://api.themoviedb.org/3/tv/${id}?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US`;
	const tvVideoUrl = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US`;
	const [showac, setShowac] = useState('');

	useEffect(() => {
		fetchData
			.GET(serieUrl)
			.then(r => r)
			.then(res => setSearch(res.jsonResponse));
		fetchData
			.GET(tvVideoUrl)
			.then(r => r)
			.then(res => setMediaVideo(res.jsonResponse.results));
	}, []);

	const {
		seasons,
		vote_average,
		original_name,
		release_date,
		overview,
		poster_path,
		title,
		first_air_date,
		original_title,
	} = search;
	// const enpoint = `https://api.themoviedb.org/3/tv/${id}/season/${seasons.season_number}?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US`;
	// console.log(seasons[0].season_number);
	// useEffect(() => {
	// 	fetchData
	// 		.GET(enpoint)
	// 		.then(r => r)
	// 		.then(res => setEp(res.jsonResponse));
	// }, []);

	const handleTrailer = () => {
		showTrailer ? setShowTrailer(false) : setShowTrailer(true);
	};
	// console.log('media: ', mediaVideo);
	// id 66732
	// console.log(search);
	return (
		<section className="container">
			<article>
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
					<h2>Detalles</h2>
					<p>{overview}</p>
					<div>
						<p>Original title:</p>
						<p>{title || original_name || original_title}</p>
						<p>Release date:</p>
						<p>{release_date || first_air_date}</p>
						<p>IMDB score</p>
						<p>{`${vote_average}/10`}</p>
					</div>
				</div>
				<div className="video-responsive">
					<button onClick={handleTrailer}>Ver trailer</button>
					{mediaVideo.length > 0 && (
						<>
							{showTrailer && (
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
						</>
					)}
				</div>
			</article>
			<p>Temporadas</p>
			<article>
				{seasons !== undefined &&
					seasons.map(el => (
						<Seasons
							key={el.id}
							data={el}
							id={id}
							itemId={el.id}
							showac={showac}
							setShowac={setShowac}
						/>
					))}
			</article>
		</section>
	);
};

export default WatchTv;
