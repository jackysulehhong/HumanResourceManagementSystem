import {
  CLEAR_NOTIFICATION_BY_TYPE,
  FETCH_ALL_NOTIFICATION,
  NOTIFICATION_END_LOADING,
  NOTIFICATION_ERROR,
  NOTIFICATION_START_LOADING,
  SET_NOTIFICATION_READ,
} from '../constants/actionTypes';
import * as api from '../api/index.js';
export const getNotificationsById = (id) => async (dispatch) => {
  try {
    dispatch({ type: NOTIFICATION_START_LOADING });
    const { data } = await api.getNotificationsById(id);
    dispatch({ type: FETCH_ALL_NOTIFICATION, payload: data });
    dispatch({ type: NOTIFICATION_END_LOADING });
    return data;
  } catch (error) {
    dispatch({ type: NOTIFICATION_ERROR, error });
  }
};

export const clearNotificationsByType = (user, type) => async (dispatch) => {
  try {
    dispatch({ type: NOTIFICATION_START_LOADING });
    const { data } = await api.clearNotificationsByType(user, type);
    dispatch({ type: CLEAR_NOTIFICATION_BY_TYPE, payload: type });
    dispatch({ type: NOTIFICATION_END_LOADING });
    return true;
  } catch (error) {
    dispatch({ type: NOTIFICATION_ERROR, error });
    return false;
  }
};

export const setNotificationRead = (id) => async (dispatch) => {
  try {
    dispatch({ type: NOTIFICATION_START_LOADING });
    const { data } = await api.setNotificationRead(id);
    dispatch({ type: SET_NOTIFICATION_READ, payload: data });
    dispatch({ type: NOTIFICATION_END_LOADING });
    return true;
  } catch (error) {
    dispatch({ type: NOTIFICATION_ERROR, error });

    return false;
  }
};
