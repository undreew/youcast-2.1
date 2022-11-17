import React from 'react';
import {Link} from 'react-router-dom';

import './PageFooter.scss';

function PageFooter() {
	return (
		<footer className='footer'>
			<Link to='/wild-dogs'>Wild Doggo</Link>
			<Link to='/contact'>Contact</Link>
			<Link to='/about'>About</Link>
		</footer>
	);
}

export default PageFooter;
