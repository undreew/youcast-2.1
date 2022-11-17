import React from 'react';
import {Link} from 'react-router-dom';

import './Navigation.scss';

const navItems = [
	{
		to: '/',
		text: 'Home',
	},
	{
		to: '/login',
		text: 'Login',
	},
	{
		to: '/products',
		text: 'Products',
	},
];

function Navigation() {
	return (
		<nav className='navigation'>
			{navItems.map((item, index) => {
				const {to, text} = item;

				return (
					<Link key={index} to={to} className='nav-item'>
						{text}
					</Link>
				);
			})}
		</nav>
	);
}

export default Navigation;
