import React from "react";
import { Link } from "react-router-dom";

const MainContainer = () => {
    return <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <a className="navbar-brand" href="/promotions" style={{fontWeight: "bold"}}>Petofy</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Register">Register</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/"></Link>
                    </li> */}
                </ul>
            </div>
            </nav>
    </div>
}

export default MainContainer;