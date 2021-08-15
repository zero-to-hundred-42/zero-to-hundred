import { put, takeEvery, call, all } from 'redux-saga/effects';
import {
  LOAD_BOARD,
  LOAD_BOARD_SUCCESS,
  LOAD_BOARD_ERROR,
  UPDATE_BOARD,
  UPDATE_BOARD_SUCCESS,
  UPDATE_BOARD_ERROR,
  DELETE_BOARD,
  DELETE_BOARD_SUCCESS,
  DELETE_BOARD_ERROR,
  ADD_BOARD,
  ADD_BOARD_SUCCESS,
  ADD_BOARD_ERROR,
} from './board.actions';
import {
  addBoardApi,
  deleteBoardApi,
  loadBoardsApi,
  updateBoardApi,
} from './board.api';

export function* loadingBoardsAsync() {
  try {
    const data = yield call(loadBoardsApi);
    const boardes = [...data];

    yield put({ type: LOAD_BOARD_SUCCESS, payload: boardes });
  } catch (err) {
    yield put({ type: LOAD_BOARD_ERROR, payload: err.message });
  }
}

export function* watchLoadingBoardsAsync() {
  yield takeEvery(LOAD_BOARD, loadingBoardsAsync);
}

export function* updatingBoardAsync({ payload }) {
  try {
    const data = yield call(updateBoardApi, payload);
    const updatedBoard = data;

    yield put({ type: UPDATE_BOARD_SUCCESS, payload: updatedBoard });
  } catch (err) {
    yield put({ type: UPDATE_BOARD_ERROR, payload: err.message });
  }
}

export function* watchUpdatingBoardAsync() {
  yield takeEvery(UPDATE_BOARD, updatingBoardAsync);
}

export function* deletingBoardAsync({ payload }) {
  try {
    yield call(deleteBoardApi, payload);

    yield put({ type: DELETE_BOARD_SUCCESS, payload: null });
  } catch (err) {
    yield put({ type: DELETE_BOARD_ERROR, payload: err.message });
  }
}

export function* watchDeletingBoardAsync() {
  yield takeEvery(DELETE_BOARD, deletingBoardAsync);
}

export function* addingBoardAsync({ payload }) {
  try {
    const data = yield call(addBoardApi, payload);
    const addedBoard = data;

    yield put({ type: ADD_BOARD_SUCCESS, payload: addedBoard });
  } catch (err) {
    yield put({ type: ADD_BOARD_ERROR, payload: err.message });
  }
}

export function* watchAddingBoardAsync() {
  yield takeEvery(ADD_BOARD, addingBoardAsync);
}

export function* boardSaga() {
  yield all([
    watchLoadingBoardsAsync(),
    watchUpdatingBoardAsync(),
    watchDeletingBoardAsync(),
    watchAddingBoardAsync(),
  ]);
}
