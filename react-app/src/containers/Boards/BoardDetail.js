import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

import { ButtonFooter, InputDetail } from '../../components';

function BoardDetail({
  board: initBoard,
  handleCancelBoard,
  handleSaveBoard,
  history,
}) {
  const [board, setBoard] = useState(Object.assign({}, initBoard));

  useEffect(() => {
    if (!board) {
      history.push('/boards'); // no board, bail out of Details
    }
  }, [board, history]);

  function handleSave() {
    const chgBoard = { ...board, id: board.id || null };
    handleSaveBoard(chgBoard);
  }

  function handleNameChange(e) {
    setBoard({ ...board, name: e.target.value });
  }

  function handleDescriptionChange(e) {
    setBoard({ ...board, description: e.target.value });
  }

  function handleQuantityChange(e) {
    setBoard({ ...board, quantity: e.target.value });
  }

  return (
    <div>
      <div className="ui raised very padded text container segment">
        <div className="ui dividing header">
          {board.id && <h2>업데이트</h2>}
          {!board.id && <h2>생성</h2>}
        </div>
        <div className="ui form">
          <div className="field">
            <label className="label" htmlFor="quantity">
              작성 날짜
            </label>
            <input
              name="quantity"
              className="input"
              type="date"
              defaultValue={board.quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <InputDetail
            name="제목"
            value={board.name}
            placeholder="제목"
            onChange={handleNameChange}
          />
          <InputDetail
            name="내용"
            value={board.description}
            placeholder="내용"
            onChange={handleDescriptionChange}
          />

          <footer className="card-footer ">
            <ButtonFooter
              className="ui basic red button"
              iconClasses="fas fa-undo"
              onClick={handleCancelBoard}
              label="Cancel"
            />
            <ButtonFooter
              className="ui basic blue button"
              iconClasses="fas fa-save"
              onClick={handleSave}
              label="Save"
            />
          </footer>
        </div>
      </div>
    </div>
  );
}

export default withRouter(BoardDetail);
