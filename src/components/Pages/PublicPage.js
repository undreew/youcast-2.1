import React from 'react';
import Navigation from '../Navigation/Navigation';

import './PublicPage.scss';

function PublicPage(props) {
	const {children} = props;

	return (
		<>
			<Navigation />
			<div className='public-page'>{children}</div>
		</>
	);
}

export default PublicPage;
