import HeroBanner from './HeroBanner';
import PopularContent from './MediaContent';

const Home = ({ movie, serie, data, img }) => {
	return (
		<>
			<HeroBanner data={data} img={img} />

			<section className="container">
				<h2 className="container__title">Peliculas populares</h2>
				{movie.length > 0 ? (
					movie.map(el => <PopularContent key={el.id} data={el} img={img} />)
				) : (
					<p className="container__nodata">Sin datos</p>
				)}
			</section>
			<section className="container">
				<h2 className="container__title">Series populares</h2>
				{movie.length > 0 ? (
					serie.map(el => <PopularContent key={el.id} data={el} img={img} />)
				) : (
					<p className="container__nodata">Sin datos</p>
				)}
			</section>
		</>
	);
};

export default Home;
