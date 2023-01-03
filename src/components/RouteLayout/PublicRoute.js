import {ROUTE_ACCESS_RULE} from 'constants/routes';
import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from '../../context/AuthContext';

function PublicRoute() {
	const {isAuth} = useAuth;

	let element;
	if (isAuth && ROUTE_ACCESS_RULE.public) {
		element = <Navigate to='*' replace />;
	} else {
		element = <Outlet />;
	}

	return element;
}

export default PublicRoute;
