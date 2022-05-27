import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import helperFetch from '../helper/helperFetch';
import GenresMovies from './GenresMovies';
import GenresNavbar from './GenresNavbar';
import GenresSeries from './GenresSeries';
const Genders = () => {
	const [seriesGenres, setSeriesGenres] = useState([]);
	const [moviesGenres, setMoviesGenres] = useState([]);
	let fetchata = helperFetch();

	useEffect(() => {
		fetchata
			.GET(
				'https://api.themoviedb.org/3/genre/movie/list?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US'
			)
			.then(res => setMoviesGenres(res.jsonResponse.genres));
		fetchata
			.GET(
				'https://api.themoviedb.org/3/genre/tv/list?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US'
			)
			.then(res => setSeriesGenres(res.jsonResponse.genres));
	}, []);
	console.log(seriesGenres);

	return (
		<div>
			<h1>Géneros</h1>
			<GenresNavbar />
			<Routes>
				<Route
					path="/genero-series"
					element={<GenresSeries data={seriesGenres} />}
				></Route>
				<Route
					path="/genero-peliculas"
					element={<GenresMovies data={moviesGenres} />}
				></Route>
			</Routes>
		</div>
	);
};

export default Genders;
