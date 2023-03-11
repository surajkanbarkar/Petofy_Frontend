import React from "react";
import { Link, useNavigate } from "react-router-dom";

const StoreHomeComponent = () => {
    const user = localStorage.getItem("user");
    const userName = JSON.parse(user).firstName;
    const navigate = useNavigate();
    const logOut = () =>{
        localStorage.clear();
        navigate("/login")
    }
    return <div>
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-md navbar-light bg-light">
                        <a className="navbar-brand" href="/store/petofy_home" style={{fontWeight: "bold"}}>
                            <img src="https://www.petofy.com/images/logo.png" width={110} height={50}/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end mr-4" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/store/profile">Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/store/petofy_home">My pets</Link>
                                </li>
                            </ul>
                        </div>
                        Welcome {userName}
                        <button className="btn btn" onClick={(e) => logOut()}>logout</button>
                    </nav>
                </div>
            </div>
}

export default StoreHomeComponent;