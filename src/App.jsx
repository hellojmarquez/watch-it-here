import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Series from './components/Series';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Movies from './components/Movies';
import helperFetch from './helper/helperFetch';

function App() {
	const [db, setDb] = useState([]);
	const URL =
		'https://api.themoviedb.org/3/trending/all/day?api_key=a5990ca05331451c8aa33c049c6d2ca3';

	const datos = helperFetch();
	useEffect(() => {
		datos.GET(URL).then(r => setDb(r.jsonResponse.results));
	}, []);
	console.log(db);
	//752623
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={db.map(el => (
						<Home key={el.id} dat={el} />
					))}
				/>
				<Route path="/series" element={<Series />} />
				<Route path="/movies" element={<Movies />} />
			</Routes>
		</div>
	);
}

export default App;
