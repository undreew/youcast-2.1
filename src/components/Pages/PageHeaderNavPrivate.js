import {InternalLink} from 'components/Links';
import React from 'react';
import {Link} from 'react-router-dom';

import './PageHeaderNavPrivate.scss';

import PageHeaderNavPrivateUser from './PageHeaderNavPrivateUser';

const PrivateItem = (props) => {
	const {children, ...rest} = props;

	return (
		<div className='header-nav-private-item' {...rest}>
			{children}
		</div>
	);
};

export function PageHeaderNavItem(props) {
	const {children} = props;

	return <div className='header-nav-item'>{children}</div>;
}

function PageHeaderNavPrivate() {
	return (
		<div className='header-nav-private'>
			<div className='header-nav-private-left-content'>
				<PageHeaderNavItem>
					<Link to='/wild-dogs' className=''>
						Wild Doggo
					</Link>
				</PageHeaderNavItem>

				<PageHeaderNavItem>
					<Link to='/contact' className=''>
						Contact
					</Link>
				</PageHeaderNavItem>

				<PageHeaderNavItem className=''>
					<Link to='/about'>About</Link>
				</PageHeaderNavItem>

				<PageHeaderNavItem className=''>
					<InternalLink path='DASHBOARD.PRODUCTS.INDEX'>Products</InternalLink>
				</PageHeaderNavItem>
			</div>

			<PrivateItem>
				{/* DASHBOARD BUTTON */}
				<button>dashboard</button>
			</PrivateItem>

			<PrivateItem>
				<PageHeaderNavPrivateUser />
			</PrivateItem>

			{/* MOBILE BUTTON */}
		</div>
	);
}

export default PageHeaderNavPrivate;
