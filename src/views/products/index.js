import React from 'react';
import {Outlet} from 'react-router-dom';
import {PublicLayout} from '../../components/Layouts';
import ProductsHeader from './ProductsHeader';

function Index() {
	return (
		<PublicLayout>
			<ProductsHeader />
			<Outlet />
		</PublicLayout>
	);
}

export default Index;
