import * as api from '../api/index.js';
import {
  CREATE_LEAVETYPE,
  FETCH_ALL_LEAVETYPE,
  FETCH_ONE_LEAVETYPE,
  LEAVETYPE_END_LOADING,
  LEAVETYPE_ERROR,
  LEAVETYPE_START_LOADING,
  LEAVETYPE_SUCCESS,
  UPDATE_LEAVETYPE,
} from '../constants/actionTypes';

export const getLeaveTypes = () => async (dispatch) => {
  try {
    dispatch({ type: LEAVETYPE_START_LOADING });
    const { data } = await api.getLeaveTypes();
    dispatch({ type: FETCH_ALL_LEAVETYPE, payload: data });
    dispatch({ type: LEAVETYPE_END_LOADING });
  } catch (error) {
    dispatch({ type: LEAVETYPE_ERROR, error });
  }
};
export const getLeaveType = (id) => async (dispatch) => {
  try {
    dispatch({ type: LEAVETYPE_START_LOADING });
    const { data } = await api.getLeaveType(id);
    dispatch({ type: FETCH_ONE_LEAVETYPE, payload: data });
    dispatch({ type: LEAVETYPE_END_LOADING });

    return data;
  } catch (error) {
    dispatch({ type: LEAVETYPE_ERROR, error });
  }
};
export const createLeaveType = (formData) => async (dispatch) => {
  try {
    dispatch({ type: LEAVETYPE_START_LOADING });
    const { data } = await api.createLeaveType(formData);
    dispatch({ type: CREATE_LEAVETYPE, payload: data });
    dispatch({
      type: LEAVETYPE_SUCCESS,
      payload: { success: 'Leave type successfully created' },
    });
    dispatch({ type: LEAVETYPE_END_LOADING });
  } catch (error) {
    dispatch({ type: LEAVETYPE_ERROR, error });
  }
};

export const updateLeaveType = (id, leaveType) => async (dispatch) => {
  try {
    dispatch({ type: LEAVETYPE_START_LOADING });
    const { data } = await api.updateLeaveType(id, leaveType);
    dispatch({ type: UPDATE_LEAVETYPE, payload: data });
    dispatch({ type: LEAVETYPE_END_LOADING });
  } catch (error) {
    dispatch({ type: LEAVETYPE_ERROR, error });
  }
};
