import landing from './landing';
import login from './login';
import products from './products';
import errors from './errors';

// ROUTE LAYOUT
import PrivateRoute from '../components/RouteLayout/PrivateRoute';
import PublicRoute from '../components/RouteLayout/PublicRoute';

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
];

export default routes;
