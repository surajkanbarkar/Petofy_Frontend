import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CustomerHomeComponent = () => {
    const user = localStorage.getItem("user");
    const userName = JSON.parse(user).firstName;
    const navigate = useNavigate();
    const logOut = () =>{
        localStorage.clear();
        navigate("/login")
    }
    return <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <a className="navbar-brand" href="/customer/petofy_home" style={{fontWeight: "bold"}}>
                <img src="https://www.petofy.com/images/logo.png" width={110} height={50}/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end mr-4" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                        <Link className="nav-link" to="/customer/petofy_home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/customer/orders">My orders</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/customer/profile">Profile</Link>
                    </li>
                </ul>
            </div>
            <p className="float-right"></p><b>Welcome {userName}</b>
            <button className="btn btn" onClick={(e) => logOut()}>logout</button>
        </nav>
    </div>
}

export default CustomerHomeComponent;