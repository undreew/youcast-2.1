import React from 'react';
import {useParams} from 'react-router-dom';
import {ERROR_STATUS} from '../../configs/index';

const TITLE = {};

const DESCRIPTION = {};

const IMAGE = {};

const ACTION = {};

function ErrorHeader() {
	const {code} = useParams();

	const errorCode = ERROR_STATUS[code];

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
			<h1></h1>

			{/* IMAGE */}
			<div>
				<img src='' alt='' />
			</div>

			{/* DESCRIPTION */}
			<p></p>

			{/* ACTION */}
			<div></div>
		</div>
	);
}

export default ErrorHeader;
