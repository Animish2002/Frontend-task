import React, { createContext, useContext } from 'react';

const UserContext = createContext();

const useUser = () => {
  // Placeholder function for now
  return {
    username: 'JohnDoe',
    role: 'user',
  };
};

const UserProvider = ({ children }) => {
  const value = {
    user: useUser(),
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider, useUser };
export default UserContext;
