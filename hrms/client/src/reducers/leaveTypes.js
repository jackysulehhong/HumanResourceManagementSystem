import {
  CREATE_LEAVETYPE,
  FETCH_ALL_LEAVETYPE,
  FETCH_ONE_LEAVETYPE,
  UPDATE_LEAVETYPE,
  LEAVETYPE_END_LOADING,
  LEAVETYPE_ERROR,
  LEAVETYPE_START_LOADING,
  LEAVETYPE_SUCCESS,
} from '../constants/actionTypes';
import { handleError } from './error.js';
export default (
  state = { error: null, isLoading: true, leaveTypes: [], success: null },
  action
) => {
  switch (action.type) {
    case LEAVETYPE_START_LOADING: {
      return { ...state, isLoading: true, error: null, success: null };
    }
    case LEAVETYPE_END_LOADING: {
      return { ...state, isLoading: false };
    }
    case LEAVETYPE_SUCCESS: {
      return { ...state, success: action.payload.success };
    }
    case LEAVETYPE_ERROR: {
      return {
        ...state,
        error: handleError(action.error) || '',
        isLoading: false,
      };
    }

    case UPDATE_LEAVETYPE:
      return {
        ...state,
        leaveTypes: state.leaveTypes.map((leaveType) =>
          leaveType._id === action.payload._id ? action.payload : leaveType
        ),
      };
    case FETCH_ONE_LEAVETYPE:
      return { ...state, leaveType: action.payload, isLoading: false };
    case FETCH_ALL_LEAVETYPE:
      return { ...state, leaveTypes: action.payload };
    case CREATE_LEAVETYPE:
      return { ...state, leaveTypes: [...state.leaveTypes, action.payload] };
    default:
      return state;
  }
};
