import React, { useEffect, useState } from 'react';
import helperFetch from '../helper/helperFetch';

const Search = () => {
	const [query, setQuery] = useState('');
	const handleQuery = e => {
		e.preventDefault();
		setQuery(e.target.value);
	};
	const handleSearch = () => {
		const f = helperFetch();
		f.GET(
			`https://api.themoviedb.org/3/search/multi?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US&query=${query}&page=1&include_adult=true`
		)
			.then(r => r)
			.then(res => console.log(res.jsonResponse.results));
	};

	return (
		<div>
			<form action="">
				<input
					type="text"
					name=""
					placeholder="Buscar"
					onChange={handleQuery}
				/>
				<input type="button" value="Buscar" onClick={handleSearch} />
			</form>
		</div>
	);
};

export default Search;
