import { Alert, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import StoreHomeComponent from "./StoreHomeComponent";
import StoreProfile from "./StoreProfile";
import UserProfile from "./UserProfile";

const Profile = () =>{
    
    return <div>
        <StoreHomeComponent/>
        <div className="d-flex justify-content-center">
            <UserProfile/>
            <StoreProfile/>
        </div>
        
        {/* <div className="d-flex justify-content-center">
            <div className="register_card card text-center" style={{width:'25rem'}}>
                <Snackbar open={open} autoHideDuration={1000} onClose={() => setOpen(false)}>
                    <Alert severity={alertSeverity} sx={{ width: '100%' }}>
                        {alert}
                    </Alert>
                </Snackbar>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body mb-2">
                        <h5 className="card-title mb-4">Update profile</h5>
                        <input {...register('userId')} defaultValue={user.userId} hidden/>
                        <input {...register('firstName', { required: true })} className='form-control mb-3' type={'text'} placeholder='First name' defaultValue={user.firstName}/>
                        <input {...register('lastName', { required: true })} className='form-control mb-3' type={'text'} placeholder='Last name'  defaultValue={user.lastName}/>
                        <input {...register('mobNo', { required: true })} className='form-control mb-3' type={'text'} placeholder='Mobile number'  defaultValue={user.mobNo}/>
                        <input {...register('address', { required: true })} className='form-control mb-3' type={'text'} placeholder='Address'  defaultValue={user.address}/>
                        <select className="form-control mb-3" {...register('userRole', {required: false})}  defaultValue={user.userRole} disabled>
                            <option value="">Select role</option>
                            <option value="CUSTOMER">Customer</option>
                            <option value="GOVUSER">Government user</option>
                            <option value="STOREOWNER">Store owner</option>
                        </select>

                        <input {...register('email', { required: false })} className='form-control mb-3' type={'email'} placeholder='Email'  defaultValue={user.email} disabled/>
                        
                        <input className='form-control btn' type="submit"  value="Save" style={{backgroundColor: '#f06b2e', color: '#332f2d'}}/>
                    </div>
                </form>
            </div>
            
        </div> */}
    </div>
}

export default Profile;