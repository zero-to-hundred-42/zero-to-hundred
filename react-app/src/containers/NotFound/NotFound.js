import React from 'react';

// 유효하지 않은 페이지
const NotFound = () => (
  <div className="content-container">
    <div className="content-title-group not-found">
      <i className="fas fa-exclamation-triangle" aria-hidden="true" />
      &nbsp;
      <span className="title">{`These aren't the bits you're looking for`}</span>
    </div>
  </div>
);

export default NotFound;
