import Loadable from 'components/Loadable';
import {ROUTE_PATH} from 'constants/routes';

// import Errors from '../views/errors/index';
const Errors = Loadable(() => import('views/errors/index.js'));

const errors = {
	// path: '/error/:code',
	path: ROUTE_PATH.ERROR,
	element: <Errors />,
};

export default errors;
