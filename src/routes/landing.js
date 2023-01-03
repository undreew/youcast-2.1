// import Landing from '../views/landing/index';
import Loadable from 'components/Loadable';
import {ROUTE_PATH} from 'constants/routes';

const Landing = Loadable(() => import('views/landing/index.js'));

const landing = {
	path: ROUTE_PATH.HOME,
	// element: <Landing />,
	element: <Landing />,
};

export default landing;
