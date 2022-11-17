import {useRoutes} from 'react-router-dom';
import routes from '../routes/index';

function Routes() {
	const renderedRoutes = useRoutes(routes);

	return renderedRoutes;
}

export {Routes};
