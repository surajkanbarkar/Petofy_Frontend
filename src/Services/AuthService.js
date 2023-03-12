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
    updateUserProfileService(formData){
        const UPDATE_PROFILE_URL = URL + "/auth/update_profile";
        return axios.put(UPDATE_PROFILE_URL, formData, {headers: {"Content-Type": "application/json"}})
    }
    getUserProfile(userId){

        const USER_PROFILE_URL = URL + "/auth/get_profile/"+userId;
        return axios.get(USER_PROFILE_URL);
    }
}

export default new AuthService;