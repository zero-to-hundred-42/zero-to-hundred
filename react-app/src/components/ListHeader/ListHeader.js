import React from 'react';
import { NavLink } from 'react-router-dom';

const ListHeader = ({ title, handleAdd, handleRefresh, routePath }) => {
  return (
    <div className="content-title-group">
      <NavLink to={routePath}>
        <h2 style={{color: "black"}}>{title}</h2>
      </NavLink>
      <br/>
      <button
        className="button add-button ui basic green button"
        onClick={handleAdd}
        aria-label="add"
      >
        생성
        <i className="fas fa-plus" aria-hidden="true" />
      </button>
      <button
        className="button refresh-button ui basic blue button"
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
