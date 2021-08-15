import { combineReducers } from 'redux';
import { selectedBoardReducer, boardsReducer } from './board.reducer';

export * from './board.actions';
export * from './board.reducer';
export * from './board.saga';

const store = combineReducers({
  boards: boardsReducer,
  selectedBoard: selectedBoardReducer,
});

export default store;
