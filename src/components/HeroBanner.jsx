import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroBanner = ({ img, data }) => {
	const slicedData = data.slice(0, 6);
	const sliderRef = useRef(null);
	const intervalSlider = useRef(null);
	const navigate = useNavigate();
	const handleNext = () => {
		if (sliderRef.current.children.length > 0) {
			const firstElement = sliderRef.current.children[0];
			sliderRef.current.style.transition = '500ms ease-out all';
			const sliderwith = sliderRef.current.children[0].offsetWidth;
			sliderRef.current.style.transform = `translateX(-${sliderwith}px)`;
			const transitionEnd = () => {
				sliderRef.current.style.transition = 'none';
				sliderRef.current.style.transform = 'translateX(0)';
				sliderRef.current.appendChild(firstElement);
				sliderRef.current.removeEventListener('transitionend', transitionEnd);
			};
			sliderRef.current.addEventListener('transitionend', transitionEnd);
		}
	};
	const handlePrev = () => {
		if (sliderRef.current.children.length > 0) {
			const INDEX = sliderRef.current.children.length - 1;
			const lastElement = sliderRef.current.children[INDEX];
			sliderRef.current.insertBefore(lastElement, sliderRef.current.firstChild);
			sliderRef.current.style.transition = 'none';
			const sliderwith = sliderRef.current.children[0].offsetWidth;
			sliderRef.current.style.transform = `translateX(-${sliderwith}px)`;
			setTimeout(() => {
				sliderRef.current.style.transition = '500ms ease-out all';
				sliderRef.current.style.transform = `translateX(0)`;
			}, 30);
		}
	};
	const stopInterval = () => {
		console.log('entrando');
		clearInterval(intervalSlider.current);
	};
	const reanudeInterval = () => {
		console.log('saliendo');
		intervalSlider.current = setInterval(() => {
			handleNext();
		}, 6000);
	};
	useEffect(() => {
		intervalSlider.current = setInterval(() => {
			handleNext();
		}, 5000);
	}, []);
	const handleClick = ({ id, media }) => {
		const search = {
			id: id,
			media: media,
		};
		window.localStorage.setItem('search', JSON.stringify(search));
		navigate('/vid');
	};

	return (
		<>
			<div className="hero-banner">
				<div
					className="slider"
					ref={sliderRef}
					onMouseEnter={stopInterval}
					onMouseLeave={reanudeInterval}
				>
					{slicedData.map(el => (
						<div
							key={el.id}
							className="slider__element"
							style={{ backgroundImage: `url(${img}${el.poster_path})` }}
						>
							<div className="hero-info">
								<h2 className="hero-info__title">{el.title || el.name}</h2>
								<a onClick={() => handleClick(el)} className="hero-info__btn">
									ver ahora
								</a>
							</div>
						</div>

						// src={img + }
					))}
				</div>

				<button className="slider__btn --prev" onClick={handleNext}></button>
				<button className="slider__btn --next" onClick={handlePrev}></button>
			</div>
		</>
	);
};

export default HeroBanner;
