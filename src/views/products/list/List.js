import {InternalLink} from 'components/Links';
import React from 'react';
import {Link} from 'react-router-dom';

import './List.scss';

const DUMMY_DATA = [
	{
		id: 1,
		product_name: 'Nikey',
		description: 'For running.',
	},
	{
		id: 2,
		product_name: 'Air Pods',
		description: 'For music.',
	},
	{
		id: 3,
		product_name: 'Mug',
		description: 'For drinking.',
	},
];

function List() {
	return (
		<div className='products'>
			{DUMMY_DATA.map((item, index) => {
				const {id, product_name, description} = item;

				return (
					<div className='product-item' key={index}>
						<div className='product-item_details'>
							<h4>{product_name}</h4>
							<p>{description}</p>
						</div>
						{/* <Link to={`/products/${id}`}>View</Link> */}
						<InternalLink
							path='DASHBOARD.PRODUCTS.VIEWS.INDEX'
							params={{productId: id}}
						>
							View
						</InternalLink>
					</div>
				);
			})}
		</div>
	);
}

export default List;
