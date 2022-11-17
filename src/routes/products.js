import Products from '../views/products/index';
import ProductsList from '../views/products/list/index';
import ProductsAdd from '../views/products/add/index';
import ProductsSearch from '../views/products/search/index';

const products = {
	path: '/products',
	element: <Products />,
	children: [
		// SEARCH
		{
			index: true,
			element: <ProductsList />,
		},
		// LIST
		{
			path: 'search',
			element: <ProductsSearch />,
		},
		// ADD
		{
			path: 'add',
			element: <ProductsAdd />,
		},
	],
};

export default products;
