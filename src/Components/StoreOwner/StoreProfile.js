import { Alert, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import StoreService from "../../Services/StoreService";
import StoreHomeComponent from "./StoreHomeComponent";

const StoreProfile = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [alert, setAlert] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [open, setOpen] = useState(false);
    const [storeId, setStoreId] = useState(0);
    const [store, setStore] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors},
      } = useForm();

    useEffect(()=>{
        getStoreProfile();
    }, [])

    function getStoreProfile(){
        console.log("hoy")
        StoreService.getStoreProfile(user.userId)
        .then(response => {
            let result = response.data;
            if (result.status === "success"){
                console.log(result.data)
                setAlert(result.message)
                setAlertSeverity("success")
                setOpen(true);
                setStore(result.data)
                setStoreId(result.data.storeId)
                localStorage.setItem("storeId", result.data.storeId)
                // setTimeout(function(){
                    document.getElementsByName("storeName")[0].value  = result.data.storeName;
                    document.getElementsByName("storeAddress")[0].value  = result.data.storeAddress;
                    document.getElementsByName("storeContact")[0].value  = result.data.storeContact;
                    document.getElementsByName("storeType")[0].value  = result.data.storeType;    
                // }.bind(this), 1000)
                
                
            }else{
                setAlert(result.message)
                setAlertSeverity("error")
                setOpen(true);
            }
        })
    }
    const onSubmit = (formState)=>{
        StoreService.addStore(formState)
        .then(response => {
            let result = response.data;
            if (result.status === "success"){
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
    const onUpdate = (formState)=>{
        StoreService.updateStoreProfile(formState)
        .then(response => {
            let result = response.data;
            if (result.status === "success"){
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
    return <div>
        <Snackbar open={open} autoHideDuration={1000} onClose={() => setOpen(false)}>
                    <Alert severity={alertSeverity} sx={{ width: '100%' }}>
                        {alert}
                    </Alert>
                </Snackbar>
        <div className="register_card card text-center ml-2" style={{width:'25rem'}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body mb-2">
                        <h5 className="card-title mb-4">Update store details</h5>
                        <input {...register('userId')} defaultValue={user.userId} hidden/>
                        <input {...register('storeName', { required: true })} className='form-control mb-3' type={'text'} placeholder='Store name' />
                        <input {...register('storeAddress', { required: true })} className='form-control mb-3' type={'text'} placeholder='Store name' />
                        <input {...register('storeContact', { required: true })} className='form-control mb-3' type={'text'} placeholder='Store Mobile'/>
                        <input {...register('storeType', { required: true })} className='form-control mb-3' type={'text'} placeholder='Store type' />
                        <input className='form-control btn' type="submit"  value="Save" style={{backgroundColor: '#f06b2e', color: '#332f2d'}}/>
                        {/* {storeId == null || storeId == 0 
                            ? 
                            <input className='form-control btn' type="submit"  value="Save" style={{backgroundColor: '#f06b2e', color: '#332f2d'}}/>
                            :
                            <input className='form-control btn' type="btn btn-sm"  value="Update" style={{backgroundColor: '#f06b2e', color: '#332f2d'}}/>
                        } */}
                        
                    </div>
                </form>
            </div>
    </div>
}


export default StoreProfile;