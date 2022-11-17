import React from 'react';
import {Link} from 'react-router-dom';
import {PageHeaderNavItem} from './PageHeaderNavPrivate';

import './PageHeaderNavPublic.scss';

function PageHeaderNavPublic() {
	return (
		<div className='header-nav-public'>
			<PageHeaderNavItem>
				<Link to='/wild-dogs'>Wild Doggo</Link>
			</PageHeaderNavItem>

			<PageHeaderNavItem>
				<Link to='/contact'>Contact</Link>
			</PageHeaderNavItem>

			<PageHeaderNavItem>
				<Link to='/about'>About</Link>
			</PageHeaderNavItem>

			<PageHeaderNavItem>
				<Link to='/login'>Log In</Link>
			</PageHeaderNavItem>

			<PageHeaderNavItem>
				<Link to='/signup'>Sign Up</Link>
			</PageHeaderNavItem>

			{/* MOBILE BUTTON */}
		</div>
	);
}

export default PageHeaderNavPublic;
