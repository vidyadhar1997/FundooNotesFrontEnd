import axios from "axios";
import userApiConstant from "../apiConstants/userApiConstant";
export default class Service {

    login(loginData){
    try{
      const response = axios.post("https://localhost:44337/api/User/loginEmployee",loginData);
      return response;
    }
    catch(error){
        return error;
    }
}
}