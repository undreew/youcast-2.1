import React, {useEffect} from 'react';
import {useLayout} from '../../context/LayoutContext';

export const Layouts = (props) => {
	const {header, footer, navLinks, children} = props;
	const {setLayout} = useLayout();

	useEffect(() => {
		setLayout({
			header,
			footer,
			navLinks,
		});
	}, []);

	return children;
};

export const BaseLayout = (props) => <Layouts {...props} />;

export const PrivateLayout = (props) => {
	const {header = true, footer = false, navLinks = true, ...rest} = props;

	return (
		<Layouts header={header} footer={footer} navLinks={navLinks} {...rest} />
	);
};

export const PublicLayout = (props) => {
	const {header = true, footer = true, navLinks = true, ...rest} = props;

	return (
		<Layouts header={header} footer={footer} navLinks={navLinks} {...rest} />
	);
};

export default BaseLayout;
