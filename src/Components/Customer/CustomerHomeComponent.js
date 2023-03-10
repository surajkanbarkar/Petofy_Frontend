import React from "react";
import { Link } from "react-router-dom";

const CustomerHomeComponent = () => {
    return <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <a className="navbar-brand" href="/promotions" style={{fontWeight: "bold"}}>
                <img src="https://www.petofy.com/images/logo.png" width={110} height={50}/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <input type={"search"} className="form-control main-search-box" placeholder="Search pets"/>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/targetedOffers">Targeted Offers</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
}

export default CustomerHomeComponent;