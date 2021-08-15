import React from 'react';
import './ListHeader.css';
import ListHeaderItem from '../ListHeaderItem/ListHeaderItem';

const ListHeader = ({ title, handleAdd, handleRefresh}) => {
  return (
    <ListHeaderItem>
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="down">
        <div style={{display:'inline-block', float:'right'}}>
        <button
          className="button add-button ui green button"
          onClick={handleAdd}
          aria-label="add"
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
      </div>
    </ListHeaderItem>
  );
};

export default ListHeader;
