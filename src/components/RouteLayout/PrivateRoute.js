import {ROUTE_ACCESS_RULE} from 'constants/routes';
import {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from '../../context/AuthContext';

function PrivateRoute() {
	const {isAuth} = useAuth();

	let element;
	if (isAuth && ROUTE_ACCESS_RULE.private) {
		element = <Outlet />;
	} else {
		element = <Navigate to='*' replace />;
	}

	return element;
}

export default PrivateRoute;
