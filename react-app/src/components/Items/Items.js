import React from 'react';
import './Items.css'

const Items = ({children}) => {
	return (
		<div className="Item">
			{children}
		</div>
	);
};

export default Items;
