import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Login from "./Auth/login";
import Register from "./Auth/Register";
import PageNotFound from "./Pages/PageNotFound";
import StudentList from "./Pages/StudentList";
import StudentDetails from "./Pages/StudentDetails";
import HomePage from "./Pages/HomePage";

import SidebarHeaderLayout from "./Layout/SidebarHeaderLayout";


const sampleStudents = [
  { id: 1, name: 'John Doe', email: 'john@example.com', rollNumber: 'A101', feesPaid: true, gender: 'Male' }
];


for (let i = sampleStudents.length + 1; i <= 35; i++) {
  sampleStudents.push({
    id: i,
    name: `Student ${i}`,
    email: `student${i}@example.com`,
    rollNumber: `A${i + 100}`,
    feesPaid: i % 2 === 0, 
    gender: i % 2 === 0 ? 'Male' : 'Female',
  });
}

function App() {
  return (

    <BrowserRouter>
    <SidebarHeaderLayout>
      <div>
        <Routes>

          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/list" element={<StudentList studentsList={sampleStudents} studentsPerPage={6} />} />
          <Route path="/list/:studentId" element={<StudentDetails studentsList={sampleStudents} />} />


        </Routes>
      </div>
      </SidebarHeaderLayout>
    </BrowserRouter>
  );
}

export default App;
