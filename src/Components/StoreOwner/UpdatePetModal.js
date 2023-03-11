import { Alert, Snackbar } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import {handleDobValidation, handleDropdownValidation, handleEmailValidation} from "../../Common/Validations";
import PetService from "../../Services/PetService";


const UpdatePetModal = (petId)=>{
    const user = JSON.parse(localStorage.getItem("user"));
    const storeId = localStorage.getItem("storeId")
    const [pet,setPet] = useState("");
    const [alert, setAlert] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [open, setOpen] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors},
      } = useForm();

      useEffect(()=>{
        getPetByPetId();
    }, [])

    const getPetByPetId = () => {
        PetService.getPet(petId)
        .then(response =>{
            let result = response.data;
            console.log(result)
            if (result.status === 'success'){
                setAlert(result.message)
                setAlertSeverity("success")
                setOpen(true);
                document.getElementsByName("petsId")[0].value = result.data.petsId;
                document.getElementsByName("storeId")[0].value = result.data.storeInfo.storeId;
                setPet(result.data)
            }else{
                setAlert(result.message)
                setAlertSeverity("error")
                setOpen(true);
            }
        })
    }
      const onSubmit = (formState)=>{
        formState["petsId"] = document.getElementsByName("petsId")[0].value;
        formState["storeId"] = document.getElementsByName("storeId")[0].value;

        PetService.updatePet(formState)
        
        .then(response => {
            let result = response.data;
            if (result.status === "success"){
                console.log(result.data)
                setAlert(result.message)
                setAlertSeverity("success")
                setOpen(true);
                setTimeout(function(){
                }.bind(this), 1000)
            }else{
                setAlert(result.message)
                setAlertSeverity("error")
                setOpen(true);
            }
        }
        )
    }

    return <div>
        <Snackbar open={open} autoHideDuration={1000} onClose={() => setOpen(false)}>
                    <Alert severity={alertSeverity} sx={{ width: '100%' }}>
                        {alert}
                    </Alert>
                </Snackbar>
        <div className="card" style={{width: '30rem', marginTop: '10px'}}>
            <span className="card-title" style={{fontSize: '25px'}}><b> Update Pet Info</b></span>
            <div className="card-body">
            <input type="text" className="form-control" hidden name="petsId" id="userId" />
            <input type="text" className="form-control" hidden name="storeId" id="userId" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row p-2">
                    <input {...register('petOrigin', { required: true })} type={'text'} className="form-control" placeholder="Pet origin" defaultValue={pet.petOrigin}/>
                </div>
                <div className="row p-2">
                    <input {...register('petBreed', { required: true })} type={'text'} className="form-control" placeholder="Pet breed" defaultValue={pet.petBreed}/>
                </div>
                <div className="row p-2">
                    <input {...register('petBreedGroup', { required: true})} type={'text'} className="form-control" placeholder="Pet breed group" defaultValue={pet.petBreedGroup}/>
                </div>
                <div className="row p-2">
                    <input {...register('petHeight', { required: true})} type={'text'} className="form-control" placeholder="Pet height" defaultValue={pet.petHeight}/>
                </div>
                <div className="row p-2">
                    <input {...register('petWeight', { required: true})} type={'text'} className="form-control" placeholder="Pet weight" defaultValue={pet.petWeight}/>
                </div>
                <div className="row p-2">
                    <input {...register('petLifespan', { required: true})} type={'text'} className="form-control" placeholder="Pet lifespan" defaultValue={pet.petLifespan}/>
                </div>
                <div className="row p-2">
                    <input {...register('petTemperament', { required: true})} type={'text'} className="form-control" placeholder="Pet temperament" defaultValue={pet.petTemperament}/>
                </div>
                <div className="row p-2">
                    {/* <input {...register('petApartmentFriendly', { required: true, validate: handleDobValidation})} type={'text'} className="form-control" placeholder="Pet apartment friendly"/> */}
                    <select className="form-control" {...register('petApartmentFriendly', {required: true})}  defaultValue={pet.petApartmentFriendly}>
                        <option value="">Select friendliness</option>
                        <option value="highly">Highly</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="row p-2">
                    <input {...register('petPrice', { required: true})} type={'number'} maxLength={7} minLength={4} className="form-control" placeholder="Pet price" defaultValue={[pet.petPrice]}/>
                </div>
                <div className="row p-2">
                    <input {...register('petQuantity', { required: true})} type={'number'} maxLength={3} minLength={3} className="form-control" placeholder="Pet quantity" defaultValue={pet.petQuantity}/>
                </div>
                {/* <div className="row p-2">
                <input {...register('file', { required: true })} className='form-control mb-3' type={'file'} accept={'image/*'} placeholder='Upload pet image' defaultValue={pet.petImgUrl}/>
                </div> */}
                <div className="row p-2 justify-content-center">
                        <input type="submit" className="btn btn-success w-50" value="Update"/>
                        
                    </div>
            </form>
            </div>
       
        </div>
    </div>
}
export default UpdatePetModal;