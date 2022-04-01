import {
  CREATE_ROLE,
  FETCH_ALL_ROLE,
  FETCH_ONE_ROLE,
  UPDATE_ROLE,
  ROLE_END_LOADING,
  ROLE_ERROR,
  ROLE_START_LOADING,
  ROLE_SUCCESS,
} from '../constants/actionTypes';
import { handleError } from './error.js';
export default (
  state = { error: null, isLoading: true, roles: [], success: null },
  action
) => {
  switch (action.type) {
    case ROLE_START_LOADING:
      return { ...state, isLoading: true, error: null, success: null };
    case ROLE_END_LOADING:
      return { ...state, isLoading: false };
    case ROLE_ERROR: {
      return {
        ...state,
        error: handleError(action.error) || '',
        isLoading: false,
      };
    }
    case ROLE_SUCCESS: {
      return { ...state, success: action.payload.success };
    }
    case UPDATE_ROLE:
      return {
        ...state,
        roles: state.roles.map((role) =>
          role._id === action.payload._id ? action.payload : role
        ),
      };
    case FETCH_ONE_ROLE:
      return { ...state, role: action.payload };
    case FETCH_ALL_ROLE:
      return { ...state, roles: action.payload };
    case CREATE_ROLE:
      return { ...state, roles: [...state.roles, action.payload] };
    default:
      return state;
  }
};
