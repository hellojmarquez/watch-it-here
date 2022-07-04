import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import helperFetch from '../helper/helperFetch';
import HeroBanner from './HeroBanner';
import MediaContent3 from './MediaContent3';
import MediaContent from './MediaContent';
import { useLocation, useNavigate } from 'react-router-dom';

const Movies = ({ movie, img }) => {
	const { search } = useLocation();
	const navigate = useNavigate();
	const [more, setMore] = useState([]);
	let query = new URLSearchParams(search);
	let page = Number(query.get('page')) || 1;

	const movies_slider = movie.map(i => <MediaContent data={i} img={img} />);
	const mediaq = {
		0: {
			items: 1,
		},
		480: {
			items: 2,
		},
		720: {
			items: 3,
		},
		1024: {
			items: 5,
		},
	};

	const URL = `https://api.themoviedb.org/3/discover/movie?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=${page}&with_watch_monetization_types=flatrat`;
	const f = helperFetch();
	useEffect(() => {
		f.GET(URL)
			.then(r => r)
			.then(res => setMore(res.jsonResponse.results));
	}, [page]);
	const handleNext = () => {
		navigate(`?page=${page + 1}`);
	};
	const handlePrev = () => {
		navigate(`?page=${page - 1}`);
	};

	if (movie.length > 0) {
		return (
			<>
				<HeroBanner data={movie} img={img} />
				<h1>Peliculas populares</h1>
				<AliceCarousel
					items={movies_slider}
					responsive={mediaq}
					animationDuration={200}
					disableButtonsControls
					disableDotsControls
					mouseTracking
					touchTracking
				/>

				<section className="container">
					{more.length > 0 ? (
						more.map(el => <MediaContent3 key={el.id} data={el} img={img} />)
					) : (
						<p className="container__nodata">sin datos</p>
					)}
				</section>
				{page > 1 && <button onClick={handlePrev}>atras</button>}
				<p>
					pagina <b>{page}</b>
				</p>
				<button onClick={handleNext}>adelante</button>
			</>
		);
	} else {
		return <p>sin datos</p>;
	}
};

export default Movies;
