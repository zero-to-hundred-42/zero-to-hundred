import React from 'react';
import { Link } from 'react-router-dom';

const ListHeader = ({ title, handleAdd, handleRefresh, routePath }) => {
  return (
    <div className="ui container" style={{}}>
      <h2 style={{display:"inline-block" }}>{title}</h2>
      <button
        className="button add-button ui green button"
        onClick={handleAdd}
        aria-label="add"
        style={{margin: "5px"}}
      >
        생성
        <i className="fas fa-plus" aria-hidden="true" />
      </button>
      <button
        className="button refresh-button ui blue button"
        onClick={handleRefresh}
        aria-label="refresh"
      >
        새로고침
        <i className="fas fa-sync" aria-hidden="true" />
      </button>
    </div>
  );
};

export default ListHeader;
