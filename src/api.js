import axios from "axios";
import {createBrowserHistory} from "history";

const LOGIN_URL = `https://htmlacademy-react-3.appspot.com/wtw/login`;
const Error = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400
};
const history = createBrowserHistory();

export const createAPI = () => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response, request} = err;

    if (response.status === Error.UNAUTHORIZED) {

      if (request.responseURL !== LOGIN_URL) {
        history.push(`/login`);
      }
      throw err;
    }

    if (response.status === Error.BAD_REQUEST) {
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;

};

