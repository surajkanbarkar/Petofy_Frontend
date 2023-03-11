import { Alert, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import PetOrderService from "../../Services/PetOrderService";
import PetService from "../../Services/PetService";

const PetViewCard = ({modalInfo}) => {
    console.log(modalInfo)
    const user = JSON.parse(localStorage.getItem("user"));
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

    const buyPet = () =>{
        var formData = {
            "orderStatus": true,
            "petsId": modalInfo.petsId
        }
        PetOrderService.placeOrder(user.userId, formData)
        .then(response =>{
            let result = response.data;
            if (result.status === 'success'){
                setAlert(result.message)
                setAlertSeverity("success")
                setOpen(true);
            }else{
                setAlert(result.message)
                setAlertSeverity("error")
                setOpen(true);
            }
        })
    }

    const rowEvent =(identifier)=>{
        if (identifier === "buyPet"){
            buyPet();
        }
    }
    
    return <div>
        <Snackbar open={open} autoHideDuration={1000} onClose={() => setOpen(false)}>
            <Alert severity={alertSeverity} sx={{ width: '100%' }}>
                {alert}
            </Alert>
        </Snackbar>
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
            <div className="d-flex justify-content-center">
                <button className="btn btn-success" onClick={()=>rowEvent("buyPet")}>Buy</button>
            </div>
            
        </div>
    </div>
    </div>

}


export default PetViewCard;