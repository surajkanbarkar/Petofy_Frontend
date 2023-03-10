import logo from './logo.svg';
import React from 'react';
import './App.css';
import Auth from './Components/Auth/Auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterUser from './Components/Auth/RegisterUser';
import ForgotPassword from './Components/Auth/ForgotPassword';
import CustomerHome from './Components/Customer/CustomerHome';

function App() {
  return (
    <div className="App">
      <div className='container' style={{maxHeight: '100rem', minHeight: '43rem', minWidth: '95rem'}}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Auth />}></Route>
            <Route exact path='/login' element={<Auth />}></Route>
            <Route exact path='/register' element={<RegisterUser />}></Route>
            <Route exact path='/forgotpassword' element={<ForgotPassword />}></Route>
            <Route exact path='/customer/petofy_home' element={<CustomerHome />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
