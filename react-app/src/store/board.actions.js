export const LOAD_BOARD = '[Boards] LOAD_BOARD';
export const LOAD_BOARD_SUCCESS = '[Boards] LOAD_BOARD_SUCCESS';
export const LOAD_BOARD_ERROR = '[Boards] LOAD_BOARD_ERROR';

export const UPDATE_BOARD = '[Boards] UPDATE_BOARD';
export const UPDATE_BOARD_SUCCESS = '[Boards] UPDATE_BOARD_SUCCESS';
export const UPDATE_BOARD_ERROR = '[Boards] UPDATE_BOARD_ERROR';

export const DELETE_BOARD = '[Boards] DELETE_BOARD';
export const DELETE_BOARD_SUCCESS = '[Boards] DELETE_BOARD_SUCCESS';
export const DELETE_BOARD_ERROR = '[Boards] DELETE_BOARD_ERROR';

export const ADD_BOARD = '[Boards] ADD_BOARD';
export const ADD_BOARD_SUCCESS = '[Boards] ADD_BOARD_SUCCESS';
export const ADD_BOARD_ERROR = '[Boards] ADD_BOARD_ERROR';

export const SELECT_BOARD = '[Board] SELECT_BOARD';

export const selectBoardAction = (board) => ({
  type: SELECT_BOARD,
  payload: board,
});
export const loadBoardsAction = () => ({ type: LOAD_BOARD });

export const updateBoardAction = (board) => ({
  type: UPDATE_BOARD,
  payload: board,
});
export const deleteBoardAction = (board) => ({
  type: DELETE_BOARD,
  payload: board,
});
export const addBoardAction = (board) => ({
  type: ADD_BOARD,
  payload: board,
});
