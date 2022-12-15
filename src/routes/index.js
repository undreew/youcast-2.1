import landing from './landing';
import login from './login';

// PRIVATE ROUTES
import products from './products';

// ERROR ROUTE
import errors from './errors';

// ROUTE LAYOUT
import PrivateRoute from '../components/RouteLayout/PrivateRoute';
import PublicRoute from '../components/RouteLayout/PublicRoute';

import Loadable from '../components/Loadable';

const Error = Loadable(() => import('../views/errors/index.js'));

const routes = [
	{
		element: <PublicRoute />,
		children: [{...landing}, {...login}],
	},
	{
		element: <PrivateRoute />,
		children: [{...products}],
	},
	{
		...errors,
	},
	{
		path: '/not-found',
		element: <Error />,
	},
	{
		path: '*',
		element: <Error />,
	},
];

export default routes;
