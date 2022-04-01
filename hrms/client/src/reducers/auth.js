import {
  AUTH,
  LOGOUT,
  AUTH_END_LOADING,
  AUTH_START_LOADING,
  AUTH_ERROR,
  AUTH_SUCCESS,
  RESET_PASSWORD,
  CHANGE_PASSWORD,
  UPDATE_AUTH,
  UPDATE_SETTINGS,
} from '../constants/actionTypes';
import { handleError } from './error.js';
const authReducer = (
  state = { error: null, isLoading: true, authData: null, success: null },
  action
) => {
  switch (action.type) {
    case AUTH_START_LOADING:
      return { ...state, isLoading: true, error: null, success: null };
    case AUTH_END_LOADING:
      return { ...state, isLoading: false };
    case AUTH_ERROR: {
      return {
        ...state,
        error: handleError(action.error) || '',
        isLoading: false,
      };
    }
    case AUTH_SUCCESS: {
      return { ...state, success: action.payload.success };
    }
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case UPDATE_AUTH:
      return {
        ...state,
        authData: { ...state.authData, result: action.payload },
      };
    case UPDATE_SETTINGS:
      return {
        ...state,
        authData: {
          ...state.authData,
          result: {
            ...state.authData.result,
            settings: action.payload.settings,
          },
        },
      };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    case CHANGE_PASSWORD:
    case RESET_PASSWORD:
    default:
      return state;
  }
};
export default authReducer;
