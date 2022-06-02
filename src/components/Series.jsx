import React, { useState } from 'react';
import helperFetch from '../helper/helperFetch';
import HeroBanner from './HeroBanner';
import MediaContent from './MediaContent';

const Series = ({ serie, img }) => {
	const [more, setMore] = useState([]);

	const handleWatchMore = async () => {
		const URL =
			'https://api.themoviedb.org/3/discover/tv?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0';
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
	if (serie.length > 0) {
		return (
			<>
				<HeroBanner data={serie} img={img} />
				<h1>Series populares</h1>
				<section className="container">
					{serie.map(el => (
						<MediaContent key={el.id} data={el} img={img} />
					))}
				</section>
				<section className="container">
					<button onClick={handleWatchMore}>Ver más +</button>
					{more.length > 0 ? (
						more.map(el => <MediaContent key={el.id} data={el} img={img} />)
					) : (
						<p className="container__nodata">sin datos</p>
					)}
				</section>
			</>
		);
	} else {
		return <p>sin datos</p>;
	}
};

export default Series;
