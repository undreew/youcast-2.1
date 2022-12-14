import React from 'react';
import {PublicLayout} from '../../components/Layouts';
import ErrorHeader from './ErrorHeader';

function Index() {
	return (
		<PublicLayout header={false} footer={false}>
			<ErrorHeader />
		</PublicLayout>
	);
}

export default Index;
