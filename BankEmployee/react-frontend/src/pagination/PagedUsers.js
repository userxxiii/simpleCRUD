import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";


function PagedUsers() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  useEffect(() => {
    axios.get('http://localhost:8800/users').then((res) => {
      setUsers(res.data);
    });
  }, []);

  const totalPages = Math.ceil(users.length / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const currentRecords = users.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <h2>Paged Users</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>IdNo</th>
            <th>Birthday</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Open Date</th>
            <th>Acc Type</th>
            <th>Bank Bal</th>
            <th>Status</th>
            <th>Withdraw Limit</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.idno}</td>
              <td>{user.birthday}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.openDate}</td>
              <td>{user.accountType}</td>
              <td>{user.bankBalance}</td>
              <td>{user.status}</td>
              <td>{user.withdrawalLimit}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <li className={`page-item ${page === currentPage ? 'active' : ''}`} key={page}>
              <button className="page-link" onClick={() => handlePageChange(page)}>
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <Link className="btn btn-outline-danger mx-2" to="/">
        Back
      </Link>
    </div>
  );
}

export default PagedUsers;
