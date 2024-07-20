export const ApiErrorHandler = () => {
  const getFieldErrorMessage = (error) => {
    const errorData = {};
    error.response.data.error.forEach(({ field, message }) => {
      errorData[field] = message;
    });
    return errorData;
  };

  const handleError = (error) => {
    const { isServerError, response } = error;
    if (isServerError || response?.status === 503 || response?.status === 500) {
      // window.location.href = '/under-maintenance';
      console.error('Server Error');
      localStorage.clear();
    } else if (response?.status === 401) {
      window.location.href = '/';
      localStorage.clear();
      return getFieldErrorMessage(error);
    } else {
      return getFieldErrorMessage(error);
    }
  };

  return { handleError };
};
