import { useRef } from 'react';
import HeroBanner from './HeroBanner';
import MediaContent from './MediaContent';

const Home = ({ movie, serie, data, img }) => {
	const myRef = useRef();
	let isDown = false;
	let startX;
	let scrollLeft;
	const mym = e => {
		isDown = true;
		startX = e.pageX - myRef.current.offsetLeft;
		scrollLeft = myRef.current.scrollLeft;
	};
	const mouseL = () => {
		isDown = false;
	};
	const mouseUp = () => {
		isDown = false;
	};
	const mouseM = e => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - myRef.current.offsetLeft;
		const walk = x - startX;
		myRef.scrollLeft = scrollLeft - walk;
	};

	return (
		<>
			<HeroBanner data={serie} img={img} />
			<section className="container">
				<h2 className="container__title">Peliculas populares</h2>

				<div
					ref={myRef}
					onMouseDown={mym}
					onMouseLeave={mouseL}
					onMouseMove={mouseM}
					onMouseUp={mouseUp}
					className="card-container"
				>
					{movie.length > 0 ? (
						movie.map(el => <MediaContent key={el.id} data={el} img={img} />)
					) : (
						<p className="container__nodata">Sin datos</p>
					)}
				</div>
			</section>
			<section className="container">
				<h2 className="container__title">Series populares</h2>
				<div
					ref={myRef}
					onMouseLeave={mouseL}
					onMouseDown={mym}
					onMouseMove={mouseM}
					className="card-container"
				>
					{movie.length > 0 ? (
						serie.map(el => <MediaContent key={el.id} data={el} img={img} />)
					) : (
						<p className="container__nodata">Sin datos</p>
					)}
				</div>
			</section>
		</>
	);
};

export default Home;
