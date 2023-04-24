import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./layout/NavBar";
import HomePage from "./pages/HomePage"; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import AddUser from "./users/AddUser"; 
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import PagedUsers from "./pagination/PagedUsers";


function App() {
  return (
    <Router> 
      <NavBar /> 

      <Routes> 
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/addUser" element={<AddUser/>}/>
        <Route exact path="/EditUser/:id" element={<EditUser/>}/>
        <Route exact path="/ViewUser/:id" element={<ViewUser/>}/>
        <Route exact path="/users/paged" element={<PagedUsers/>}/>
      </Routes> 

      
    
    </Router>
    
  );
}

export default App;
