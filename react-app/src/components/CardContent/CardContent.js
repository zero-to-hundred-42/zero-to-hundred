import React from 'react';

const CardContent = ({ name, description }) => (
  <div className="ui cards">
    <div className="card">
      <div className="header">{name}</div>
      <div className="description">{description}</div>
    </div>
  </div>
);

export default CardContent;
