import {
  CREATE_HOLIDAY,
  DELETE_HOLIDAY,
  FETCH_ALL_HOLIDAY,
  UPDATE_HOLIDAY,
  HOLIDAY_END_LOADING,
  HOLIDAY_ERROR,
  HOLIDAY_START_LOADING,
  FETCH_HOLIDAY_BY_YEAR,
  FETCH_ONE_HOLIDAY,
  HOLIDAY_SUCCESS,
} from '../constants/actionTypes';
import { handleError } from './error.js';
export default (
  state = { error: null, isLoading: true, holidays: [], success: null },
  action
) => {
  switch (action.type) {
    case HOLIDAY_START_LOADING:
      return { ...state, isLoading: true, error: null, success: null };
    case HOLIDAY_END_LOADING:
      return { ...state, isLoading: false };
    case HOLIDAY_ERROR: {
      return {
        ...state,
        error: handleError(action.error) || '',
        isLoading: false,
      };
    }
    case HOLIDAY_SUCCESS: {
      return { ...state, success: action.payload.success };
    }
    case UPDATE_HOLIDAY:
      return {
        ...state,
        holidays: {
          ...state.holidays,
          lists: state.holidays.lists.map((holiday) =>
            holiday._id === action.payload._id ? action.payload : holiday
          ),
        },
      };
    case FETCH_HOLIDAY_BY_YEAR:
    case FETCH_ALL_HOLIDAY:
      return { ...state, holidays: action.payload };
    case FETCH_ONE_HOLIDAY:
      return { ...state, holiday: action.payload };
    case CREATE_HOLIDAY:
      return {
        ...state,
        holidays: {
          ...state.holidays,
          lists: [...state.holidays.lists, action.payload],
        },
      };
    case DELETE_HOLIDAY:
      return { ...state, holidays: action.payload };
    default:
      return state;
  }
};
