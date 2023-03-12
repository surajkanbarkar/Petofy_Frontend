import axios from "axios"
import { URL } from "../Common/Common";

class PetOrderService{
    getAllUserOrders(userId){
        debugger
        const ALL_USER_ORDERS = URL + "/pet_orders/all_orders/"+userId;
        return axios.get(ALL_USER_ORDERS);
    }
    placeOrder(userId, formData){
        debugger
        const PLACE_ORDER = URL + "/pet_orders/add/"+userId;
        return axios.post(PLACE_ORDER, formData);
    }
}

export default new PetOrderService;