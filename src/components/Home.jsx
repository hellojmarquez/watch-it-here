import AliceCarousel from 'react-alice-carousel';
import { motion } from 'framer-motion';
import 'react-alice-carousel/lib/alice-carousel.css';
import HeroBanner from './HeroBanner';
import MediaContent from './MediaContent';
import { useMediaScreen } from '../hooks/useMediaScreen';
import { useEffect, useRef, useState } from 'react';

const Home = ({ movie, serie, img }) => {
	const sliderContainer = useRef(null);
	const [left, setLeft] = useState();
	const { widthScreen } = useMediaScreen();

	useEffect(() => {
		const scroll =
			sliderContainer.current.scrollWidth - sliderContainer.current.offsetWidth;
		setLeft(-scroll);
		// setTimeout(() => {
		// }, 500);
	}, [widthScreen]);

	// const series_slider = serie.map(i => <MediaContent data={i} img={img} />);
	// const movies_slider = movie.map(i => <MediaContent data={i} img={img} />);
	// const mediaq = {
	// 	0: {
	// 		items: 1,
	// 	},
	// 	480: {
	// 		items: 2,
	// 	},
	// 	720: {
	// 		items: 3,
	// 	},
	// 	1024: {
	// 		items: 6,
	// 	},
	// };

	return (
		<>
			<HeroBanner data={serie} img={img} />
			<div className="sli">
				<motion.div
					className="sli__container"
					drag="x"
					dragConstraints={{ right: 0, left }}
					ref={sliderContainer}
				>
					{movie.map(el => (
						<MediaContent key={el.id} data={el} img={img} />
					))}
				</motion.div>
			</div>
			{/* <h2 className="container__title">Series populares</h2>
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
			/> */}
		</>
	);
};

export default Home;
