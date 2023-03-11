import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import {handleDobValidation, handleDropdownValidation, handleEmailValidation} from "../../Common/Validations";
import PetService from "../../Services/PetService";


const Errmsg = {
        color: 'red',
        fontWeight: 'bold',
        fontSize: '13px',
}

const AddPetModal = ({show, handleClose, userId, storeId})=>{

    const [alert, setAlert] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [open, setOpen] = useState(false);

    const onSubmit = (formState)=>{
        debugger

        const data = new FormData();
        data.append("petOrigin", formState["petOrigin"])
        data.append("petBreed", formState["petBreed"])
        data.append("petBreedGroup", formState["petBreedGroup"])
        data.append("petHeight", formState["petHeight"])
        data.append("petWeight", formState["petWeight"])
        data.append("petLifespan", formState["petLifespan"])
        data.append("petTemperament", formState["petTemperament"])
        data.append("petApartmentFriendly", formState["petApartmentFriendly"])
        data.append("petPrice", formState["petPrice"])
        data.append("petQuantity", formState["petQuantity"])
        data.append("file", formState["file"][0])

        PetService.addPet(data, userId, storeId)
        .then(response => {
            let result = response.data;
            if (result.status === "success"){
                console.log(result.data)
                setAlert(result.message)
                setAlertSeverity("success")
                setOpen(true);
                // setStore(result.data)
            }else{
                setAlert(result.message)
                setAlertSeverity("error")
                setOpen(true);
            }
        }
        )
    }
    const {
        register,
        handleSubmit,
        formState: { errors},
      } = useForm();
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add pets</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Snackbar open={open} autoHideDuration={1000} onClose={() => setOpen(false)}>
                <Alert severity={alertSeverity} sx={{ width: '100%' }}>
                    {alert}
                </Alert>
            </Snackbar>
            <input type="text" className="form-control" hidden name="userId" id="userId" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row p-2">
                    <input {...register('petOrigin', { required: true })} type={'text'} className="form-control" placeholder="Pet origin"/>
                </div>
                <div className="row p-2">
                    <input {...register('petBreed', { required: true })} type={'text'} className="form-control" placeholder="Pet breed"/>
                </div>
                <div className="row p-2">
                    <input {...register('petBreedGroup', { required: true})} type={'text'} className="form-control" placeholder="Pet breed group"/>
                </div>
                <div className="row p-2">
                    <input {...register('petHeight', { required: true})} type={'text'} className="form-control" placeholder="Pet height" />
                </div>
                <div className="row p-2">
                    <input {...register('petWeight', { required: true})} type={'text'} className="form-control" placeholder="Pet weight" />
                </div>
                <div className="row p-2">
                    <input {...register('petLifespan', { required: true})} type={'text'} className="form-control" placeholder="Pet lifespan"/>
                </div>
                <div className="row p-2">
                    <input {...register('petTemperament', { required: true})} type={'text'} className="form-control" placeholder="Pet temperament"/>
                </div>
                <div className="row p-2">
                    {/* <input {...register('petApartmentFriendly', { required: true, validate: handleDobValidation})} type={'text'} className="form-control" placeholder="Pet apartment friendly"/> */}
                    <select className="form-control" {...register('petApartmentFriendly', {required: true})} >
                        <option value="">Select friendliness</option>
                        <option value="highly">Highly</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="row p-2">
                    <input {...register('petPrice', { required: true})} type={'number'} maxLength={7} minLength={4} className="form-control" placeholder="Pet price" />
                </div>
                <div className="row p-2">
                    <input {...register('petQuantity', { required: true})} type={'number'} maxLength={3} minLength={3} className="form-control" placeholder="Pet quantity" />
                </div>
                <div className="row p-2">
                <input {...register('file', { required: true })} className='form-control mb-3' type={'file'} accept={'image/*'} placeholder='Upload pet image'/>
                </div>
                <div className="row p-2 justify-content-center">
                        <input type="submit" className="btn btn-success w-50" value="Add"/>
                    </div>
            </form>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    )
}
export default AddPetModal;