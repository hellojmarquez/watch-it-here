import React, { useEffect, useState } from 'react';
import MediaContent2 from './MediaContent2';

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
			<section className="container">
				{data.length > 0 && (
					<>
						<p>
							<b>
								Se han encontrado <i>"{data.length}"</i> resultados
							</b>
						</p>
						{data.map(el => (
							<MediaContent2 key={el.id} data={el} img={img} />
						))}
					</>
				)}
			</section>
		</div>
	);
};

export default SearchField;
