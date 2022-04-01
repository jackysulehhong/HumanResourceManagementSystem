import * as api from '../api/index.js';
import {
  AUTH,
  AUTH_END_LOADING,
  AUTH_ERROR,
  AUTH_START_LOADING,
  AUTH_SUCCESS,
  CHANGE_PASSWORD,
  RESET_PASSWORD,
  UPDATE_AUTH,
  UPDATE_SETTINGS,
} from '../constants/actionTypes';

export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_START_LOADING });

    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });

    dispatch({ type: AUTH_END_LOADING });
    dispatch({
      type: AUTH_SUCCESS,
      payload: { success: 'Login successful' },
    });

    return true;
  } catch (error) {
    dispatch({ type: AUTH_ERROR, error });
    return false;
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_START_LOADING });

    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    dispatch({ type: AUTH_END_LOADING });

    navigate('/');
  } catch (error) {
    dispatch({ type: AUTH_ERROR, error });
  }
};

export const resetPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_START_LOADING });

    const { data } = await api.resetPassword(email);
    dispatch({ type: RESET_PASSWORD, data });
    dispatch({ type: AUTH_END_LOADING });
  } catch (error) {
    dispatch({ type: AUTH_ERROR, error });
  }
};

export const changePassword = (id, password) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_START_LOADING });

    const { data } = await api.changePassword(id, password);
    dispatch({ type: CHANGE_PASSWORD, payload: data });
    dispatch({ type: AUTH_END_LOADING });
  } catch (error) {
    dispatch({ type: AUTH_ERROR, error });
  }
};

export const updateAuth = (id) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_START_LOADING });

    const { data } = await api.updateAuth(id);
    dispatch({ type: UPDATE_AUTH, payload: data });
    dispatch({ type: AUTH_END_LOADING });
  } catch (error) {
    dispatch({ type: AUTH_ERROR, error });
  }
};

export const updateSettings = (id, settings) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_START_LOADING });

    const { data } = await api.updateSettings(id, settings);
    dispatch({ type: UPDATE_SETTINGS, payload: { settings } });
    dispatch({ type: AUTH_END_LOADING });
  } catch (error) {
    dispatch({ type: AUTH_ERROR, error });
  }
};
