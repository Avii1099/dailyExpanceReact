import { ApiErrorHandler } from './ApiErrorHandler';
import axios from './axios';

export const fetchExpanseEmoji = async () => {
  const { handleError } = ApiErrorHandler();
  try {
    const response = await axios.get('/expanse/emoji/', {
      headers: {
        Authorization: 'Bearer',
      },
    });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};
