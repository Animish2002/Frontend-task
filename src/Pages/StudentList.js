import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './StudentList.css';


const StudentList = ({ studentsList, studentsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (!Array.isArray(studentsList) || studentsList.length === 0) {
    return <div className="student-list-container">No students to display.</div>;
  }

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = studentsList.slice(indexOfFirstStudent, indexOfLastStudent);

  const totalPages = Math.ceil(studentsList.length / studentsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
  
      <div className="student-list-container">
        <h2>All Students List</h2>
        <table className="student-list">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Roll No</th>
              <th>Gender</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.rollNumber}</td>
                <td>{student.gender}</td>
                <td>
                  <Link to={`/list/${student.id}`} target="_blank" rel="noopener noreferrer">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={currentPage === i + 1 ? 'active' : ''}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
   
  );
};

export default StudentList;
