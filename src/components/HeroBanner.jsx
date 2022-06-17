import React, { useEffect, useRef, useState } from 'react';

const HeroBanner = ({ img, data }) => {
	const slicedData = data.slice(0, 6);
	const sliderRef = useRef(null);
	const intervalSlider = useRef(null);
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
		}, 5000);
	};
	useEffect(() => {
		intervalSlider.current = setInterval(() => {
			handleNext();
		}, 5000);
		// sliderRef.current.addEventListener('mouseenter', () => {});
		// sliderRef.current.addEventListener('mouseleave', () => {});
	}, []);

	// let isInTransition = false;
	// let sliderAll = [];
	// if (slicedData.length > 0) {
	// 	sliderAll = Array.from(document.querySelectorAll('.slider__element'));
	// }
	// console.log(sliderAll);
	// let rootStyles = document.documentElement.style;
	// let slideCounter = 0;
	// const DIRECTION = {
	// 	RIGTH: 'RIGTH',
	// 	LEFT: 'LEFT',
	// };

	// const getTransformValue = () =>
	// 	Number(rootStyles.getPropertyValue('--slide-transform').replace('px', ''));
	// const reOrderSlide = () => {
	// 	rootStyles.setProperty('--transition', 'none');
	// 	const transformValue = getTransformValue();
	// 	if (sliderAll.length > 0) {
	// 		if (slideCounter === sliderAll.length - 1) {
	// 			sliderRef.current.appendChild(sliderAll[0]);
	// 			rootStyles.setProperty(
	// 				'--slide-transform',
	// 				`${transformValue + sliderAll[slideCounter].scrollWidth}px`
	// 			);
	// 			slideCounter--;
	// 		} else if (slideCounter === 0) {
	// 			sliderRef.current.prepend(sliderAll[6]);
	// 			rootStyles.setProperty(
	// 				'--slide-transform',
	// 				`${transformValue + sliderAll[slideCounter].scrollWidth}px`
	// 			);
	// 			slideCounter++;
	// 		}
	// 	}
	// 	isInTransition = false;
	// };
	// useEffect(() => {
	// 	reOrderSlide();
	// }, []);

	// const moveSlide = direction => {
	// 	if (sliderAll.length > 0) {
	// 		if (isInTransition) return;
	// 		rootStyles.setProperty('--transition', 'transform 1s');
	// 		isInTransition = true;
	// 		const transformValue = getTransformValue();
	// 		if (direction === DIRECTION.LEFT) {
	// 			rootStyles.setProperty(
	// 				'--slide-transform',
	// 				`${transformValue + sliderAll[slideCounter].scrollWidth}px`
	// 			);
	// 			slideCounter--;
	// 		} else if (direction === DIRECTION.RIGTH) {
	// 			rootStyles.setProperty(
	// 				'--slide-transform',
	// 				`${transformValue - sliderAll[slideCounter].scrollWidth}px`
	// 			);
	// 			slideCounter++;
	// 		}
	// 	}
	// };

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
						<img
							src={img + el.poster_path}
							key={el.id}
							className="slider__element"
						></img>
					))}
				</div>
				<button className="slider__btn --prev" onClick={handlePrev}>
					Next
				</button>
				<button className="slider__btn --next" onClick={handleNext}>
					Prev
				</button>
			</div>
		</>
	);
};

export default HeroBanner;
