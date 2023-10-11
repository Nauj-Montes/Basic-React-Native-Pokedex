import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  user: null,
});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(undefined);

  const login = (user) => {
    setAuth(user);
  };

  const logout = () => {
    setAuth(null);
  };

  const valueContext = {
    auth,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
};
