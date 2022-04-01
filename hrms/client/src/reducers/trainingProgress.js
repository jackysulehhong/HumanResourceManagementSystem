import {
  CREATE_TRAININGPROGRESS,
  FETCH_ALL_TRAININGPROGRESS,
  FETCH_ONE_TRAININGPROGRESS,
  TRAININGPROGRESS_START_LOADING,
  TRAININGPROGRESS_END_LOADING,
  TRAININGPROGRESS_ERROR,
  UPDATE_TRAININGPROGRESS,
  LEAVE_TRAININGPROGRESS,
  FETCH_EXT_TRAININGPROGRESS,
  UPDATE_TRAININGPROGRESS_STATUS,
  FETCH_EXT_TRAININGPROGRESS_HISTORY,
  FETCH_TRAININGPROGRESS_HISTORY,
  FETCH_UPCOMING_TRAININGPROGRESS,
  FETCH_TODAY_TRAININGPROGRESS,
  TRAININGPROGRESS_SUCCESS,
  FETCH_DEPT_TRAININGPROGRESS,
  FETCH_USER_TRAININGPROGRESS,
} from '../constants/actionTypes';
import { handleError } from './error.js';
export default (
  state = {
    error: null,
    isLoading: true,
    trainingProgresses: [],
    success: null,
  },
  action
) => {
  switch (action.type) {
    case TRAININGPROGRESS_START_LOADING:
      return { ...state, isLoading: true, error: null, success: null };
    case TRAININGPROGRESS_END_LOADING:
      return { ...state, isLoading: false };
    case TRAININGPROGRESS_ERROR: {
      return {
        ...state,
        error: handleError(action.error) || '',
        isLoading: false,
      };
    }

    case FETCH_ONE_TRAININGPROGRESS:
      return { ...state, trainingProgress: action.payload };

    case FETCH_ALL_TRAININGPROGRESS:
      return { ...state, trainingProgresses: action.payload };
    case FETCH_DEPT_TRAININGPROGRESS:
      return { ...state, trainingProgresses: action.payload };
    case FETCH_USER_TRAININGPROGRESS:
      return { ...state, trainingProgresses: action.payload };
    case CREATE_TRAININGPROGRESS:
      return {
        ...state,
        trainingProgresses: [...state.trainingProgress, action.payload],
      };
    case TRAININGPROGRESS_SUCCESS: {
      return { ...state, success: action.payload.success };
    }
    case UPDATE_TRAININGPROGRESS:
      return {
        ...state,
        trainingProgress: action.payload,
      };

    case LEAVE_TRAININGPROGRESS:
      return {
        ...state,
        trainingProgress: action.payload,
      };

    case FETCH_EXT_TRAININGPROGRESS:
      return { ...state, trainingProgresses: action.payload };

    case UPDATE_TRAININGPROGRESS_STATUS:
      return {
        ...state,
        trainingProgresses: state.trainingProgress.map((trainingProgress) =>
          trainingProgress._id === action.payload._id
            ? action.payload
            : trainingProgress
        ),
        trainingProgress: action.payload,
      };

    case FETCH_EXT_TRAININGPROGRESS_HISTORY:
      return { ...state, extTrainingProgress: action.payload };

    case FETCH_TRAININGPROGRESS_HISTORY:
      return { ...state, trainingProgresses: action.payload };

    case FETCH_UPCOMING_TRAININGPROGRESS:
      return { ...state, upcomingTrainingProgress: action.payload };

    case FETCH_TODAY_TRAININGPROGRESS:
      return { ...state, trainingProgresses: action.payload };

    default:
      return state;
  }
};
