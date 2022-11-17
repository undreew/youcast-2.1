import React from 'react';

import './Search.scss';

function Search() {
	return (
		<div className='products-search'>
			<div className='products-search__form-control'>
				<label htmlFor=''>Search</label>
				<input type='text' className='products-search__input' />
			</div>
		</div>
	);
}

export default Search;
