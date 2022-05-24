import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Series from './components/Series';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Movies from './components/Movies';
import helperFetch from './helper/helperFetch';

function App() {
	const [db, setDb] = useState('');
	useEffect(() => {
		const URL =
			'https://api.themoviedb.org/3/tv/1418/season/2?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=es-ES';

		const data = helperFetch();
		data.GET(URL);
		// console.log(ml);
		// let nn = async () => {
		// 	let ff = await helperFetch(UR);
		// 	console.log(ff);
		// };
		// return nn;
	}, []);
	//752623
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/series" element={<Series />} />
				<Route path="/movies" element={<Movies />} />
			</Routes>
		</div>
	);
}

export default App;
