import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AuthService from "../../Services/AuthService";
import MainContainer from "./MainContainer";

const ForgotPassword = () => {
    const [alert, setAlert] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [open, setOpen] = React.useState(false);

    const onSubmit = (formState)=>{
        debugger
        const data = new FormData();
        data.append("emailId", formState.emailId)
        data.append("password", formState.password)
        data.append("confirmPass", formState.confirmPass)
        AuthService.resetPassService(data)
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
                            <input {...register('emailId', { required: true })} className='form-control mb-3' type={'email'} placeholder='Email'/>
                            <input {...register('password', { required: true })} className='form-control mb-4' type={'password'}  placeholder='Password'/>
                            <input {...register('confirmPass', { required: true })} className='form-control mb-4' type={'password'}  placeholder='Confirm Password'/>
                            <input className='form-control btn' type="submit" value="Login" style={{backgroundColor: '#7134eb', color: '#ededed'}}/>
                        </div>
                    </form>
                    <a className="mb-4" href="/login">Back to login</a>
                </div>
            </div>
}

export default ForgotPassword;