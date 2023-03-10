import { Alert, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import PetService from "../../Services/PetService";
import UpdatePetModal from "./UpdatePetModal";

const PetViewCard = ({modalInfo}) => {
    console.log(modalInfo)
    const [updateCrdShow, setUpdateCrdShow] = useState(false)
    const [anchor, setAnchor] = useState(false);
    const [alert, setAlert] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [open, setOpen] = useState(false);

    const [img, setImg] = useState(null);
    useEffect(() => {
        getPetImage(modalInfo.petImgUrl)
    }, [])
    const getPetImage = (imgName) =>{
        console.log(imgName)
        PetService.loadPetImage(modalInfo.storeInfo.users.userId, imgName)
        .then(response =>{
            let result = response.data;
            setImg(result.data)
            document.getElementById("img").src = result;
            console.log(result)
        })
    }
    const rowEvent =(identifier)=>{
        if (identifier === "editPetModal"){
            setUpdateCrdShow(true);
        }
    }
    const deletePetRecord = (petId, storeId) =>{
        console.log(petId, storeId);
        PetService.deletePet(storeId, petId)
        .then(response=>{
            let result = response.data;
            console.log(result)
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
        })
    }
    return <div>
        <Snackbar open={open} autoHideDuration={1000} onClose={() => setOpen(false)}>
                    <Alert severity={alertSeverity} sx={{ width: '100%' }}>
                        {alert}
                    </Alert>
                </Snackbar>
        {updateCrdShow === true ? <UpdatePetModal petsId={modalInfo.petsId}/>: 
        <div className="card" style={{width: '25rem', marginTop: '10px'}}>
        <img className="card-img-top" src={img} id="img" alt="Card image cap" />
        <div className="card-body" style={{textAlign: 'left'}}>
            <div className="row">
                <div className="col-md-4">
                    <h3 className="card-title">Breed</h3>
                </div>
                <div className="col-md-8">
                    <h3 className="card-title">{modalInfo.petBreed}</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h5 className="card-title">Origin</h5>
                </div>
                <div className="col-md-8">
                    <h5 className="card-title">{modalInfo.petOrigin}</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h5 className="card-title">Breed Group</h5>
                </div>
                <div className="col-md-8">
                    <h5 className="card-title">{modalInfo.petBreedGroup}</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h3 className="card-title">Price</h3>
                </div>
                <div className="col-md-8">
                    <h3 className="card-title">{modalInfo.petPrice}</h3>
                </div>
            </div>
            <br/>
            <div className="d-flex justify-content-between">
                <button className="btn btn-warning" onClick={()=>rowEvent("editPetModal")}>Edit</button>
                <button  className="btn btn-danger" value="Delete" onClick={(e) => deletePetRecord(modalInfo.petsId, modalInfo.storeInfo.storeId)}>Delete</button>
            </div>
            
        </div>
    </div>
        }
        
    </div>

}


export default PetViewCard;