import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from '../../context/AuthContext';

function PublicRoute() {
	const {isAuth} = useAuth;

	let element;
	if (isAuth) {
		element = <Navigate to='*' replace />;
	} else {
		element = <Outlet />;
	}

	return element;
}

export default PublicRoute;
