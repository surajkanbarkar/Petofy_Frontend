import { Alert, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PetOrderService from '../../Services/PetOrderService';
import NocFile from '../Gov/NocFile';
import CustomerHomeComponent from './CustomerHomeComponent';
import CustomerOrdersTableRow from './CustomerOrdersTableRow';

const CustomerOrdersTable = () =>{
    const user = JSON.parse(localStorage.getItem("user"));
    const [alert, setAlert] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [open, setOpen] = useState(false);
    const [orderList, setOrderList] = useState([]);

    useEffect(() =>{
        CustomerOrders()
    }, [])

    const CustomerOrders = () =>{
        PetOrderService.getAllUserOrders(user.userId)
        .then(response =>{
            let result = response.data;
            if (result.status === 'success'){
                setAlert(result.message)
                setAlertSeverity("success")
                setOpen(true);
                setOrderList(result.data)
            }else{
                setAlert(result.message)
                setAlertSeverity("error")
                setOpen(true);
            }
        })
    }
    return <>
        <CustomerHomeComponent />
        {/* <NocFile /> */}
            <Snackbar open={open} autoHideDuration={1000} onClose={() => setOpen(false)}>
                <Alert severity={alertSeverity} sx={{ width: '100%' }}>
                    {alert}
                </Alert>
            </Snackbar>
            <div className='container'>
                <div className='d-flex justify-content-between'>
                    <h2 className='header-text mt-4'>My Orders</h2>
                </div>
                <hr/>
                <div className='table'>
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Dog breed</th>
                            <th>Order status</th>
                            <th>Order date</th>
                            <th>Expected delivery date</th>
                            <th>Pet breed</th>
                            <th>Price</th>
                            <th>Payment status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderList.map((order) => {
                                return <CustomerOrdersTableRow  order={order} key={order.petsOrderId} />
                            })
                        }
                    </tbody>
                </div>
                </div>
            
    </>
}


export default CustomerOrdersTable;