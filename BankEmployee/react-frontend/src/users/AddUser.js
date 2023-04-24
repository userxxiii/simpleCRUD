import React, {useState} from "react";
import {useNavigate, Link } from "react-router-dom"; 
import axios from "axios"; 


export default function AddUser() {

  let navigate=useNavigate() 

  const [users, setUser] =useState({ 
    name:"", 
    birthday:"",
    gender:" ", 
    idno:" ", 
    email:"",
    age:"", 
    bankBalance:" ",
    withdrawalLimit:" ", 
    accountType:" ",
    openDate:" ", 
    status:" " 
  })

    const{name,birthday,gender,idno,email, age, bankBalance,withdrawalLimit, accountType,openDate, status}=users 

    const onInputChange=(e) =>{ 
      setUser({...users, [e.target.name]:e.target.value})

    };

    // Post data into database (AXIOS POST)
    const onSubmit =async (e)=>{ 
      e.preventDefault();
      await axios.post("http://localhost:8800/user",users)
      navigate("/");

    };



  return (
    // User input field
    <div className="container">
      <div className="row"> 
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Customer</h2>
          
         
          <form onSubmit={(e)=>onSubmit(e)}> 
          <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
          //NAME
            type="text"
            className="form-control"
            placeholder="Enter customer name"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
            maxLength={20} // set the maximum length to 20
          />
        </div>

        <div className="mb-3">
        <label htmlFor="idno" className="form-label">
          Identification Number
        </label>
        <input
          // IDNO 
          type="text"
          className="form-control"
          placeholder="Enter your Identification Number"
          name="idno"
          value={idno}
          onChange={(e) => onInputChange(e)}
          pattern="[0-9]{6}-[0-9]{2}-[0-9]{4}" // set the input pattern
          required // make the input field required
          onInvalid={() => alert('Please enter a valid Identification Number in the format of XXXXXX-XX-XXXX.')}
        />
      </div>

            <div className ="mb-3">
              <label htmlfor="birthday" className="form-label"> Birthday </label>
              <input 
              // BIRTHDAY
                type = {"date"}
                className="form-control"
                placeholder ="Enter your birthday"
                name ="birthday"
                value ={birthday}
                onChange={(e)=>onInputChange(e)}
                />
            </div> 

            <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
            // Age
              type="text"
              className="form-control"
              placeholder="Please enter age"
              name="age"
              value={age}
              onChange={(e) => onInputChange(e)}
              pattern="[0-9]+" // set the input pattern to digits only
              min="0" // set the minimum value to zero
              required // make the input field required
            />
           
          </div>

          <div className="mb-3">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
          //EMAIL
            type="text"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
           
          />
        </div>

          <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select
          // GENDER
            className="form-select"
            name="gender"
            value={gender}
            onChange={(e) => onInputChange(e)}
            required // make the input field required
          >
            <option value="">Choose...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div> 

        <div className ="mb-3"> 
        <label htmlfor="openDate" className="form-label"> Open Date </label>
        <input 
        // OPEN DATE
          type = {"date"}
          className="form-control"
          placeholder ="Open Date"
          name ="openDate"
          value ={openDate}
          onChange={(e)=>onInputChange(e)}
          />
      </div>

            <div className="mb-3">
                <label htmlFor="status" className="form-label">
                  Account Status (Active, Deactivated, Terminated)
                </label>
                <select
                // ACCOUNT STATUS
                  className="form-select"
                  name="status"
                  value={status}
                  onChange={(e) => onInputChange(e)}
                  required // make the input field required
                >
                  <option value="">Choose...</option>
                  <option value="Active">Active</option>
                  <option value="Deactivated">Deactivated</option>
                  <option value="Terminated">Terminated</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid account status.
                </div>
              </div>

            <div className="mb-3">
            <label htmlFor="accountType" className="form-label">
                Account Type (Saving, Current, Investment)
            </label>
            <select
            // ACCOUNT TYPE
              className="form-select"
              name="accountType"
              value={accountType}
              onChange={(e) => onInputChange(e)}
              required // make the input field required
            >
                <option value="">Choose...</option>
                <option value="Saving">Saving</option>
                <option value="Current">Current</option>
                <option value="Investment">Investment</option>
             </select>
          </div>
    
            <div className ="mb-3">
              <label htmlfor="bankBalance" className="form-label"> Account Balance </label>
              <input 
              // BANK BLANCE 
                type = {"text"}
                className="form-control"
                placeholder ="What is the account balance?"
                name ="bankBalance"
                value ={bankBalance}
                onChange={(e)=>onInputChange(e)}
                pattern="[0-9]+" // set the input pattern to digits only
                min="20" // set the minimum value to zero
                required // make the input field required
                />
            </div>
            
            <div className ="mb-3"> 
              <label htmlfor="withdrawalLimit" className="form-label"> Withdrawal Limit </label>
              <input 
              // WITHDRAWAL LIMIT
                type = {"text"}
                className="form-control"
                placeholder ="What is the withdrawal limit?"
                name ="withdrawalLimit"
                value ={withdrawalLimit}
                onChange={(e)=>onInputChange(e)}
                pattern="[0-9]+" // set the input pattern to digits only
                min="1" // set the minimum value to zero
                required // make the input field required
                />
            </div>
            <button 
              type ="submit"
              className = "btn btn-outline-primary">
                Submit 
              </button>

              <Link 
              className = "btn btn-outline-danger mx-2" to="/">
                Cancel 
              </Link>

            </form>



        
        </div>
    
    </div>
    
    </div>
  )
}
