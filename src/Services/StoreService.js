import axios from "axios"
import { URL } from "../Common/Common";

class StoreService {
    addStore(formState){
        const ADD_STORE = URL + "/store/add"
        return axios.post(ADD_STORE, formState);
    }
    getStoreProfile(userId){
        const GET_STORE_PROFILE = URL + "/store/get_store/"+ userId
        return axios.get(GET_STORE_PROFILE)
    }

    updateStoreProfile(formState){
        const UPDATE_STORE_PROFILES = URL + "/store/update"
        return axios.get(UPDATE_STORE_PROFILES, formState)
    }
}

export default new StoreService;