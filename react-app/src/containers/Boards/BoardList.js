import React from 'react';
import { withRouter } from 'react-router';

import { ButtonFooter, CardContent } from '../../components';

function BoardList({ handleDeleteBoard, handleSelectBoard, boards, history }) {
  function selectBoard(e) {
    const board = getSelectedBoard(e);
    handleSelectBoard(board);
    history.push(`/boards/${board.id}`);
  }

  function deleteBoard(e) {
    const board = getSelectedBoard(e);
    handleDeleteBoard(board);
  }

  function getSelectedBoard(e) {
    const index = +e.currentTarget.dataset.index;
    return boards[index];
  }

  return (
    <div className="ui centered cards">
      {boards.length === 0 && <div>Loading data ...</div>}
      <div className="ui comments" style={{ width: '90%' }}>
        {boards.map((board, index) => (
          <div
            className="comment"
            style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '10px',
            }}
            key={board.id}
            role="presentation"
          >
            <div className="content">
              <span className="ui header author">{board.name}</span>
              <div className="metadata">
                <span className="date">{board.date}</span>
              </div>
              <div className="text">{board.description}</div>
            </div>
            <div
              className="content"
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <ButtonFooter
                className="ui grey button"
                iconClasses="fas fa-edit"
                onClick={selectBoard}
                label="수정"
                dataIndex={index}
                dataId={board.id}
              />
              <ButtonFooter
                className="ui red button"
                iconClasses="fas fa-trash"
                onClick={deleteBoard}
                label="삭제"
                dataIndex={index}
                dataId={board.id}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default withRouter(BoardList);
