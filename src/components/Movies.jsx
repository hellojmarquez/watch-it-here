import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import helperFetch from '../helper/helperFetch';
import HeroBanner from './HeroBanner';
import MediaContent from './MediaContent';
import { useLocation } from 'react-router-dom';
import Pagination from './Pagination';

const Movies = ({ movie, img }) => {
	const customeSlider = useRef();
	const { search } = useLocation();
	let query = new URLSearchParams(search);
	const [page, setPage] = useState(Number(query.get('page') || 1));
	const [TOTAL_PAGES, setTOTAL_PAGES] = useState(0);
	const [more, setMore] = useState([]);

	const movies_slider = movie.map(i => (
		<MediaContent key={i.id} data={i} img={img} />
	));
	const URL = `https://api.themoviedb.org/3/discover/movie?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}&with_watch_monetization_types=flatrat`;
	const customFetch = helperFetch();
	const handleNext = () => {
		customeSlider.current.slickPrev();
	};
	const handlePrev = () => {
		customeSlider.current.slickNext();
	};
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 440,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 325,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
				},
			},
		],
	};
	const heroBannerSettings = {
		dots: false,
		infinite: true,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 5000,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		pauseOnHover: true,
		arrows: false,
	};
	const heroBanner = movie.map(el => (
		<HeroBanner key={el.id} data={el} img={img} />
	));

	useEffect(() => {
		customFetch
			.GET(URL)
			.then(r => r)
			.then(res => {
				setTOTAL_PAGES(Number(res.total_pages));
				setMore(res.results);
			});
	}, [page]);
	if (movie.length > 0) {
		return (
			<>
				<button className="slider__btn --prev" onClick={handlePrev}></button>
				<button className="slider__btn --next" onClick={handleNext}></button>
				<Slider {...heroBannerSettings} ref={customeSlider}>
					{heroBanner}
				</Slider>
				<div className="wrapper">
					<h1>Peliculas populares</h1>
					<Slider {...settings}>{movies_slider}</Slider>
					<h2>Más peliculas</h2>
					<section className="container">
						{more.length > 0 ? (
							more.map(el => <MediaContent key={el.id} data={el} img={img} />)
						) : (
							<p className="container__nodata">sin datos</p>
						)}
					</section>
				</div>
				<Pagination page={page} setPage={setPage} TOTAL_PAGES={TOTAL_PAGES} />
			</>
		);
	} else {
		return <p>sin datos</p>;
	}
};

export default Movies;
