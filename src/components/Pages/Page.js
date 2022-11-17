import React from 'react';
import {useLayout} from '../../context/LayoutContext';

import PageContainer from './PageContainer';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

function Page(props) {
	const {children} = props;

	const {header, footer, navLinks} = useLayout();

	const _header = header && <PageHeader navLinks={navLinks} />;

	const _footer = footer && <PageFooter />;

	return (
		<PageContainer>
			{_header}

			{/* ASIDE  */}

			{children}

			{_footer}
		</PageContainer>
	);
}

export default Page;
