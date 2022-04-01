import { message } from 'antd';

export const handleError = (error) => {
  try {
    if (error.response) {
      // Request made and server responded
      return error.response.data.message.toString();
      //  message.error(error.response.data.message.toString());
    } else if (error.request) {
      // The request was made but no response was received
      return error.request.toString();
      // message.error(error.request.toString());
    } else {
      // Something happened in setting up the request that triggered an Error
      return error.message.toString();
      // message.error(error.message.toString());
    }
  } catch (e) {
    return error;
  }
};
