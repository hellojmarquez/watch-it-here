import React, { useEffect, useState } from 'react';
import MediaContent3 from './MediaContent3';

const SearchField = ({ dataSearch, img }) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		if (dataSearch.length > 0) {
			window.localStorage.setItem('datasearch', JSON.stringify(dataSearch));
		}
	}, [dataSearch]);

	setTimeout(() => {
		const data = window.localStorage.getItem('datasearch');
		if (data) setData(JSON.parse(data));
	}, 2000);

	return (
		<div>
			{data.length > 0 && (
				<>
					<p className="search__title">
						<b>
							Se han encontrado <i>"{data.length}"</i> resultados
						</b>
					</p>
					<section className="container">
						{data.map(el => (
							<MediaContent3 key={el.id} data={el} img={img} />
						))}
					</section>
				</>
			)}
		</div>
	);
};

export default SearchField;
