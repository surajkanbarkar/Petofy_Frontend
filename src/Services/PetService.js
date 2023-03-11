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
    updatePet(formData){
        const UPDATE_PET_URL = URL + "/pets/update";
        debugger
        return axios.put(UPDATE_PET_URL, formData)
    }
    getPet(petId){
        const GET_PET_URL = URL + "/pets/"+ petId.petsId;
        return axios.get(GET_PET_URL, {headers: {"Content-Type": "application/json"}})
    }
    deletePet(storeId, petId){
        const DELETE_PET_URL = URL + "/pets/delete/"+ storeId + "/" + petId;
        return axios.delete(DELETE_PET_URL)
    }
    getAllPetsByUserId(userId){
        const GET_ALL_PET_URL = URL + "/pets/all_pets/"+ userId;
        return axios.get(GET_ALL_PET_URL)
    }
}

export default new PetService();