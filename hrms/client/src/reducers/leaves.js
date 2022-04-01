import {
  CREATE_LEAVE,
  FETCH_ALL_LEAVE,
  FETCH_LEAVE_BY_DATERANGE,
  FETCH_ONE_LEAVE,
  LEAVE_END_LOADING,
  LEAVE_ERROR,
  LEAVE_START_LOADING,
  UPDATE_LEAVE,
  FETCH_LEAVE_REQUESTS,
  FETCH_UPCOMING_LEAVE,
  FETCH_LEAVE_HISTORY,
  FETCH_TODAY_LEAVE,
  FETCH_LEAVE_COUNT,
  LEAVE_SUCCESS,
  FETCH_LEAVE_BY_DATERANGE_PERSONAL,
} from '../constants/actionTypes';
import { handleError } from './error.js';
export default (
  state = {
    error: null,
    isLoading: true,
    leaves: [],
    calendar: [],
    leave: null,
    success: null,
  },
  action
) => {
  switch (action.type) {
    case LEAVE_START_LOADING:
      return { ...state, isLoading: true, error: null, success: null };
    case LEAVE_END_LOADING:
      return { ...state, isLoading: false };
    case LEAVE_ERROR: {
      return {
        ...state,
        error: handleError(action.error) || '',
        isLoading: false,
      };
    }
    case LEAVE_SUCCESS: {
      return { ...state, success: action.payload.success };
    }
    case UPDATE_LEAVE:
      return {
        ...state,
        leaves: state.leaves.map((leave) =>
          leave._id === action.payload._id ? action.payload : leave
        ),
        leave: action.payload,
      };
    case FETCH_ONE_LEAVE:
      return { ...state, leave: action.payload };

    case FETCH_LEAVE_BY_DATERANGE: {
      const calLeaves =
        action.payload.data.leaves.map((leave) => {
          const leaveType = leave.leaveType;

          return {
            id: leave._id,
            title: `${leave.user.first_name} ${leave.user.last_name} (${leaveType.code})`,
            start: leave.fromDate,
            url: `/leaves/view/${leave._id}`,
            end: leave.toDate,
            extendedProps: {
              emp_id: leave.emp_id,
            },
            allDay: true,
            color: leaveType.color,
          };
        }) || [];
      const calHolidays =
        action.payload.data.holidays.map((holiday) => {
          return {
            id: holiday._id,
            title: holiday.title,
            start: holiday.startDate,
            end: holiday.endDate,
            allDay: true,
            display: 'background',
          };
        }) || [];
      return {
        ...state,
        calendar: [...calHolidays, ...calLeaves],
      };
    }
    case FETCH_LEAVE_BY_DATERANGE_PERSONAL: {
      const calLeaves =
        action.payload.data.leaves.map((leave) => {
          const leaveType = leave.leaveType;

          return {
            id: leave._id,
            title: `${leave.user.first_name} ${leave.user.last_name} (${leaveType.code}) [${leave.status}]`,
            start: leave.fromDate,
            url: `/leaves/view/${leave._id}`,
            end: leave.toDate,
            extendedProps: {
              emp_id: leave.emp_id,
            },
            allDay: true,
            color: leaveType.color,
          };
        }) || [];
      const calHolidays =
        action.payload.data.holidays.map((holiday) => {
          return {
            id: holiday._id,
            title: holiday.title,
            start: holiday.startDate,
            end: holiday.endDate,
            allDay: true,
            display: 'background',
          };
        }) || [];
      return {
        ...state,
        calendar: [...calHolidays, ...calLeaves],
      };
    }
    case FETCH_ALL_LEAVE:
      return { ...state, leaves: action.payload };
    case CREATE_LEAVE:
      return { ...state, leaves: [...state.leaves, action.payload] };

    case FETCH_LEAVE_REQUESTS:
      return { ...state, leaves: action.payload };

    case FETCH_UPCOMING_LEAVE:
      return { ...state, upcomingLeave: action.payload };

    case FETCH_LEAVE_HISTORY:
      return { ...state, leaveHistory: action.payload };

    case FETCH_TODAY_LEAVE:
      return { ...state, todayLeaves: action.payload };

    case FETCH_LEAVE_COUNT:
      return { ...state, leaveCount: action.payload };

    default:
      return state;
  }
};
