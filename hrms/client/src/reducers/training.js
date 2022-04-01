import {
  CREATE_TRAINING,
  FETCH_ALL_TRAINING,
  FETCH_ONE_TRAINING,
  TRAINING_START_LOADING,
  TRAINING_END_LOADING,
  TRAINING_ERROR,
  UPDATE_TRAINING,
  LEAVE_TRAINING,
  FETCH_EXT_TRAINING,
  UPDATE_TRAINING_STATUS,
  FETCH_EXT_TRAINING_HISTORY,
  FETCH_TRAINING_HISTORY,
  FETCH_UPCOMING_TRAINING,
  FETCH_TODAY_TRAINING,
  FETCH_TRAINING_COUNT,
  TRAINING_SUCCESS,
} from '../constants/actionTypes';
import { handleError } from './error.js';
export default (
  state = { error: null, isLoading: true, trainings: [], success: null },
  action
) => {
  switch (action.type) {
    case TRAINING_START_LOADING:
      return { ...state, isLoading: true, error: null, success: null };
    case TRAINING_END_LOADING:
      return { ...state, isLoading: false };
    case TRAINING_ERROR: {
      return {
        ...state,
        error: handleError(action.error) || '',
        isLoading: false,
      };
    }
    case TRAINING_SUCCESS: {
      return { ...state, success: action.payload.success };
    }
    case FETCH_ONE_TRAINING:
      return { ...state, training: action.payload };
    case FETCH_ALL_TRAINING:
      return { ...state, trainings: action.payload };
    case CREATE_TRAINING:
      return { ...state, trainings: [...state.trainings, action.payload] };

    case UPDATE_TRAINING:
      return {
        ...state,
        training: action.payload,
      };

    case LEAVE_TRAINING:
      return {
        ...state,
        training: action.payload,
      };

    case FETCH_EXT_TRAINING:
      return { ...state, trainings: action.payload };

    case UPDATE_TRAINING_STATUS:
      return {
        ...state,
        trainings: state.trainings.map((training) =>
          training._id === action.payload._id ? action.payload : training
        ),
        training: action.payload,
      };

    case FETCH_EXT_TRAINING_HISTORY:
      return { ...state, extTrainings: action.payload };

    case FETCH_TRAINING_HISTORY:
      return { ...state, trainingHistory: action.payload };

    case FETCH_UPCOMING_TRAINING:
      return { ...state, upcomingTraining: action.payload };

    case FETCH_TODAY_TRAINING:
      return { ...state, trainings: action.payload };

    case FETCH_TRAINING_COUNT:
      return { ...state, trainingCount: action.payload };

    default:
      return state;
  }
};
