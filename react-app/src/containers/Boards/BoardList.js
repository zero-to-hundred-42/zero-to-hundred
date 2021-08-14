import React from 'react';
import { withRouter } from 'react-router';

import { ButtonFooter, CardContent } from '../../components';

function BoardList({
  handleDeleteBoard,
  handleSelectBoard,
  boards,
  history,
}) {
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
    <div>
      {boards.length === 0 && <div>Loading data ...</div>}
      <div className="ui cards">
        {boards.map((board, index) => (
          <div className="card" key={board.id} role="presentation">
            <div className="content">
              <div className="description">{board.quantity}</div>
              <div className="ui header">{board.name}</div>
              <div className="description">{board.description}</div>
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <ButtonFooter
                  className="ui basic red button"
                  iconClasses="fas fa-trash"
                  onClick={deleteBoard}
                  label="Delete"
                  dataIndex={index}
                  dataId={board.id}
                />
                <ButtonFooter
                  className="ui basic grey button"
                  iconClasses="fas fa-edit"
                  onClick={selectBoard}
                  label="Edit"
                  dataIndex={index}
                  dataId={board.id}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default withRouter(BoardList);
