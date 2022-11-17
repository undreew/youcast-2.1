import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import './ProductsHeader.scss';

const headers = [
	{
		to: '/products',
		text: 'List',
	},
	{
		to: 'search',
		text: 'Search',
	},
	{
		to: 'add',
		text: 'Add Product',
	},
];

function ProductsHeader() {
	return (
		<header className='products-header'>
			{headers.map((item, index) => {
				const {to, text} = item;

				return (
					<NavLink key={index} to={to} className='products-header__item'>
						{text}
					</NavLink>
				);
			})}
		</header>
	);
}

export default ProductsHeader;
