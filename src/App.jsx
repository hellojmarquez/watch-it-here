import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Series from './components/Series';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Movies from './components/Movies';
import helperFetch from './helper/helperFetch';
import Genders from './components/Genders';
import Search from './components/Search';
function App() {
	const [data, setData] = useState({});
	const urlTrending =
		'https://api.themoviedb.org/3/trending/all/day?api_key=a5990ca05331451c8aa33c049c6d2ca3';
	const imgBaseUrl = 'http://image.tmdb.org/t/p/original';
	let fetchData = helperFetch();
	useEffect(() => {
		fetchData.GET(urlTrending).then(res => setData(res.jsonResponse.results));
	}, []);
	let movie = [];
	let serie = [];
	if (data.length > 0) {
		data.forEach(el => {
			if (el.media_type === 'movie') {
				movie.push(el);
			} else if (el.media_type === 'tv') {
				serie.push(el);
			}
		});
	}
	return (
		<div className="App">
			<header className="header">
				<Search />
				<Navbar />
			</header>
			<Routes>
				<Route
					path="/"
					element={
						<Home movie={movie} serie={serie} data={data} img={imgBaseUrl} />
					}
				/>
				<Route
					path="/series"
					element={<Series serie={serie} img={imgBaseUrl} />}
				/>
				<Route
					path="/movies"
					element={<Movies movie={movie} img={imgBaseUrl} />}
				/>
				<Route path="/generos/*" element={<Genders />} />
			</Routes>
		</div>
	);
}

export default App;
