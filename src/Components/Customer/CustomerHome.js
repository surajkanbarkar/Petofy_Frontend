
import { Alert, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PetService from '../../Services/PetService';
import CustomerHomeComponent from './CustomerHomeComponent';
import PetViewCard from './PetViewCard';

const CustomerHome = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [anchor, setAnchor] = useState(false);
    const [pets, setPets] = useState([]);
    const [showAddPetModal, setsShowAddPetModal] = useState(false)
    const [show, setShow] = useState(false)
    const handleShow = ()=> setShow(true)
    const handleClose = ()=> setShow(false)

    const [alert, setAlert] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [open, setOpen] = useState(false);
    const [petsList, setPetsList] = useState([]);
    const [modalInfo, setModalInfo] = useState(null);
    const [petCardShow, setPetCardShow] = useState(false)

    useEffect(()=>{
        getAllPetsByUser();
    }, [])

    const getAllPetsByUser = () => {
        PetService.getAllPetsByUserId(user.userId)
        .then(response =>{
            let result = response.data;
            console.log(result)
            if (result.status === 'success'){
                setAlert(result.message)
                setAlertSeverity("success")
                setOpen(true);
                setPetsList(result.data)
            }else{
                setAlert(result.message)
                setAlertSeverity("error")
                setOpen(true);
            }
        })
    }
    const rowEvent =(identifier, row)=>{
        if (identifier === true){
            setPetCardShow(false);
            setModalInfo(row)
            setsShowAddPetModal(handleShow);
            //setModalType("Add employee");
        }
        else if (identifier === "petCardShow"){
            setModalInfo(row)
            setPetCardShow(true);
        }
    }

    return <div>
            <CustomerHomeComponent />
            <Snackbar open={open} autoHideDuration={1000} onClose={() => setOpen(false)}>
                    <Alert severity={alertSeverity} sx={{ width: '100%' }}>
                        {alert}
                    </Alert>
                </Snackbar>
            {/* {show ? <AddPetModal show={show} handleClose={handleClose} userId={user.userId} storeId={storeId}/> : null} */}
            <div className='container'>
            <div className='d-flex justify-content-between'>
                    <h2 className='header-text mt-4'>All available pets</h2>
                </div>
                <hr />
                <div className='row'>
                    <div className='col'>
                        {
                            petsList.map((pet) => {
                                return <div className='row'>
                                <div className='col'>
                                    <div id="carbonads" onClick={()=>rowEvent("petCardShow", pet)}>
                                        <div className="row">
                                            <div className='col-md-4 text-center'>
                                                <a href="" className="carbon-img" target="_blank" rel="noopener sponsored">
                                                    <img src="https://dogtime.com/assets/uploads/gallery/beagle-dog-breed-pictures/1-runforward.jpg" alt="ads via Carbon" border="0" height="100" width="130" style={{maxWidth: '130px'}}/>
                                                </a>
                                            </div>
                                            <div className='col-md-8'>
                                                <h4>{pet.petBreed}</h4>
                                                <span>Origin: {pet.petOrigin}</span><br/>
                                                <span>Breed Group: {pet.petBreedGroup}</span><br/>
                                                <span>Price: {pet.petPrice}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            })
                        }
                    </div>
                    <div className='col h-100'>
                        {petCardShow === true ? <PetViewCard modalInfo={modalInfo}/>: null}
                        
                    </div>
                </div>   
                
            </div>
    </div>
}

export default CustomerHome;