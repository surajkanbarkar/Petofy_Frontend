import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AuthService from "../../Services/AuthService";
import MainContainer from "./MainContainer";

const RegisterUser = () => {
    const [alert, setAlert] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [open, setOpen] = React.useState(false);

    const onSubmit = (formState)=>{
        const data = new FormData();
        data.append("firstName", formState["firstName"])
        data.append("lastName", formState["lastName"])
        data.append("mobNo", formState["mobNo"])
        data.append("address", formState["address"])
        data.append("file", formState["file"][0])
        data.append("userRole", formState["userRole"])
        data.append("email", formState["email"])
        data.append("password", formState["password"])

        AuthService.registerService(data)
        .then(response => {
            let result = response.data;
            if (result.status === "success"){
                setAlert(result.message)
                setAlertSeverity("success")
                setOpen(true);
                setTimeout(function(){
                    alert("yoyo");
                }.bind(this), 3000)
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
                <div className="register_card card text-center" style={{width:'25rem'}}>
                    <Snackbar open={open} autoHideDuration={1000} onClose={() => setOpen(false)}>
                        <Alert severity={alertSeverity} sx={{ width: '100%' }}>
                            {alert}
                        </Alert>
                    </Snackbar>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body mb-2">
                            <h5 className="card-title mb-4">Register user</h5>
                            <input {...register('firstName', { required: true })} className='form-control mb-3' type={'text'} placeholder='First name'/>
                            <input {...register('lastName', { required: true })} className='form-control mb-3' type={'text'} placeholder='Last name'/>
                            <input {...register('mobNo', { required: true })} className='form-control mb-3' type={'text'} placeholder='Mobile number'/>
                            <input {...register('address', { required: true })} className='form-control mb-3' type={'text'} placeholder='Address'/>
                            <input {...register('file', { required: true })} className='form-control mb-3' type={'file'} accept={'image/*'} placeholder='Upload file'/>
                            {/* <input {...register('userRole', { required: true })} className='form-control mb-3' type={'text'} placeholder='Select user role'/> */}
                            <select className="form-control mb-3" {...register('userRole', {required: true})} >
                                <option value="">Select Gender</option>
                                <option value="CUSTOMER">Customer</option>
                                <option value="GOVUSER">Government user</option>
                                <option value="STOREOWNER">Store owner</option>
                            </select>

                            <input {...register('email', { required: true })} className='form-control mb-3' type={'email'} placeholder='Email'/>
                            <input {...register('password', { required: true })} className='form-control mb-3' type={'password'}  placeholder='Password'/>
                            
                            <input className='form-control btn' type="submit" value="Register" style={{backgroundColor: '#7134eb', color: '#ededed'}}/>
                        </div>
                    </form>
                    
                    <a className="mb-4" href="/login">Already have an account ?</a>
                </div>
            </div>
}

export default RegisterUser;