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
    </div>
}

export default Profile;