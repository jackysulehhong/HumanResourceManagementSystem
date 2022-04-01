import { message } from 'antd';
import * as api from '../api/index.js';
import {
  CREATE_TRAINING,
  FETCH_ALL_TRAINING,
  FETCH_EXT_TRAINING,
  FETCH_EXT_TRAINING_HISTORY,
  FETCH_ONE_TRAINING,
  FETCH_TODAY_TRAINING,
  FETCH_TRAINING_COUNT,
  FETCH_TRAINING_HISTORY,
  FETCH_UPCOMING_TRAINING,
  LEAVE_TRAINING,
  TRAINING_END_LOADING,
  TRAINING_ERROR,
  TRAINING_START_LOADING,
  UPDATE_TRAINING,
  UPDATE_TRAINING_STATUS,
} from '../constants/actionTypes';

export const fetchAllTrainings = () => async (dispatch) => {
  try {
    dispatch({ type: TRAINING_START_LOADING });
    const { data } = await api.fetchAllTrainings();
    dispatch({ type: FETCH_ALL_TRAINING, payload: data });
    dispatch({ type: TRAINING_END_LOADING });
  } catch (error) {
    dispatch({ type: TRAINING_ERROR, error });
  }
};
export const fetchTrainingById = (id) => async (dispatch) => {
  try {
    dispatch({ type: TRAINING_START_LOADING });
    const { data } = await api.fetchTrainingById(id);
    dispatch({ type: FETCH_ONE_TRAINING, payload: data });
    dispatch({ type: TRAINING_END_LOADING });
  } catch (error) {
    dispatch({ type: TRAINING_ERROR, error });
  }
};
export const createTraining = (training) => async (dispatch) => {
  try {
    dispatch({ type: TRAINING_START_LOADING });
    const { data } = await api.createTraining(training);
    dispatch({ type: CREATE_TRAINING, payload: data });
    dispatch({ type: TRAINING_END_LOADING });
  } catch (error) {
    dispatch({ type: TRAINING_ERROR, error });
  }
};
export const updateTraining = (id, training) => async (dispatch) => {
  try {
    dispatch({ type: TRAINING_START_LOADING });
    const { data } = await api.updateTraining(id, training);
    dispatch({ type: UPDATE_TRAINING, payload: data });
    dispatch({ type: TRAINING_END_LOADING });
  } catch (error) {
    dispatch({ type: TRAINING_ERROR, error });
  }
};
export const leaveTraining = (id, training) => async (dispatch) => {
  try {
    dispatch({ type: TRAINING_START_LOADING });
    const { data } = await api.leaveTraining(id, training);
    dispatch({ type: LEAVE_TRAINING, payload: data });
    dispatch({ type: TRAINING_END_LOADING });
  } catch (error) {
    dispatch({ type: TRAINING_ERROR, error });
  }
};
export const fetchExtTraining =
  (role, user, department) => async (dispatch) => {
    try {
      dispatch({ type: TRAINING_START_LOADING });
      const { data } = await api.fetchExtTraining(role, user, department);
      dispatch({ type: FETCH_EXT_TRAINING, payload: data });
      dispatch({ type: TRAINING_END_LOADING });
    } catch (error) {
      dispatch({ type: TRAINING_ERROR, error });
    }
  };
export const updateTrainingStatus = (id, training) => async (dispatch) => {
  try {
    dispatch({ type: TRAINING_START_LOADING });
    const { data } = await api.updateTrainingStatus(id, training);
    dispatch({ type: UPDATE_TRAINING_STATUS, payload: data });
    dispatch({ type: TRAINING_END_LOADING });
  } catch (error) {
    dispatch({ type: TRAINING_ERROR, error });
  }
};
export const fetchExtTrainingHistory = (id) => async (dispatch) => {
  try {
    dispatch({ type: TRAINING_START_LOADING });
    const { data } = await api.fetchExtTrainingHistory(id);
    dispatch({ type: FETCH_EXT_TRAINING_HISTORY, payload: data });
    dispatch({ type: TRAINING_END_LOADING });
  } catch (error) {
    dispatch({ type: TRAINING_ERROR, error });
  }
};
export const fetchTrainingHistory = (id) => async (dispatch) => {
  try {
    dispatch({ type: TRAINING_START_LOADING });
    const { data } = await api.fetchTrainingHistory(id);
    dispatch({ type: FETCH_TRAINING_HISTORY, payload: data });
    dispatch({ type: TRAINING_END_LOADING });
  } catch (error) {
    dispatch({ type: TRAINING_ERROR, error });
  }
};
export const fetchUpcomingTraining = (id) => async (dispatch) => {
  try {
    dispatch({ type: TRAINING_START_LOADING });
    const { data } = await api.fetchUpcomingTraining(id);
    dispatch({ type: FETCH_UPCOMING_TRAINING, payload: data });
    dispatch({ type: TRAINING_END_LOADING });
  } catch (error) {
    dispatch({ type: TRAINING_ERROR, error });
  }
};
export const fetchTodayTrainings = () => async (dispatch) => {
  try {
    dispatch({ type: TRAINING_START_LOADING });
    const { data } = await api.fetchTodayTrainings();
    dispatch({ type: FETCH_TODAY_TRAINING, payload: data });
    dispatch({ type: TRAINING_END_LOADING });
  } catch (error) {
    dispatch({ type: TRAINING_ERROR, error });
  }
};
export const fetchTrainingCount = () => async (dispatch) => {
  try {
    dispatch({ type: TRAINING_START_LOADING });
    const { data } = await api.fetchTrainingCount();
    dispatch({ type: FETCH_TRAINING_COUNT, payload: data });
    dispatch({ type: TRAINING_END_LOADING });
  } catch (error) {
    dispatch({ type: TRAINING_ERROR, error });
  }
};
