import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import HeroBanner from './HeroBanner';
import MediaContent from './MediaContent';

const Home = ({ movie, serie, img, data }) => {
	const customeSlider = useRef();
	const handleNext = () => {
		customeSlider.current.slickPrev();
	};
	const handlePrev = () => {
		customeSlider.current.slickNext();
	};
	const sliderSttings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		adaptiveHeight: true,
		arrows: false,
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

	const series_slider = serie.map(i => (
		<MediaContent key={i.id} data={i} img={img} />
	));
	const movies_slider = movie.map(i => (
		<MediaContent key={i.id} data={i} img={img} />
	));
	const heroBanner = data.map(el => (
		<HeroBanner key={el.id} data={el} img={img} />
	));

	return (
		<>
			<button className="slider__btn --prev" onClick={handlePrev}></button>
			<button className="slider__btn --next" onClick={handleNext}></button>
			<Slider {...heroBannerSettings} ref={customeSlider}>
				{heroBanner}
			</Slider>
			<div className="wrapper">
				<h2>Peliculas populares</h2>
				<Slider {...sliderSttings}>{series_slider}</Slider>
				<h2>series populares</h2>
				<Slider {...sliderSttings}>{movies_slider}</Slider>
			</div>
		</>
	);
};

export default Home;
