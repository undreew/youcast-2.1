import {buildRouteNodes} from '../utils/build-routes';

// NESTED ROUTES

const PRODUCTS = {
	INDEX: '/products',

	LIST: '/',
	ADD: '/add',
	EDIT: '/edit/:productId',
	SEARCH: '/search',

	VIEWS: {
		INDEX: '/:productId',
	},
};

const DASHBOARD = {
	INDEX: '/dashboard',

	PRODUCTS: buildRouteNodes(PRODUCTS),
};

export default DASHBOARD;
