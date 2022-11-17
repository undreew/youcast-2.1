import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes} from './utils/renderRoutes';
import AppProviders from './AppProviders';
import Page from './components/Pages/Page';

function App() {
	return (
		<Router>
			<AppProviders>
				<Page>
					<Routes />
				</Page>
			</AppProviders>
		</Router>
	);
}

export default App;

/* <Routes>
				<Route path='/' element={<Landing />} />
				<Route path='login' element={<Login />} />
				<Route path='products' element={<Products />}>
					<Route index element={<ProductsList />} />
					<Route path='search' element={<ProductsSearch />} />
					<Route path='add' element={<ProductsAdd />} />
					<Route path='*' element={<NotFound />} />
				</Route>
				<Route path='*' element={<NotFound />} />
</Routes> */
