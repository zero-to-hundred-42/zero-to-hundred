import {
  SELECT_BOARD,
  LOAD_BOARD_SUCCESS,
  LOAD_BOARD,
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

let initState = {
  loading: false,
  data: [],
  error: void 0,
};

export const boardsReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_BOARD:
      return { ...state, loading: true, error: '' };
    case LOAD_BOARD_SUCCESS:
      return { ...state, loading: false, data: [...action.payload] };
    case LOAD_BOARD_ERROR:
      return { ...state, loading: false, error: action.payload };

    case UPDATE_BOARD:
      return {
        ...state,
        data: state.data.map((h) => {
          if (h.id === action.payload.id) {
            state.loading = true;
          }
          return h;
        }),
      };
    case UPDATE_BOARD_SUCCESS:
      return modifyBoardState(state, action.payload);
    case UPDATE_BOARD_ERROR:
      return { ...state, loading: false, error: action.payload };

    case DELETE_BOARD: {
      return {
        ...state,
        loading: true,
        data: state.data.filter((h) => h !== action.payload),
      };
    }

    case DELETE_BOARD_SUCCESS: {
      const result = { ...state, loading: false };
      return result;
    }

    case DELETE_BOARD_ERROR: {
      return {
        ...state,
        data: [...state.data, action.payload.requestData],
        loading: false,
      };
    }

    case ADD_BOARD: {
      return { ...state, loading: true };
    }

    case ADD_BOARD_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: [...state.data, { ...action.payload }],
      };
    }

    case ADD_BOARD_ERROR: {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
};

const modifyBoardState = (boardState, boardChanges) => {
  return {
    ...boardState,
    loading: false,
    data: boardState.data.map((h) => {
      if (h.id === boardChanges.id) {
        return { ...h, ...boardChanges };
      } else {
        return h;
      }
    }),
  };
};

let initialSelectedBoard = null;

export const selectedBoardReducer = (
  state = initialSelectedBoard,
  action
) => {
  switch (action.type) {
    case SELECT_BOARD:
      return action.payload ? { ...action.payload } : null;
    default:
      return state;
  }
};
