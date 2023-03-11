import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import StoreService from "../../Services/StoreService";
import MainContainer from "./MainContainer";

const Auth = () => {
    const [alert, setAlert] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()

    function getStoreProfile(userId){
        StoreService.getStoreProfile(userId)
        .then(response => {
            let result = response.data;
            if (result.status === "success"){
                localStorage.setItem("storeId", result.data.storeId)
                
            }
        })
    }

    const onSubmit = (formState)=>{
        AuthService.loginService(formState)
        .then(response => {
            let result = response.data;
            if (result.status === "success"){
                setAlert("Authentication successful")
                setAlertSeverity("success")
                setOpen(true);
                localStorage.setItem("user", JSON.stringify(result.data));
                getStoreProfile(result.data.userId);
                setTimeout(function(){
                    if (result.data.userRole === "CUSTOMER"){
                        navigate("/customer/petofy_home")
                    }                    
                    else if (result.data.userRole === "GOVUSER")
                    {
                        navigate("/gov/petofy_home")
                    }
                    else if (result.data.userRole === "STOREOWNER"){
                        navigate("/store/petofy_home")
                    }
                    }.bind(this), 1000)
            }else{
                setAlert("Authentication failed")
                setAlertSeverity("error")
                setOpen(true);
            }
        })
    }
    const {
        register,
        handleSubmit,
        formState: { errors},
      } = useForm();
    return <div>
                <MainContainer/>
                <div className="card text-center" style={{width:'20rem'}}>
                    <Snackbar open={open} autoHideDuration={1000} onClose={() => setOpen(false)}>
                        <Alert severity={alertSeverity} sx={{ width: '100%' }}>
                            {alert}
                        </Alert>
                    </Snackbar>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body mb-2">
                            <h5 className="card-title mb-4">Login</h5>
                            <input {...register('email', { required: true })} className='form-control mb-3' type={'email'} placeholder='Email'/>
                            <input {...register('password', { required: true })} className='form-control mb-4' type={'password'}  placeholder='Password'/>
                            <input className='form-control btn' type="submit" value="Login" style={{backgroundColor: '#7134eb', color: '#ededed'}}/>
                        </div>
                    </form>
                    <a href="/forgotpassword">Forgot password</a>
                    <a className="mb-4" href="/register">New user? Register here</a>
                </div>
            </div>
}

export default Auth;