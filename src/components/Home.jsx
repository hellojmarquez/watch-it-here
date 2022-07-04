import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HeroBanner from './HeroBanner';
import MediaContent from './MediaContent';

const Home = ({ movie, serie, img }) => {
	const series_slider = serie.map(i => <MediaContent data={i} img={img} />);
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
			items: 6,
		},
	};

	return (
		<>
			<HeroBanner data={serie} img={img} />
			<h2 className="container__title">Series populares</h2>
			<AliceCarousel
				items={movies_slider}
				responsive={mediaq}
				animationDuration={200}
				mouseTracking
				touchTracking
				disableButtonsControls
				disableDotsControls
			/>
			<h2 className="container__title">Peliculas populares</h2>
			<AliceCarousel
				items={series_slider}
				responsive={mediaq}
				animationDuration={200}
				mouseTracking
				touchTracking
				disableButtonsControls
				disableDotsControls
			/>
		</>
	);
};

export default Home;
