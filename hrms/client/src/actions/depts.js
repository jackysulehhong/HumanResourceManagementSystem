import * as api from '../api/index.js';
import {
  CREATE_DEPT,
  DELETE_DEPT,
  DEPT_END_LOADING,
  DEPT_ERROR,
  DEPT_START_LOADING,
  FETCH_ALL_DEPT,
  FETCH_ONE_DEPT,
} from '../constants/actionTypes';

export const getDepts = () => async (dispatch) => {
  try {
    dispatch({ type: DEPT_START_LOADING });
    const { data } = await api.getDepts();
    dispatch({ type: FETCH_ALL_DEPT, payload: data });
    dispatch({ type: DEPT_END_LOADING });
  } catch (error) {
    dispatch({ type: DEPT_ERROR, error });
  }
};
export const getDept = (id) => async (dispatch) => {
  try {
    dispatch({ type: DEPT_START_LOADING });
    const { data } = await api.getDept(id);
    dispatch({ type: FETCH_ONE_DEPT, payload: data });
    dispatch({ type: DEPT_END_LOADING });
    return data;
  } catch (error) {
    dispatch({ type: DEPT_ERROR, error });
  }
};
export const createDept = (dept) => async (dispatch) => {
  try {
    dispatch({ type: DEPT_START_LOADING });
    const { data } = await api.createDept(dept);
    dispatch({ type: CREATE_DEPT, payload: data });
    dispatch({ type: DEPT_END_LOADING });
  } catch (error) {
    dispatch({ type: DEPT_ERROR, error });
  }
};
export const deleteDept = (id) => async (dispatch) => {
  try {
    dispatch({ type: DEPT_START_LOADING });
    const { data } = await api.deleteDept(id);
    dispatch({ type: DELETE_DEPT, payload: data });
    dispatch({ type: DEPT_END_LOADING });
  } catch (error) {
    dispatch({ type: DEPT_ERROR, error });
  }
};

export const updateDept = (id, formData) => async (dispatch) => {
  try {
    dispatch({ type: DEPT_START_LOADING });
    const { data } = await api.updateDept(id, formData);

    dispatch({ type: DELETE_DEPT, payload: data });
    dispatch({ type: DEPT_END_LOADING });
  } catch (error) {
    dispatch({ type: DEPT_ERROR, error });
  }
};
