import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link, useParams } from "react-router-dom"; 

export default function ViewUser() {

    const [users,setUsers] = useState({
        name:"", 
        birthday:"",
        gender:" ", 
        idno:" ", 
        age:"", 
        email:" ",
        bankBalance:" ",
        withdrawalLimit:" ", 
        accountType:" ",
        openDate:" ", 
        status:" " 
    })

    const{id}=useParams(); 

    useEffect(()=>{ 
        loadUsers();

    },[]);

    const loadUsers= async()=>{ 
        const result=await axios.get(`http://localhost:8800/user/${id}`)
        setUsers(result.data)
    }



  return (
        <div className="container">
            <div className="row"> 
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Employee details</h2>
                <div className="card"> 
                    <div className="card-header">
                        Employee Details: {users.id}
                            <ul className="list-group list-group-flush"> 
                                <li className="list-group-item"> 
                                    <b>Name: </b>
                                    {users.name}
                                </li>
                                <li className="list-group-item"> 
                                    <b>Identification Number: </b>
                                    {users.idno}
                                </li>
                                <li className="list-group-item"> 
                                    <b>Account Balance: </b>
                                    {users.bankBalance}
                                </li>
                                <li className="list-group-item"> 
                                    <b>Birthday: </b>
                                    {users.birthday}
                                </li>
                                <li className="list-group-item"> 
                                    <b>Email: </b>
                                    {users.email}
                                </li>

                                <li className="list-group-item"> 
                                    <b>Gender: </b>
                                    {users.gender}
                                </li>

                                <li className="list-group-item"> 
                                    <b>Withdrawal Limit: </b>
                                    {users.withdrawalLimit}
                                </li>

                                <li className="list-group-item"> 
                                    <b>Account Status: </b>
                                    {users.status}
                                </li>

                                <li className="list-group-item"> 
                                    <b>Account Type: </b>
                                    {users.accountType}
                                </li>

                                <li className="list-group-item"> 
                                    <b>Open Date:  </b>
                                    {users.openDate}
                                </li>
                                <li className="list-group-item"> 
                                    <b>Age: </b>
                                    {users.age}
                                </li>






                            
                            </ul>
                    </div>
                </div>
                <Link className="btn btn-primary my-2" to={"/"}>Back to Homepage</Link>
                </div>
            </div>
        </div>
  )
}

