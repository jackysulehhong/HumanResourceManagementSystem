import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }

  return req;
});
const config = {
  headers: {
    'content-type': 'multipart/form-data',
  },
};
export const fetchAllLeaves = () => API.get('/leaves');
export const fetchLeaveById = (id) => API.get(`/leaves/${id}`);
export const fetchLeaveByDateRange = (dateRange) =>
  API.post(`/leaves/range`, dateRange);
export const fetchLeaveByDateRangePersonal = (dateRange) =>
  API.post(`/leaves/range/personal`, dateRange);
export const createLeave = (newLeave) => API.post('/leaves', newLeave);
export const updateLeave = (id, updatedLeave) =>
  API.patch(`/leaves/${id}`, updatedLeave);
export const fetchLeaveRequests = (role, user, department) =>
  API.get(`/leaves/${role}/${user}/${department}`);
export const fetchUpcomingLeaves = (id) => API.get(`/leaves/upcoming/${id}`);
export const fetchLeaveHistory = (id) => API.get(`/leaves/history/${id}`);
export const fetchTodayLeaves = () => API.get('/leaves/date/today');
export const fetchLeaveCount = () => API.get('/leaves/count/dept');

export const signIn = (formData) => API.post('/users/signIn', formData);
export const signUp = (formData) => API.post('/users/signUp', formData);
export const resetPassword = (email) => API.post('/users/resetPassword', email);
export const changePassword = (id, password) =>
  API.post(`/users/${id}/changePassword`, password);
export const updateAuth = (id) => API.get(`/users/updateAuth/${id}`);
export const updateSettings = (id, settings) =>
  API.post(`/users/updateSettings/${id}`, settings);

export const getDepts = () => API.get('/depts');
export const getDept = (id) => API.get(`depts/${id}`);
export const updateDept = (id, formData) => API.post(`/depts/${id}`, formData);
export const createDept = (newDept) => API.post('/depts', newDept);
export const deleteDept = (id) => API.delete(`/depts/${id}`);

export const createUser = (formData) => API.post('/users', formData);
export const getUsers = () => API.get('/users');
export const getUser = (id) => API.get(`users/${id}`);
export const updateUser = (id, updatedUser) =>
  API.patch(`/users/${id}`, updatedUser);
export const fetchDeptUsers = (department) =>
  API.get(`users/dept/${department}`);

export const createLeaveType = (formData) => API.post('/leaveTypes', formData);
export const getLeaveTypes = () => API.get('/leaveTypes');
export const getLeaveType = (id) => API.get(`/leaveTypes/${id}`);
export const updateLeaveType = (id, updatedLeaveType) =>
  API.patch(`/leaveTypes/${id}`, updatedLeaveType);

export const createRole = (formData) => API.post('/roles', formData);
export const getRoles = () => API.get('/roles');
export const getRole = (id) => API.get(`/roles/${id}`);
export const updateRole = (id, updatedRole) =>
  API.patch(`/roles/${id}`, updatedRole);

export const fetchAllHolidays = () => API.get('/holidays');
export const fetchHolidaysByYear = (year) => API.get(`/holidays/${year}`);
export const createHoliday = (formData) => API.post('/holidays', formData);
export const updateHoliday = (year, id, formData) =>
  API.post(`/holidays/${year}/${id}`, formData);
export const getHoliday = (year, id) => API.get(`/holidays/${year}/${id}`);
export const deleteHoliday = (year, id) =>
  API.delete(`/holidays/${year}/${id}`);

export const createTraining = (newTraining) =>
  API.post('/training', newTraining);
export const fetchAllTrainings = () => API.get('/training');
export const fetchTrainingById = (id) => API.get(`/training/${id}`);
export const updateTraining = (id, updatedTraining) =>
  API.post(`/training/${id}`, updatedTraining);
export const leaveTraining = (id, updatedTraining) =>
  API.patch(`/training/${id}`, updatedTraining);
export const fetchExtTraining = (role, user, department) =>
  API.get(`/training/ext/${role}/${user}/${department}`);
export const updateTrainingStatus = (id, updatedTraining) =>
  API.post(`/training/ext/${id}`, updatedTraining);
export const fetchExtTrainingHistory = (id) =>
  API.get(`/training/history/ext/${id}`);
export const fetchTrainingHistory = (id) => API.get(`/training/history/${id}`);
export const fetchUpcomingTraining = (id) =>
  API.get(`/training/upcoming/${id}`);
export const fetchTodayTrainings = () => API.get('/training/date/today');
export const fetchTrainingCount = () => API.get('/training/count/dept');

export const createPolicy = (formData) => API.post('/policy', formData);
export const getPolicies = () => API.get('/policy');
export const getPoliciesByDept = (dept) => API.get(`/policy/dept/${dept}`);
export const getPolicy = (id) => API.get(`/policy/${id}`);
export const updatePolicy = (id, updatedPolicy) =>
  API.patch(`/policy/${id}`, updatedPolicy);

export const getNotificationsById = (id) => API.get(`/notification/${id}`);
export const clearNotificationsByType = (user, type) =>
  API.post(`/notification/${user}`, type);
export const setNotificationRead = (id) => API.post(`/notification/read/${id}`);

export const getTrainingProgresses = () => API.get('/trainingProgress');
export const getTrainingProgress = (id) => API.get(`trainingProgress/${id}`);
export const updateTrainingProgress = (id, updatedProgress) =>
  API.post(`/trainingProgress/${id}`, updatedProgress);
export const getTrainingProgressUser = (id) =>
  API.get(`trainingProgress/user/${id}`);
export const getTrainingProgressDept = (id) =>
  API.get(`trainingProgress/dept/${id}`);
