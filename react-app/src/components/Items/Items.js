import React from 'react';
import './Items.css'

const Item = ({children}) => {
	return (
		<div className="Items">
			{children}
		</div>
	);
};

export default Item;