import React, {createContext, useContext, useState} from 'react';

const LayoutContext = createContext({});

const initialLayout = {
	header: false,
	footer: false,
	navLinks: false,
};

function LayoutContextProvider(props) {
	const {children} = props;

	const [layout, setLayout] = useState(initialLayout);

	function updateLayout(layout) {
		setLayout((prevValue) => ({
			...prevValue,
			...layout,
		}));
	}

	const {header, footer, navLinks} = layout;

	const layoutContext = {
		header,
		footer,
		navLinks,
		setLayout: (layout) => updateLayout(layout),
	};

	return (
		<LayoutContext.Provider value={layoutContext}>
			{children}
		</LayoutContext.Provider>
	);
}

const useLayout = () => useContext(LayoutContext);

export {LayoutContext, LayoutContextProvider, useLayout};
