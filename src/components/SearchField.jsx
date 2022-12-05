import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import helperFetch from '../helper/helperFetch';
import MediaContent from './MediaContent';
import Pagination from './Pagination';

const SearchField = ({ img }) => {
	const customFetch = helperFetch();
	const [data, setData] = useState([]);
	const { search } = useLocation();
	let query = new URLSearchParams(search);

	const [search_req, setSearch_req] = useState(query.get('results'));
	const [page, setPage] = useState(Number(query.get('page') || 1));
	const [TOTAL_PAGES, setTOTAL_PAGES] = useState(0);
	const URL = `https://api.themoviedb.org/3/search/multi?api_key=a5990ca05331451c8aa33c049c6d2ca3&language=en-US&query=${search_req}&page=${page}&include_adult=false`;

	useEffect(() => {
		customFetch
			.GET(URL)
			.then(r => r)
			.then(res => {
				setData(res.results), setTOTAL_PAGES(Number(res.total_pages));
			});
		setSearch_req(query.get('results'));
	}, [query]);

	return (
		<>
			{data.length > 0 && (
				<div>
					<p className="search__title">
						<b>
							Se han encontrado <i>"{data.length}"</i> resultados
						</b>
					</p>
					<section className="container">
						{data.map(el => (
							<MediaContent key={el.id} data={el} img={img} />
						))}
					</section>
					<Pagination
						search_req={search_req}
						page={page}
						setPage={setPage}
						TOTAL_PAGES={TOTAL_PAGES}
					/>
				</div>
			)}
		</>
	);
};

export default SearchField;
