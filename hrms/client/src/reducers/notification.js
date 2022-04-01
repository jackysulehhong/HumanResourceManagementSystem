import {
  CLEAR_NOTIFICATION_BY_TYPE,
  FETCH_ALL_NOTIFICATION,
  NOTIFICATION_END_LOADING,
  NOTIFICATION_ERROR,
  NOTIFICATION_START_LOADING,
  NOTIFICATION_SUCCESS,
  SET_NOTIFICATION_READ,
} from '../constants/actionTypes';
import { handleError } from './error.js';
export default (
  state = { error: null, isLoading: true, notifications: [], success: null },
  action
) => {
  switch (action.type) {
    case NOTIFICATION_START_LOADING:
      return { ...state, isLoading: true, error: null, success: null };
    case NOTIFICATION_END_LOADING:
      return { ...state, isLoading: false };
    case NOTIFICATION_ERROR: {
      return {
        ...state,
        error: handleError(action.error) || '',
        isLoading: false,
      };
    }
    case NOTIFICATION_SUCCESS: {
      return { ...state, success: action.payload.success };
    }

    case FETCH_ALL_NOTIFICATION:
      return { ...state, notifications: action.payload };
    case CLEAR_NOTIFICATION_BY_TYPE:
      return {
        ...state,
        notifications: state.notifications.filter(
          (noti) => noti.content.type != action.payload.type
        ),
      };
    case SET_NOTIFICATION_READ:
      return {
        ...state,
        notifications: state.notifications.map((noti) =>
          noti._id == action.payload._id ? { ...noti, read: true } : noti
        ),
      };

    default:
      return state;
  }
};
