import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

PageLoading.defaultProps = {
	isLoading: true,
};

function PageLoading(props) {
	const {isLoading} = props;

	if (!isLoading) return null;

	return (
		<div
			style={{
				// position: 'absolute',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{/* <ScaleLoader loading height={35} width={4} radius={2} margin={2} /> */}
			<PulseLoader loading color='#36d7b7' />
		</div>
	);
}

export default PageLoading;
