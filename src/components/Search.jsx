import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = ({ setShow }) => {
	const [query, setQuery] = useState('');
	const navigate = useNavigate();
	const handleQuery = e => {
		e.preventDefault();
		setQuery(e.target.value);
	};

	const handleSearch = e => {
		e.preventDefault();
		if (query.length === 0) {
			return false;
		} else {
			setShow(false);
			setQuery('');
			navigate(`/search?results=${query}&page=1`);
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
					value={query}
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
