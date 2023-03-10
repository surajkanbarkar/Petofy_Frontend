import React from "react";
import { Link } from "react-router-dom";

const MainContainer = () => {
    return <div>
        <div className="container w-75">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <a className="navbar-brand" href="/promotions" style={{fontWeight: "bold"}}>Local Targeting System</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <input type="search"></input>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/open_card">Cart</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/history">History</Link>
                    </li>
                </ul>
            </div>
            </nav>
            <div>

            </div>
        </div>
    </div>
}

export default MainContainer;