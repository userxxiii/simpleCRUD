import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams } from "react-router-dom"; 

export default function HomePage() {

    const [users,setUsers] = useState([])

    const {id} =useParams()



    useEffect(()=>{ 
        //console.log("Code with me"); 
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result= await axios.get("http://localhost:8800/users")
        setUsers(result.data);
    };
    
    const deleteUser=async (id)=>{ 
      await axios.delete(`http://localhost:8800/user/${id}`)
      loadUsers();
    }






  return (
    <div className='container'>
        <div className='py-4'> 
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Entry</th>
      <th scope="col">Name</th>
      <th scope="col">IdNo</th>
      <th scope="col">Account Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    
        { 
            // accept dynamic data 
            users.map((user,index)=>( 
                <tr> 
                    <th scope = "row" key={index}>{index+1}</th>
                    <td>{user.name}</td>
                    <td>{user.idno}</td>
                    <td>{user.status}</td>
                    
                   
                    <td>
                        <Link 
                        className="btn btn-outline-primary mx-2" 
                        to={`/ViewUser/${user.id}`}>View</Link>
                        <Link 
                        className="btn btn-outline-primary mx-2" 
                        to={`/EditUser/${user.id}`}>Edit</Link>
                        <button className="btn btn-danger mx-2" 
                          onClick={()=>deleteUser(user.id)}>Delete</button>
                    </td>
                </tr>

            ))
        }
  </tbody>
</table>
        </div> 
    </div>
  )
}
