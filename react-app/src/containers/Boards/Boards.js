import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ListHeader, ModalYesNo } from '../../components';
import BoardDetail from './BoardDetail';
import BoardList from './BoardList';
import useBoards from './useBoards';

import './boards.css';

const captains = console;

function Boards({ history }) {
  const [boardToDelete, setBoardToDelete] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const {
    addBoard,
    deleteBoard,
    getBoards,
    boards,
    selectBoard,
    selectedBoard,
    updateBoard,
  } = useBoards();

  useEffect(() => {
    getBoards();
  }, [getBoards]);

  function addNewBoard() {
    selectBoard({});
    history.push('/boards/0');
  }

  function handleCancelBoard() {
    history.push('/boards');
    selectBoard(null);
    setBoardToDelete(null);
  }

  function handleDeleteBoard(board) {
    selectBoard(null);
    setBoardToDelete(board);
    setShowModal(true);
  }

  function handleSaveBoard(board) {
    if (selectedBoard && selectedBoard.name) {
      captains.log(board);
      updateBoard(board);
    } else {
      addBoard(board);
    }
    handleCancelBoard();
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleDeleteFromModal() {
    setShowModal(false);
    deleteBoard(boardToDelete);
    handleCancelBoard();
  }

  function handleSelectBoard(selectedBoard) {
    selectBoard(selectedBoard);
    captains.log(`you selected ${selectedBoard.name}`);
  }

  function handleRefresh() {
    handleCancelBoard();
    getBoards();
  }

  return (
    <div className="one">
      <div className="ui container">
        <ListHeader
          title="방명록"
          handleAdd={addNewBoard}
          handleRefresh={handleRefresh}
          routePath="/boards"
        />
        <br></br>
        <div className="columns is-multiline is-variable">
          <div className="column is-8">
            <Switch>
              <Route
                exact
                path="/boards"
                component={() => (
                  <BoardList
                    boards={boards}
                    selectedBoard={selectedBoard}
                    handleSelectBoard={handleSelectBoard}
                    handleDeleteBoard={handleDeleteBoard}
                  />
                )}
              />
              <Route
                exact
                path="/boards/:id"
                component={() => {
                  return (
                    <BoardDetail
                      board={selectedBoard}
                      handleCancelBoard={handleCancelBoard}
                      handleSaveBoard={handleSaveBoard}
                    />
                  );
                }}
              />
            </Switch>
          </div>
        </div>

        {showModal && (
          <ModalYesNo
            message={`Would you like to delete ${boardToDelete.name}?`}
            onNo={handleCloseModal}
            onYes={handleDeleteFromModal}
          />
        )}
      </div>
    </div>
  );
}

export default Boards;
