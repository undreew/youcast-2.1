import {buildRouteNodes} from '../utils/build-routes';

// NESTED ROUTES

const POSTS = {
	INDEX: '/posts',

	LIST: '/',
	CREATE: '/create',
	EDIT: '/edit/:postId',

	VIEWS: {
		INDEX: '/:postId',
	},
};

const DASHBOARD = {
	INDEX: '/dashboard',

	POSTS: buildRouteNodes(POSTS),
};

export default DASHBOARD;
