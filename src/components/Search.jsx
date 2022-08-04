import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import helperFetch from '../helper/helperFetch';

const Search = ({ setShow, setDataSearch }) => {
	const [query, setQuery] = useState('');
	const [bol, setBol] = useState(false);
	const navigate = useNavigate();
	const handleQuery = e => {
		e.preventDefault();
		setQuery(e.target.value);
	};
	useEffect(() => {
		setBol(false);
	}, []);
	const handleSearch = e => {
		e.preventDefault();
		if (query.length === 0) {
			return false;
		} else {
			const f = helperFetch();
			f.GET(
				`https://api.themoviedb.org/3/search/multi?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US&query=${query}&page=1&include_adult=true`
			)
				.then(r => r)
				.then(res => setDataSearch(res.results));
			setShow(false);
			navigate('/search');
		}
	};

	return (
		<div>
			<form className="header__form">
				<input
					type="search"
					className="header__input"
					placeholder="Buscar"
					onChange={handleQuery}
				/>
				<input
					className="form__btn"
					type="submit"
					value="Buscar"
					onClick={handleSearch}
				/>
			</form>
		</div>
	);
};

export default Search;
