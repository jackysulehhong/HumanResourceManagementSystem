import * as api from '../api/index.js';
import {
  CREATE_POLICY,
  FETCH_ALL_POLICY,
  FETCH_ONE_POLICY,
  POLICY_END_LOADING,
  POLICY_ERROR,
  POLICY_START_LOADING,
  UPDATE_POLICY,
} from '../constants/actionTypes';

export const getPolicies = () => async (dispatch) => {
  try {
    dispatch({ type: POLICY_START_LOADING });
    const { data } = await api.getPolicies();
    dispatch({ type: FETCH_ALL_POLICY, payload: data });
    dispatch({ type: POLICY_END_LOADING });
  } catch (error) {
    dispatch({ type: POLICY_ERROR, error });
  }
};

export const getPoliciesByDept = (dept) => async (dispatch) => {
  try {
    dispatch({ type: POLICY_START_LOADING });
    const { data } = await api.getPoliciesByDept(dept);
    dispatch({ type: FETCH_ALL_POLICY, payload: data });
    dispatch({ type: POLICY_END_LOADING });
  } catch (error) {
    dispatch({ type: POLICY_ERROR, error });
  }
};
export const getPolicy = (id) => async (dispatch) => {
  try {
    dispatch({ type: POLICY_START_LOADING });
    const { data } = await api.getPolicy(id);
    dispatch({ type: FETCH_ONE_POLICY, payload: data });
    dispatch({ type: POLICY_END_LOADING });
    return data;
  } catch (error) {
    dispatch({ type: POLICY_ERROR, error });
    return false;
  }
};
export const createPolicy = (role) => async (dispatch) => {
  try {
    dispatch({ type: POLICY_START_LOADING });
    const { data } = await api.createPolicy(role);
    dispatch({ type: CREATE_POLICY, payload: data });
    dispatch({ type: POLICY_END_LOADING });
  } catch (error) {
    dispatch({ type: POLICY_ERROR, error });
  }
};
export const updatePolicy = (id, role) => async (dispatch) => {
  try {
    dispatch({ type: POLICY_START_LOADING });
    const { data } = await api.updatePolicy(id, role);
    dispatch({ type: UPDATE_POLICY, payload: data });
    dispatch({ type: POLICY_END_LOADING });
  } catch (error) {
    dispatch({ type: POLICY_ERROR, error });
  }
};
