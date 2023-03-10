
import React from 'react';
import { Link } from 'react-router-dom';
import CustomerHomeComponent from './CustomerHomeComponent';

const CustomerHome = () => {



    return <div>
            <CustomerHomeComponent />
            <div className="" id="navbarNav">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Dogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/targetedOffers">Aquariums</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/targetedOffers">Birds</Link>
                    </li>
                </ul>
            </div>
            <div className='container'>
                <h2 className='header-text'>Top Pet Shops</h2>
                <hr />
                <div id="carbonads">
                        <div className="row">
                            <div className='col-md-4 text-center'>
                                <a href="" className="carbon-img" target="_blank" rel="noopener sponsored">
                                    <img src="https://cdn4.buysellads.net/uu/1/127419/1670532337-Stock2.jpg" alt="ads via Carbon" border="0" height="100" width="130" style={{maxWidth: '130px'}}/>
                                </a>
                            </div>
                            <div className='col-md-8'>
                                <h4>Lab</h4>
                                <span>Get 10 free Adobe Stock photos. Start downloading amazing royalty-free stock photos today.</span>
                            </div>
                            <div className='col-md-4 text-center'>
                                <a href="" className="carbon-img" target="_blank" rel="noopener sponsored">
                                    <img src="https://cdn4.buysellads.net/uu/1/127419/1670532337-Stock2.jpg" alt="ads via Carbon" border="0" height="100" width="130" style={{maxWidth: '130px'}}/>
                                </a>
                            </div>
                            <div className='col-md-8'>
                                <h4>Lab</h4>
                                <span>Get 10 free Adobe Stock photos. Start downloading amazing royalty-free stock photos today.</span>
                            </div>
                        </div>
                </div>
            </div>
    </div>
}

export default CustomerHome;