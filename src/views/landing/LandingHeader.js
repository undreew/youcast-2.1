import {InternalLink} from 'components/Links';
import React from 'react';

function LandingHeader() {
	return (
		<>
			<h1>Home</h1>
			<InternalLink path='DASHBOARD.PRODUCTS.INDEX'>Products</InternalLink>
		</>
	);
}

export default LandingHeader;
