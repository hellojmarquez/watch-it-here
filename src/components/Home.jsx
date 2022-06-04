import { useRef } from 'react';
import { Routes } from 'react-router-dom';
import HeroBanner from './HeroBanner';
import MediaContent from './MediaContent';

const Home = ({ movie, serie, data, img, setMediat, setId }) => {
	const myRef = useRef();
	let isDown = false;
	let startX;
	let scrollLeft;
	const mym = e => {
		console.log(e.pageX);
		isDown = true;
		startX = e.pageX - myRef.current.offsetLeft;
		scrollLeft = myRef.current.scrollLeft;
	};
	const mouseL = () => {
		isDown = false;
	};
	const mouseM = e => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - myRef.current.offsetLeft;
		const walk = x - startX;
		myRef.current.scrollLeft = scrollLeft - walk;
	};

	return (
		<>
			<HeroBanner data={data} img={img} />
			{/* <button ref={myRef}>boton random</button> */}
			<section className="container">
				<h2 className="container__title">Peliculas populares</h2>

				<div
					ref={myRef}
					onMouseLeave={mouseL}
					onMouseDown={mym}
					onMouseMove={mouseM}
					className="card-container"
				>
					{movie.length > 0 ? (
						movie.map(el => (
							<MediaContent
								key={el.id}
								data={el}
								img={img}
								setMediat={setMediat}
								setId={setId}
							/>
						))
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
						serie.map(el => (
							<MediaContent
								key={el.id}
								data={el}
								img={img}
								setMediat={setMediat}
								setId={setId}
							/>
						))
					) : (
						<p className="container__nodata">Sin datos</p>
					)}
				</div>
			</section>
		</>
	);
};

export default Home;
