import React, { createContext, useState } from 'react';

// Create the UserContext
export const UserContext = createContext();

// Create a Provider Component
export function UserProvider({ children }) {
  const [user, setUser] = useState({ isLoggedIn: false, username: '' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
