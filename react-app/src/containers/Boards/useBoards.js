import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addBoardAction,
  deleteBoardAction,
  loadBoardsAction,
  selectBoardAction,
  updateBoardAction,
} from '../../store';

/** Custom hook for accessing Board state in redux store */
function useBoards() {
  const dispatch = useDispatch();

  return {
    // Selectors
    boards: useSelector((state) => state.boards.data),
    selectedBoard: useSelector((state) => state.selectedBoard),

    // Dispatchers
    // Wrap any dispatcher that could be called within a useEffect() in a useCallback()
    addBoard: (board) => dispatch(addBoardAction(board)),
    deleteBoard: (board) => dispatch(deleteBoardAction(board)),
    getBoards: useCallback(() => dispatch(loadBoardsAction()), [dispatch]), // called within a useEffect()
    selectBoard: (board) => dispatch(selectBoardAction(board)),
    updateBoard: (board) => dispatch(updateBoardAction(board)),
  };
}

export default useBoards;
