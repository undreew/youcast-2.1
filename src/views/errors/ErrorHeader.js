import React from 'react';
import {useParams} from 'react-router-dom';
import {ERROR_STATUS} from '../../configs/index';
import {Navigate} from 'react-router-dom';
import {isEmpty} from 'lodash';

const TITLE = {
	400: 'Bad Request',
	401: 'Authentication Required',
	403: 'Forbidden',
	404: 'Page Not Found',
	500: 'Internal Server Error',
	session: 'Session Expired',
	504: 'Gateway Timeout',
};

const DESCRIPTION = {
	400: `Sorry, the page you're looking for cannot be found.`,
	401: `Sorry, the page you're trying to access has restricted access.`,
	403: `Sorry, the page you're trying to access has restricted access.`,
	404: `Sorry, the page you're looking for cannot be found.`,
	500: "Sorry, the page you're looking for cannot be found.",
	session: `Your session has expired and your account has been disconnected. Please log in again.`,
	504: `Sorry, the page is taking too long to respond. Please try again later.`,
};

const IMAGE = {};

const ACTION = {};

function ErrorHeader() {
	const {code} = useParams();

	const errorCode = ERROR_STATUS[code || '404'];

	if (isEmpty(errorCode)) return <Navigate to='/not-found' replace />;

	const title = TITLE[errorCode];
	const description = DESCRIPTION[errorCode];
	const image = IMAGE[errorCode];
	const action = ACTION[errorCode];

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			{/* TITLE */}
			<h1>{title}</h1>

			{/* IMAGE */}
			<div>
				<img src='' alt='' />
			</div>

			{/* DESCRIPTION */}
			<p>{description}</p>

			{/* ACTION */}
			<div></div>
		</div>
	);
}

export default ErrorHeader;
