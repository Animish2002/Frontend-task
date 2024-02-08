import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './StudentDetails.css';
import background from '../components/assets/joanna-kosinska-7ACuHoezUYk-unsplash.jpg';

const StudentDetails = ({ studentsList }) => {
  const { studentId } = useParams();
  const student = studentsList.find((student) => student.id === parseInt(studentId, 10));

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div>
      <div className="background" style={{ backgroundImage: `url(${background})` }}></div>
      <div className="student-details-container">
        <h2>Student Details</h2>
        <table className="student-details">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{student.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{student.email}</td>
            </tr>
            <tr>
              <th>Roll No</th>
              <td>{student.rollNumber}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{student.gender}</td>
            </tr>
            <tr>
              <th>Fees Paid</th>
              <td>{student.feesPaid ? 'Yes' : 'No'}</td>
            </tr>
          </tbody>
        </table>
        <Link to="/list" className="details-link">
          Back to All Students
        </Link>
      </div>
    </div>
  );
};

export default StudentDetails;
