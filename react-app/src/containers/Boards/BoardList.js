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
    <div className="ui centered cards">
      {boards.length === 0 && <div>Loading data ...</div>}
      <div className="ui comments" style={{width: "90%"}}>
        {boards.map((board, index) => (
          <div style={{backgroundColor:"white", borderRadius:"10px", padding:"5px"}} className="comment" key={board.id} role="presentation">
            <div className="content">
              <span className="ui header author">{board.name}</span>
              <div className="metadata">
                <span className="date">{board.quantity}</span>
              </div>
              <div className="text">{board.description}</div>
            </div>
            <div className="extra content" style={{width:"50%"}}>
              <div className="ui two buttons">
                <ButtonFooter
                  className="ui grey basic button"
                  iconClasses="fas fa-edit"
                  onClick={selectBoard}
                  label="Edit"
                  dataIndex={index}
                  dataId={board.id}
                />
                <ButtonFooter
                  className="ui red basic button"
                  iconClasses="fas fa-trash"
                  onClick={deleteBoard}
                  label="Delete"
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
