import React, { useContext } from 'react';
import { useUser } from '../UserContext';

const UserDashboard = () => {
  const { role } = useUser();

  // Check if the user is a regular user
  const isUser = role === 'user';

  return (
    <div>
      <h2>User Dashboard</h2>
      {/* User-specific content and features */}
      {isUser && (
        <div>
          <p>You have user privileges. You can view student data but cannot make modifications.</p>
          {/* Example: Display student data */}
          <p>Student Name: John Doe</p>
          <p>Email: john@example.com</p>
          <p>Roll Number: A101</p>
          {/* ... other student data */}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
