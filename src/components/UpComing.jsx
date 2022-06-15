import React, { useEffect, useState } from 'react';
import helperFetch from '../helper/helperFetch';
import MediaContent2 from './MediaContent2';

const UpComing = ({ img }) => {
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		const FetchData = helperFetch();
		FetchData.GET(
			'https://api.themoviedb.org/3/movie/upcoming?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US&page=1&region=US'
		)
			.then(r => r)
			.then(res => setMovie(res.jsonResponse.results));
	}, []);

	if (movie.length > 0) {
		return (
			<>
				<h1>Proximamente</h1>
				<section className="container">
					{movie.map(el => (
						<MediaContent2 key={el.id} data={el} img={img} />
					))}
				</section>
			</>
		);
	} else {
		return <p>sin datos</p>;
	}
};

export default UpComing;
