import axios from "axios";
import userApiConstant from "../apiConstants/userApiConstant";

export function login(loginData) {
    try {
      const response = axios.post("https://localhost:44337/api/User/loginEmployee", loginData)
      // const response = axios.post(process.env.REACT_APP_SERVER_URL+userApiConstant.login,loginData);
      return response;
    }
    catch (error) {
      return error;
    }
  }

  export function signUp(signUpData) {
    try {
      const response = axios.post("https://localhost:44337/api/User/registerEmployee", signUpData)
      return response;
    }
    catch (error) {
      return error;
    }
  }

  export function forgot(email) {
    try {
      const response = axios.post("https://localhost:44337/api/User/forgetPassword?emailAddress="+email)
      return response;
    }
    catch (error) {
      return error;
    }
  }
  
  export function reset(resetData) {
    try {
      const response = axios.put("https://localhost:44337/api/User/resetPassword",resetData)
      return response;
    }
    catch (error) {
      return error;
    }
  }
  
  
  
