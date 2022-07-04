import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = ({ page, setPage, totalPages }) => {
	const [buttonsArr, setButtonsArr] = useState([1, 2, 3, 4, 5]);
	const navigate = useNavigate();
	let START = buttonsArr[0];
	let END = buttonsArr[buttonsArr.length - 1];
	const handleBackward = () => {
		setButtonsArr(buttonsArr.map(el => el - 5));
		console.log(buttonsArr);
		navigate(`?page=${page}`);
	};
	const handleForward = () => {
		let newArr = buttonsArr.map(el => el + 5);
		setButtonsArr(newArr);
		setPage(newArr[0]);
		navigate(`?page=${page}`);
		// let i = 1;
		// while (page != START) {
		// 	i++;
		// 	console.log('START: ', START, 'page: ', page);
		// 	console.log(i);
		// }
		// console.log('iguales');
		// navigate(`?page=${page}`);
		// if (newArr === buttonsArr) {
		// 	console.log('iguales');
		// } else {
		// 	console.log('distintos');
		// }

		// if (page < totalPages) {
		// 	setButtonsArr(buttonsArr.map(el => el + 5));
		// 	console.log(buttonsArr);
		// 	navigate(`?page=${page}`);
		// }
	};

	const handleNext = () => {
		if (page === END) {
			console.log(`pagina? ${page} end: ${END}`);
			setButtonsArr(buttonsArr.map(el => el + 5));
			navigate(`?page=${page + 1}`);
			setPage(page + 1);
		} else if (page < END) {
			buttonsArr.forEach(el => {
				if (page === el) {
					navigate(`?page=${el + 1}`);
					setPage(page + 1);
				}
			});
		}
	};
	const handlePrev = () => {
		if (page === START) {
			console.log(`pagina? ${page} end: ${END}`);
			setButtonsArr(buttonsArr.map(el => el - 5));
			navigate(`?page=${page - 1}`);
			setPage(page - 1);
		} else if (page <= END) {
			buttonsArr.forEach(el => {
				if (page === el) {
					navigate(`?page=${el - 1}`);
					setPage(page - 1);
				}
			});
		}
	};
	const handleChangePage = e => {
		const actual = Number(e.target.textContent);
		setPage(actual);
		navigate(`?page=${actual}`);
	};
	return (
		<>
			<ul className="navigation">
				<a className="list__btn --backward" onClick={handleBackward}></a>

				{page <= 5 ? (
					<a className="list__btn --prev visib" onClick={handlePrev}></a>
				) : (
					<a className="list__btn --prev" onClick={handlePrev}></a>
				)}
				<div className="list">
					{buttonsArr.map((el, index) => (
						<li className="list__item" key={index}>
							<a onClick={handleChangePage}>{el}</a>
						</li>
					))}
				</div>
				{page !== totalPages && (
					<a className="list__btn --next" onClick={handleNext}></a>
				)}
				<a className="list__btn --forward" onClick={handleForward}></a>
			</ul>
			<p className="navigation__pages">
				pagina{' '}
				<b>
					{page} de <b>{totalPages}</b>
				</b>
			</p>
		</>
	);
};

export default Navigation;
