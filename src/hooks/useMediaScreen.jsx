import { useEffect, useState } from 'react';

export const useMediaScreen = () => {
	const [widthScreen, setWidthScreen] = useState(window.innerWidth);
	useEffect(() => {
		const resize = () => {
			setWidthScreen(window.innerWidth);
		};
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);
	return { widthScreen };
};
