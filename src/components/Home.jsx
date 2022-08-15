import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import HeroBanner from './HeroBanner';
import MediaContent from './MediaContent';

const Home = ({ movie, serie, img }) => {
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

	const series_slider = serie.map(i => (
		<MediaContent key={i.id} data={i} img={img} />
	));
	const movies_slider = movie.map(i => (
		<MediaContent key={i.id} data={i} img={img} />
	));

	return (
		<>
			<HeroBanner data={serie} img={img} />
			<div className="wrapper">
				<h2>Peliculas populares</h2>
				<Slider {...settings}>{series_slider}</Slider>
				<h2>series populares</h2>
				<Slider {...settings}>{movies_slider}</Slider>
			</div>
		</>
	);
};

export default Home;
