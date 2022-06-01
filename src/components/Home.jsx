import HeroBanner from './HeroBanner';
import PopularContent from './MediaContent';

const Home = ({ movie, serie, data, img }) => {
	return (
		<>
			<HeroBanner data={data} img={img} />
			<h2>Peliculas populares</h2>
			{movie.length > 0 ? (
				movie.map(el => <PopularContent key={el.id} data={el} img={img} />)
			) : (
				<p>Sin datos</p>
			)}
			<h2>Series populares</h2>
			{movie.length > 0 ? (
				serie.map(el => <PopularContent key={el.id} data={el} img={img} />)
			) : (
				<p>Sin datos</p>
			)}
		</>
	);
};

export default Home;
