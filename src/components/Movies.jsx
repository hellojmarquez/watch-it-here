import React, { useState } from 'react';
import helperFetch from '../helper/helperFetch';
import HeroBanner from './HeroBanner';
import MediaContent from './MediaContent';

const Movies = ({ movie, img }) => {
	const [more, setMore] = useState([]);

	const handleWatchMore = async () => {
		const URL =
			'https://api.themoviedb.org/3/discover/movie?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_watch_monetization_types=flatrat';
		const f = helperFetch();
		const m = await f
			.GET(URL)
			.then(r => r)
			.then(res => res.jsonResponse.results);
		if (more.length === 0) {
			setMore(m);
		} else {
			setMore([]);
		}
	};
	if (movie.length > 0) {
		return (
			<div>
				<HeroBanner data={movie} img={img} />
				<h1>Peliculas populares</h1>
				<section className="container">
					{movie.map(el => (
						<MediaContent key={el.id} data={el} img={img} />
					))}
				</section>
				<button onClick={handleWatchMore}>Ver más +</button>
				<section className="container">
					{more.length > 0 ? (
						more.map(el => <MediaContent key={el.id} data={el} img={img} />)
					) : (
						<p className="container_nodata">sin datos</p>
					)}
				</section>
			</div>
		);
	} else {
		return <p>sin datos</p>;
	}
};

export default Movies;
