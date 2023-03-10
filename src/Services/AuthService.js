import axios from "axios"
import { URL } from "../Common/Common";

class AuthService{
    loginService(formData){
        const LOGIN_URL = URL + "/auth/signin";
        return axios.post(LOGIN_URL, formData);
    }
    registerService(formData){
        const REGISTER_URL = URL + "/auth/signup";
        return axios.post(REGISTER_URL, formData, {headers: {"Content-Type": "multipart/form-data"}});
    }
    resetPassService(formData){
        const FORGOTPASS_URL = URL + "/auth/forgotpassword";
        return axios.put(FORGOTPASS_URL, formData);
    }
}

export default new AuthService;