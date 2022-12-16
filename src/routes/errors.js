import Loadable from 'components/Loadable';

// import Errors from '../views/errors/index';
const Errors = Loadable(() => import('views/errors/index.js'));

const errors = {
	path: '/error/:code',
	element: <Errors />,
};

export default errors;
