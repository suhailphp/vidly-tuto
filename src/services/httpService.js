import axios from "axios";
import { toast } from "react-toastify";
import logger from "../services/logService";
import { getJwt } from "./authService";

//setting base url
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

//setting default headers for secured api end point .
axios.defaults.headers.common["x-auth-token"] = getJwt();
//this function for take all unexpected error Gobally. then no need to repeat everywhere
axios.interceptors.response.use(
  (success) => {
    //console.log("API Call success", success);
    return Promise.resolve(success);
  },
  (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    if (!expectedError) {
      toast.error("Unexpected error occured, please try again");
      logger.log(error);
    }
    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
