import React, { useEffect, useState } from 'react';
import helperFetch from '../helper/helperFetch';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HeroBanner from './HeroBanner';
import MediaContent3 from './MediaContent3';
import MediaContent from './MediaContent';
import { useLocation } from 'react-router-dom';
import Pagination from './Pagination';

const Series = ({ serie, img }) => {
	const { search } = useLocation();
	const query = new URLSearchParams(search);
	const [page, setPage] = useState(Number(query.get('page') || 1));
	const [more, setMore] = useState([]);
	const [TOTAL_PAGES, setTOTAL_PAGES] = useState(0);
	const series_slider = serie.map(i => <MediaContent data={i} img={img} />);
	const URL = `https://api.themoviedb.org/3/discover/tv?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;
	const f = helperFetch();

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
	useEffect(() => {
		f.GET(URL)
			.then(r => r)
			.then(res => {
				setTOTAL_PAGES(Number(res.jsonResponse.total_pages));
				setMore(res.jsonResponse.results);
			});
	}, [page]);
	if (serie.length > 0) {
		return (
			<>
				<HeroBanner data={serie} img={img} />
				<h1 className="container__title">Series populares</h1>
				<AliceCarousel
					items={series_slider}
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
				<Pagination page={page} setPage={setPage} TOTAL_PAGES={TOTAL_PAGES} />
			</>
		);
	} else {
		return <p>sin datos</p>;
	}
};

export default Series;
