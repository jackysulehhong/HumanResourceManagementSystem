import * as api from '../api/index.js';
import {
  CREATE_LEAVE,
  FETCH_ALL_LEAVE,
  FETCH_LEAVE_BY_DATERANGE,
  FETCH_LEAVE_BY_DATERANGE_PERSONAL,
  FETCH_LEAVE_COUNT,
  FETCH_LEAVE_HISTORY,
  FETCH_LEAVE_REQUESTS,
  FETCH_ONE_LEAVE,
  FETCH_TODAY_LEAVE,
  FETCH_UPCOMING_LEAVE,
  LEAVE_END_LOADING,
  LEAVE_ERROR,
  LEAVE_START_LOADING,
  UPDATE_LEAVE,
} from '../constants/actionTypes';

export const fetchAllLeaves = () => async (dispatch) => {
  try {
    dispatch({ type: LEAVE_START_LOADING });
    const { data } = await api.fetchAllLeaves();
    dispatch({ type: FETCH_ALL_LEAVE, payload: data });
    dispatch({ type: LEAVE_END_LOADING });
  } catch (error) {
    dispatch({ type: LEAVE_ERROR, error });
  }
};
export const fetchLeaveById = (id) => async (dispatch) => {
  try {
    dispatch({ type: LEAVE_START_LOADING });
    const { data } = await api.fetchLeaveById(id);
    dispatch({ type: FETCH_ONE_LEAVE, payload: data });
    dispatch({ type: LEAVE_END_LOADING });

    return data;
  } catch (error) {
    dispatch({ type: LEAVE_ERROR, error });
  }
};

export const createLeave = (leave) => async (dispatch) => {
  try {
    dispatch({ type: LEAVE_START_LOADING });
    const { data } = await api.createLeave(leave);
    dispatch({ type: CREATE_LEAVE, payload: data });
    dispatch({ type: LEAVE_END_LOADING });
  } catch (error) {
    dispatch({ type: LEAVE_ERROR, error });
  }
};
export const updateLeave = (id, leave) => async (dispatch) => {
  try {
    dispatch({ type: LEAVE_START_LOADING });
    const { data } = await api.updateLeave(id, leave);
    dispatch({ type: UPDATE_LEAVE, payload: data });
    dispatch({ type: LEAVE_END_LOADING });
  } catch (error) {
    dispatch({ type: LEAVE_ERROR, error });
  }
};
export const fetchLeaveByDateRange = (dateRange) => async (dispatch) => {
  try {
    dispatch({ type: LEAVE_START_LOADING });
    const data = await api.fetchLeaveByDateRange(dateRange);

    dispatch({ type: FETCH_LEAVE_BY_DATERANGE, payload: data });
    dispatch({ type: LEAVE_END_LOADING });
  } catch (error) {
    dispatch({ type: LEAVE_ERROR, error });
  }
};

export const fetchLeaveByDateRangePersonal =
  (dateRange) => async (dispatch) => {
    try {
      dispatch({ type: LEAVE_START_LOADING });
      const data = await api.fetchLeaveByDateRangePersonal(dateRange);

      dispatch({ type: FETCH_LEAVE_BY_DATERANGE_PERSONAL, payload: data });
      dispatch({ type: LEAVE_END_LOADING });
    } catch (error) {
      dispatch({ type: LEAVE_ERROR, error });
    }
  };
export const fetchLeaveRequests =
  (role, user, department) => async (dispatch) => {
    try {
      dispatch({ type: LEAVE_START_LOADING });
      const { data } = await api.fetchLeaveRequests(role, user, department);
      dispatch({ type: FETCH_LEAVE_REQUESTS, payload: data });
      dispatch({ type: LEAVE_END_LOADING });
    } catch (error) {
      dispatch({ type: LEAVE_ERROR, error });
    }
  };
export const fetchUpcomingLeaves = (id) => async (dispatch) => {
  try {
    dispatch({ type: LEAVE_START_LOADING });
    const { data } = await api.fetchUpcomingLeaves(id);
    dispatch({ type: FETCH_UPCOMING_LEAVE, payload: data });
    dispatch({ type: LEAVE_END_LOADING });
  } catch (error) {
    dispatch({ type: LEAVE_ERROR, error });
  }
};
export const fetchLeaveHistory = (id) => async (dispatch) => {
  try {
    dispatch({ type: LEAVE_START_LOADING });
    const { data } = await api.fetchLeaveHistory(id);
    dispatch({ type: FETCH_LEAVE_HISTORY, payload: data });
    dispatch({ type: LEAVE_END_LOADING });
  } catch (error) {
    dispatch({ type: LEAVE_ERROR, error });
  }
};
export const fetchTodayLeaves = () => async (dispatch) => {
  try {
    dispatch({ type: LEAVE_START_LOADING });
    const { data } = await api.fetchTodayLeaves();
    dispatch({ type: FETCH_TODAY_LEAVE, payload: data });
    dispatch({ type: LEAVE_END_LOADING });
  } catch (error) {
    dispatch({ type: LEAVE_ERROR, error });
  }
};
export const fetchLeaveCount = () => async (dispatch) => {
  try {
    dispatch({ type: LEAVE_START_LOADING });
    const { data } = await api.fetchLeaveCount();
    dispatch({ type: FETCH_LEAVE_COUNT, payload: data });
    dispatch({ type: LEAVE_END_LOADING });
  } catch (error) {
    dispatch({ type: LEAVE_ERROR, error });
  }
};
