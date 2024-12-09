import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { getToken } from './token';
import { ApiUrl, Timeout } from '../pages/const';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StatusCodes } from 'http-status-codes';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: ApiUrl,
    timeout: Timeout,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['X-Token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{message: string; details: {messages: string[]}[]}>) => {
      if (error.response && error.response.data && shouldDisplayError(error.response)) {
        const errorData = error.response.data;
        if (errorData.details && errorData.details[0] && errorData.details[0].messages[0]) {
          toast.warn(errorData.details[0].messages[0]);
        } else {
          toast.warn(errorData.message || 'Произошла ошибка');
        }
      }

      throw error;
    });
  return api;
};
