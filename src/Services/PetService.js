import axios from "axios"
import { URL } from "../Common/Common";

class PetService{
    addPet(formData, userId, storeId){
        const ADD_PET_URL = URL + "/pets/add/"+userId+"/"+ storeId;
        return axios.post(ADD_PET_URL, formData, {headers: {"Content-Type": "multipart/form-data"}})
    }

    allPets(userId){
        const ALL_PET_URL = URL + "/pets/all_pets/"+userId;
        return axios.get(ALL_PET_URL);
    }
    loadPetImage(userId, imgName){
        const LOAD_PET_IMAGE_URL = URL + "/pets/load_petImage/"+userId + "/" + imgName;
        return axios.get(LOAD_PET_IMAGE_URL);
    }
}

export default new PetService();