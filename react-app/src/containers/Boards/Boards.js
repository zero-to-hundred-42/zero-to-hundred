import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ListHeader, ModalYesNo, PostWrapper, Items, ListHeaderItem } from '../../components';
import BoardDetail from './BoardDetail';
import BoardList from './BoardList';
import useBoards from './useBoards';

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
    <PostWrapper>
      <ListHeaderItem>
        <ListHeader
          title="방명록"
          handleAdd={addNewBoard}
          handleRefresh={handleRefresh}
          routePath="/boards"
        />
        <br></br>
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

        {showModal && (
          <ModalYesNo
            message={`${boardToDelete.name}을(를) 삭제할까요?`}
            onNo={handleCloseModal}
            onYes={handleDeleteFromModal}
          />
        )}
      </ListHeaderItem>
    </PostWrapper>
  );
}

export default Boards;
