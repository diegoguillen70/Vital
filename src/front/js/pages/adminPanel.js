import React from "react";
import "../../styles/admin-panel.css"
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config"

const AdminPanel = () => {
   const [products, setProducts] = useState([])

    useEffect(() => {
        // actions.getProducts();
    
        const productsRef = collection(db, "products")
        console.log(productsRef);
    
        getDocs(productsRef)
          .then((resp) => {
            const products = resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })              
            setProducts(products)  
            
          })
    
      }, []);

    return (
        <>
            <nav className="navbar navbar-dark bg-dark p-3">
                <div className="d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between">
                    <a className="navbar-brand" href="#">
                        Admin Dashboard
                    </a>
                    <button
                        className="navbar-toggler d-md-none collapsed mb-3"
                        type="button"
                        data-toggle="collapse"
                        data-target="#sidebar"
                        aria-controls="sidebar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                </div>
                <div className="col-12 col-md-4 col-lg-2">
                    <input
                        className="form-control form-control-dark"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </div>
                <div className="col-12 col-md-5 col-lg-8 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
                    <div className="btn-group dropstart ">
                        <span className="btn btn-secondary dropdown-toggle bg-vital-orange" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Hello, Admin
                        </span>

                        <ul className="dropdown-menu bg-dark">
                            <li><a className="dropdown-item" href="#">change password</a></li>
                            <li><a className="dropdown-item" href="#">Logout</a></li>                            
                        </ul>
                    </div>

                </div>
            </nav>
            <div className="container-fluid">
                <div className="row bg-vital-gray">
                    <nav
                        id="sidebar"
                        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse bg-vital-black"
                    >
                        <div className="position-sticky bg-vital-black">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">                                        
                                        <span className="ml-2">Dashboard</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                       
                                        <span className="ml-2">Manage User</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        
                                        <span className="ml-2">Manage Admin Users</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        
                                        <span className="ml-2">Manage Gyms</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        
                                        <span className="ml-2">Manage Newsletter subcriptions</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                       
                                        <span className="ml-2">Integrations</span>
                                    </a>
                                </li>                            
                            </ul>
                        </div>
                    </nav>
                    <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">                       
                        <h1 className="h2 text-vital-orange">Dashboard</h1>
                        <p className="text-vital-white">
                            Home page to manage the website
                        </p>
                        <div className="row my-4">
                            <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                <div className="card bg-vital-black">
                                    <h5 className="card-header text-vital-orange">Users</h5>
                                    <div className="card-body text-vital-white bg-dark">
                                        <h5 className="card-title">345k</h5>
                                        <p className="card-text">Feb 1 - Apr 1, United States</p>
                                        <p className="card-text text-success">
                                            10.2% increase since last month
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
                                <div className="card bg-vital-black">
                                    <h5 className="card-header text-vital-orange">Gyms</h5>
                                    <div className="card-body text-vital-white bg-dark">
                                        <h5 className="card-title">4k</h5>
                                        <p className="card-text">Feb 1 - Apr 1, United States</p>
                                        <p className="card-text text-success">
                                            3.6% increase since last month
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
                                <div className="card bg-vital-black">
                                    <h5 className="card-header text-vital-orange">Newsletter subcriptions</h5>
                                    <div className="card-body text-vital-white bg-dark">
                                        <h5 className="card-title">43</h5>
                                        <p className="card-text">Feb 1 - Apr 1, United States</p>
                                        <p className="card-text text-success">
                                            1.6% increase since last month
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
                                <div className="card bg-vital-black">
                                    <h5 className="card-header text-vital-orange">Revenue</h5>
                                    <div className="card-body text-vital-white bg-dark">
                                        <h5 className="card-title">$2.4k</h5>
                                        <p className="card-text">Feb 1 - Apr 1, United States</p>
                                        <p className="card-text text-success">
                                            2.5% increase since last month
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-xl-8 mb-4 mb-lg-0">
                                <div className="card bg-vital-black">
                                    <h5 className="card-header text-vital-orange">Latest transactions</h5>
                                    <div className="card-body bg-dark">
                                        <div className="table-responsive">
                                            <table className="table table-dark table-striped">
                                                <thead>
                                                    <tr >
                                                        <th scope="col">Order</th>
                                                        <th scope="col">Product</th>
                                                        <th scope="col">Customer</th>
                                                        <th scope="col">Total</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col" />
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {   products &&
                                                        products.map((product, index) => {
                                                            console.log(product)
                                                            return (
                                                                <tr key={index}>
                                                                    <th scope="row">{product.id}</th>
                                                                    <td>{product.title}</td>
                                                                    <td>{product.category}</td>
                                                                    <td>{product.price}</td>
                                                                    <td>{Date()}</td>
                                                                    <td>
                                                                        <span href="#" className="btn btn-sm text-vital-white btn-vital-orange">
                                                                            View
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        }
                                                        )
                                                    }                                                    
                                                                                                 
                                                </tbody>
                                            </table>
                                        </div>
                                        <span href="#" className="btn btn-block btn-secondary">
                                            View all
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-4">
                                <div className="card bg-vital-black">
                                    <h5 className="card-header text-vital-orange">Last 6 months subcriptions</h5>
                                    <div className="card-body bg-dark">
                                        <div id="traffic-chart" />
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </main>
                </div>
            </div>
        </>

    );
}

export default AdminPanel;