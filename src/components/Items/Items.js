import React from 'react';
import './Items.css'

const Item = ({children}) => {
	return (
		<div className="Item">
			{children}
		</div>
	);
};

export default Item;