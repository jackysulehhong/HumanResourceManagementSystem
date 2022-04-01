import { message } from 'antd';
import * as api from '../api/index.js';
import {
  CREATE_TRAININGPROGRESS,
  FETCH_ALL_TRAININGPROGRESS,
  FETCH_ONE_TRAININGPROGRESS,
  UPDATE_TRAININGPROGRESS,
  TRAININGPROGRESS_END_LOADING,
  TRAININGPROGRESS_ERROR,
  TRAININGPROGRESS_START_LOADING,
  FETCH_USER_TRAININGPROGRESS,
  FETCH_DEPT_TRAININGPROGRESS,
} from '../constants/actionTypes';

export const getTrainingProgresses = () => async (dispatch) => {
  try {
    dispatch({ type: TRAININGPROGRESS_START_LOADING });
    const { data } = await api.getTrainingProgresses();
    dispatch({ type: FETCH_ALL_TRAININGPROGRESS, payload: data });
    dispatch({ type: TRAININGPROGRESS_END_LOADING });
  } catch (error) {
    dispatch({ type: TRAININGPROGRESS_ERROR, error });
  }
};
export const getTrainingProgress = (id) => async (dispatch) => {
  try {
    dispatch({ type: TRAININGPROGRESS_START_LOADING });
    const { data } = await api.getTrainingProgress(id);
    dispatch({ type: FETCH_ONE_TRAININGPROGRESS, payload: data });
    dispatch({ type: TRAININGPROGRESS_END_LOADING });
    return data;
  } catch (error) {
    dispatch({ type: TRAININGPROGRESS_ERROR, error });
  }
};

export const getTrainingProgressUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: TRAININGPROGRESS_START_LOADING });
    const { data } = await api.getTrainingProgressUser(id);
    dispatch({ type: FETCH_USER_TRAININGPROGRESS, payload: data });
    dispatch({ type: TRAININGPROGRESS_END_LOADING });
    return data;
  } catch (error) {
    dispatch({ type: TRAININGPROGRESS_ERROR, error });
  }
};

export const getTrainingProgressDept = (id) => async (dispatch) => {
  try {
    dispatch({ type: TRAININGPROGRESS_START_LOADING });
    const { data } = await api.getTrainingProgressDept(id);
    dispatch({ type: FETCH_DEPT_TRAININGPROGRESS, payload: data });
    dispatch({ type: TRAININGPROGRESS_END_LOADING });
    return data;
  } catch (error) {
    dispatch({ type: TRAININGPROGRESS_ERROR, error });
  }
};

export const updateTrainingProgress =
  (id, trainingProgress) => async (dispatch) => {
    try {
      dispatch({ type: TRAININGPROGRESS_START_LOADING });
      const { data } = await api.updateTrainingProgress(id, trainingProgress);
      dispatch({ type: UPDATE_TRAININGPROGRESS, payload: data });
      dispatch({ type: TRAININGPROGRESS_END_LOADING });
    } catch (error) {
      dispatch({ type: TRAININGPROGRESS_ERROR, error });
    }
  };

/* 
export const createTrainingProgress = (formData) => async (dispatch) => {
  try {
    dispatch({ type: TRAININGPROGRESS_START_LOADING });
    const { data } = await api.createTrainingProgress(formData);
    dispatch({ type: CREATE_TRAININGPROGRESS, payload: data });
    dispatch({ type: TRAININGPROGRESS_END_LOADING });
  } catch (error) {
  dispatch({ type: TRAININGPROGRESS_ERROR, error });
  }
};*/
