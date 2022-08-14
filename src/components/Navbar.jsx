import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';
import open from '../../assets/more.png';
import close from '../../assets/close.png';

const Navbar = ({ setDataSearch, dataSearch }) => {
	const [show, setShow] = useState(false);
	const handleShow = () => {
		setShow(true);
	};
	const handleCLose = () => {
		setShow(false);
	};
	return (
		<>
			<img
				className="header__menu-icon header__menu-icon-open"
				src={open}
				alt="menu_icon"
				onClick={handleShow}
			/>
			<>
				<nav className={show ? 'header__menu no-display' : 'header__menu'}>
					<img
						className="header__menu-icon header__menu-cross-icon"
						src={close}
						alt="close"
						onClick={handleCLose}
					/>
					<Search
						setDataSearch={setDataSearch}
						setShow={setShow}
						dataSearch={dataSearch}
					/>
					<ul className="aa">
						<li>
							<NavLink
								className={({ isActive }) => {
									return isActive ? 'ac' : 'na';
								}}
								to="/"
								onClick={handleCLose}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => {
									return isActive ? 'ac' : 'na';
								}}
								to="/series"
								onClick={handleCLose}
							>
								Series
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => {
									return isActive ? 'ac' : 'na';
								}}
								to="/movies"
								onClick={handleCLose}
							>
								Peliculas
							</NavLink>
						</li>
					</ul>
				</nav>
			</>
			{/* )} */}
		</>
	);
};

export default Navbar;
