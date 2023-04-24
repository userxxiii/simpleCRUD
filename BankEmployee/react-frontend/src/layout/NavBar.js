import React from 'react';
import {Link} from "react-router-dom"; 

export default function NavBar() {
  return (
    <div>

    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#" to="/">Bank Customer Accounts</Link>
    <button className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false" 
        aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

    <Link className ="btn btn-outline-light" to="/addUser">Add  
    Customer</Link>

    
    </div>
    <Link className="btn btn-outline-primary mx-2" to="/users/paged">Paged Users</Link>
</nav> 
</div> 
  )
}
