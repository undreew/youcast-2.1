import React from 'react';
import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';
import PageLoading from '../../components/Loadings/PageLoading';

function Loadable(component) {
	return loadable(() => pMinDelay(component(), 150), {
		fallback: <PageLoading isLoading />,
	});
}

export default Loadable;
