import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {useAuth} from '../../context/AuthContext';

import './PageHeader.scss';

import PageHeaderNavPrivate from './PageHeaderNavPrivate';
import PageHeaderNavPublic from './PageHeaderNavPublic';

function PageHeader(props) {
	const {navLinks} = props;

	const {isAuth} = useAuth();

	return (
		<div className='header'>
			<nav className='header--nav'>
				<div className='header-nav-main-content'>
					{/* NAVBRAND */}
					<NavLink to='/'>Freq N Vibe</NavLink>

					{/* PAGE HEADER SEARCH BAR */}
				</div>
				{navLinks && (
					<div className='header-nav-content-right'>
						{isAuth ? <PageHeaderNavPrivate /> : <PageHeaderNavPublic />}
					</div>
				)}

				{/* MOBILE SIDE DRAWER */}
				{/* <div className='side-drawer'>
					<Link to='/wild-dogs'>Wild Doggo</Link>
					<Link to='/contact'>Contact</Link>
					<Link to='/about'>About</Link>
				</div> */}
			</nav>
		</div>
	);
}

export default PageHeader;
