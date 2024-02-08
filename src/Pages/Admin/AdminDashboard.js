import React, { useContext } from 'react';
import { useUser } from '../UserContext';

const AdminDashboard = () => {
  const { role } = useUser();

  // Check if the user is an admin
  const isAdmin = role === 'admin';

  const handleModifyStudent = (studentId) => {
    if (isAdmin) {
      // Implement your logic to allow modifications for an admin
      console.log(`Admin modifying student with ID: ${studentId}`);
    } else {
      // Display a message or redirect to an unauthorized page
      console.log('Unauthorized! Only admins can modify student data.');
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {/* Admin-specific content and features */}
      {isAdmin && (
        <div>
          <p>You have admin privileges. You can modify student data.</p>
          {/* Example: Button to modify a student */}
          <button onClick={() => handleModifyStudent(1)}>Modify Student 1</button>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
