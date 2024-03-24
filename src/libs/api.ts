import axios, { AxiosError } from 'axios';

const API_ORIGIN =
  process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:5000'
    : 'http://127.0.0.1:5000';

axios.defaults.baseURL = `${API_ORIGIN}/api/v1`;

axios.defaults.validateStatus = function (status) {
  return status <= 500;
};

axios.interceptors.request.use(
  (req) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('[AxiosRequest]', req);
    }

    return req;
  },
  (err) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('[AxiosError]', err);
    }

    return err;
  },
);

axios.interceptors.response.use(
  (res) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('[AxiosResponse]', res);
    }

    return res;
  },
  (err: AxiosError) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('[AxiosError]', err);
    }

    return err;
  },
  {
    synchronous: true,
  },
);

export const apiRoutes = {
  test: '/test',
};

export type BasicResponse<T> = {
  data: T;
  config: {
    status: number;
  };
};

export function requestGet<T>(
  url: string,
  header: object,
): Promise<BasicResponse<T>> {
  return axios
    .get(url, {
      headers: {
        'Content-Type': 'Application/json',
        ...header,
      },
    })
    .then(
      (res) =>
        ({
          data: res.data as T,
          config: {
            status: res.status as number,
          },
        } as BasicResponse<T>),
    )
    .catch((err: AxiosError) => {
      return {
        data: {} as T,
        config: {
          status: err.response?.status || 500,
        },
      } as BasicResponse<T>;
    });
}
