import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Pagination = ({ page, setPage, TOTAL_PAGES }) => {
	const [buttonsArr, setButtonsArr] = useState([1, 2, 3, 4, 5]);
	const navigate = useNavigate();
	let START = buttonsArr[0];
	let END = buttonsArr[buttonsArr.length - 1];
	const handleBackward = () => {
		if (START === 1) return;
		setButtonsArr(buttonsArr.map(el => el - 5));
		navigate(`?page=${page}`);
	};
	const handleForward = () => {
		if (END >= TOTAL_PAGES) return;
		const newButtonsArr = buttonsArr.map(el => el + 5);
		setButtonsArr(newButtonsArr);
	};
	const handleNext = () => {
		if (END >= TOTAL_PAGES) return;
		if (page === END) {
			setButtonsArr(buttonsArr.map(el => el + 5));
			navigate(`?page=${page + 1}`);
			setPage(page + 1);
		} else if (page < END) {
			buttonsArr.forEach(el => {
				if (page === el) {
					navigate(`?page=${el + 1}`);
					setPage(page => page + 1);
				}
			});
		}
	};
	const handlePrev = () => {
		if (page === START) {
			console.log(`pagina? ${page} end: ${END}`);
			setButtonsArr(buttonsArr.map(el => el - 5));
			navigate(`?page=${page - 1}`);
			setPage(page => page - 1);
		} else if (page <= END) {
			buttonsArr.forEach(el => {
				if (page === el) {
					navigate(`?page=${el - 1}`);
					setPage(page => page - 1);
				}
			});
		}
	};
	const handleChangePage = e => {
		const actual = Number(e.target.textContent);
		setPage(actual);
		navigate(`?page=${actual}`);
	};

	useEffect(() => {
		if (page === START || START == 1) return;
		if (page <= START) {
			setPage(START);
			navigate(`?page=${START}`);
		} else {
			setPage(END);
			navigate(`?page=${END}`);
		}
	}, [buttonsArr]);

	return (
		<>
			<ul className="navigation">
				<a
					className={
						START === 1
							? 'list__btn --backward disabled'
							: 'list__btn --backward'
					}
					onClick={handleBackward}
				></a>
				<a
					className={
						START === 1 ? 'list__btn --prev disabled' : 'list__btn --prev'
					}
					onClick={handlePrev}
				></a>

				<div className="list">
					{buttonsArr.map((el, index) => (
						<li className={el > TOTAL_PAGES ? 'hidden' : ''} key={index}>
							<a className={el == page ? 'ac' : ''} onClick={handleChangePage}>
								{el}
							</a>
						</li>
					))}
				</div>
				<>
					<a
						className={
							END >= TOTAL_PAGES
								? 'list__btn --next disabled'
								: 'list__btn --next'
						}
						onClick={handleNext}
					></a>
					<a
						className={
							END >= TOTAL_PAGES
								? 'list__btn --forward disabled'
								: 'list__btn --forward'
						}
						onClick={handleForward}
					></a>
				</>
			</ul>
			<p className="navigation__pages">
				pagina{' '}
				<b>
					{page} de <b>{TOTAL_PAGES}</b>
				</b>
			</p>
		</>
	);
};

export default Pagination;
