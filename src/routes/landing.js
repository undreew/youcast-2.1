// import Landing from '../views/landing/index';
import Loadable from '../components/Loadable';

const Landing = Loadable(() => import('../views/landing/index.js'));

const landing = {
	path: '/',
	// element: <Landing />,
	element: <Landing />,
};

export default landing;
