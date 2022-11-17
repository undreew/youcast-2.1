import React from 'react';
import {AuthContextProvider} from './context/AuthContext';
import {LayoutContextProvider} from './context/LayoutContext';

function AppProviders(props) {
	const {children} = props;

	return (
		<AuthContextProvider>
			<LayoutContextProvider>{children}</LayoutContextProvider>
		</AuthContextProvider>
	);
}

export default AppProviders;
