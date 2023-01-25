import React from 'react';
import LandingHeader from './LandingHeader';
import {PublicLayout} from '../../components/Layouts';

function Index() {
	return (
		<PublicLayout footer={false}>
			<LandingHeader />
		</PublicLayout>
	);
}

export default Index;
