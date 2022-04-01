import {
  CREATE_POLICY,
  FETCH_ALL_POLICY,
  FETCH_ONE_POLICY,
  UPDATE_POLICY,
  POLICY_END_LOADING,
  POLICY_ERROR,
  POLICY_START_LOADING,
  POLICY_SUCCESS,
  FETCH_POLICY_BY_DEPT,
} from '../constants/actionTypes';
import { handleError } from './error.js';
export default (
  state = { error: null, isLoading: true, policies: [], success: null },
  action
) => {
  switch (action.type) {
    case POLICY_START_LOADING:
      return { ...state, isLoading: true, error: null, success: null };
    case POLICY_END_LOADING:
      return { ...state, isLoading: false };
    case POLICY_ERROR: {
      return {
        ...state,
        error: handleError(action.error) || '',
        isLoading: false,
      };
    }
    case POLICY_SUCCESS: {
      return { ...state, success: action.payload.success };
    }

    case UPDATE_POLICY:
      return {
        ...state,
        policies: state.policies.map((policy) =>
          policy._id === action.payload._id ? action.payload : policy
        ),
      };
    case FETCH_ONE_POLICY:
      return { ...state, policy: action.payload };
    case FETCH_ALL_POLICY:
    case FETCH_POLICY_BY_DEPT:
      return { ...state, policies: action.payload };
    case CREATE_POLICY:
      return { ...state, policies: [...state.policies, action.payload] };
    default:
      return state;
  }
};
