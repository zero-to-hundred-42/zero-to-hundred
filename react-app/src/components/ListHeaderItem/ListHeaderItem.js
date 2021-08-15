import React from 'react';
import './ListHeaderItem.css'

const ListHeaderItem = ({children}) => {
	return (
		<div className="Items">
			{children}
		</div>
	);
};

export default ListHeaderItem;
