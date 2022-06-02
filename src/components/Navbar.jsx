import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="header__menu">
			<ul className="aa">
				<li>
					<NavLink
						className={({ isActive }) => {
							return isActive ? 'ac' : 'na';
						}}
						to="/"
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
					>
						Peliculas
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) => {
							return isActive ? 'ac' : 'na';
						}}
						to="/generos"
					>
						Generos
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
