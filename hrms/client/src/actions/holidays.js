import * as api from '../api/index.js';
import {
  CREATE_HOLIDAY,
  DELETE_HOLIDAY,
  FETCH_ALL_HOLIDAY,
  FETCH_HOLIDAY_BY_YEAR,
  FETCH_ONE_HOLIDAY,
  HOLIDAY_END_LOADING,
  HOLIDAY_ERROR,
  HOLIDAY_START_LOADING,
  HOLIDAY_SUCCESS,
} from '../constants/actionTypes';

export const fetchAllHolidays = () => async (dispatch) => {
  try {
    dispatch({ type: HOLIDAY_START_LOADING });
    const { data } = await api.fetchAllHolidays();
    dispatch({ type: FETCH_ALL_HOLIDAY, payload: data });
    dispatch({ type: HOLIDAY_END_LOADING });
  } catch (error) {
    dispatch({ type: HOLIDAY_ERROR, error });
  }
};
export const fetchHolidaysByYear = (year) => async (dispatch) => {
  try {
    dispatch({ type: HOLIDAY_START_LOADING });
    const { data } = await api.fetchHolidaysByYear(year);
    dispatch({ type: FETCH_HOLIDAY_BY_YEAR, payload: data });
    dispatch({ type: HOLIDAY_END_LOADING });
  } catch (error) {
    dispatch({ type: HOLIDAY_ERROR, error });
  }
};
export const createHoliday = (formData) => async (dispatch) => {
  try {
    dispatch({ type: HOLIDAY_START_LOADING });
    const { data } = await api.createHoliday(formData);
    dispatch({ type: CREATE_HOLIDAY, payload: data });
    dispatch({
      type: HOLIDAY_SUCCESS,
      payload: { success: 'Create success' },
    });
    dispatch({ type: HOLIDAY_END_LOADING });
  } catch (error) {
    dispatch({ type: HOLIDAY_ERROR, error });
  }
};
export const updateHoliday = (year, id, formData) => async (dispatch) => {
  try {
    dispatch({ type: HOLIDAY_START_LOADING });
    const { data } = await api.updateHoliday(year, id, formData);
    dispatch({ type: DELETE_HOLIDAY, payload: data });
    dispatch({
      type: HOLIDAY_SUCCESS,
      payload: { success: 'Update success' },
    });
    dispatch({ type: HOLIDAY_END_LOADING });

    return data;
  } catch (error) {
    dispatch({ type: HOLIDAY_ERROR, error });
  }
};

export const getHoliday = (year, id) => async (dispatch) => {
  try {
    dispatch({ type: HOLIDAY_START_LOADING });
    const { data } = await api.getHoliday(year, id);
    dispatch({ type: FETCH_ONE_HOLIDAY, payload: data });
    dispatch({ type: HOLIDAY_END_LOADING });
    return data;
  } catch (error) {
    dispatch({ type: HOLIDAY_ERROR, error });
  }
};
export const deleteHoliday = (year, id) => async (dispatch) => {
  try {
    dispatch({ type: HOLIDAY_START_LOADING });
    const { data } = await api.deleteHoliday(year, id);
    dispatch({ type: DELETE_HOLIDAY, payload: data });
    dispatch({
      type: HOLIDAY_SUCCESS,
      payload: { success: 'Delete success' },
    });
    dispatch({ type: HOLIDAY_END_LOADING });
  } catch (error) {
    dispatch({ type: HOLIDAY_ERROR, error });
  }
};
