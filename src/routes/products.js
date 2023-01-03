import Products from 'views/products/index';
import ProductsList from 'views/products/list/index';
import ProductsAdd from 'views/products/add/index';
// import ProductsSearch from '../views/products/search/index';
import ProductsSearch from 'views/products/search/index';

import {ROUTE_PATH} from 'constants/routes';

const products = {
	// path: '/products',
	path: ROUTE_PATH.DASHBOARD.PRODUCTS.INDEX,
	element: <Products />,
	children: [
		// SEARCH
		{
			index: true,
			element: <ProductsList />,
		},
		// LIST
		{
			// path: 'search',
			path: ROUTE_PATH.DASHBOARD.PRODUCTS.SEARCH,
			element: <ProductsSearch />,
		},
		// ADD
		{
			// path: 'add',
			path: ROUTE_PATH.DASHBOARD.PRODUCTS.ADD,
			element: <ProductsAdd />,
		},
	],
};

export default products;
