import React, { useState, createContext } from "react";

export const AuthContext = createContext({
  user: undefined,
  login: () => {},
  logout: () => {},
});

export function AuthProvider(props) {
  const { children } = props; // All the App
  const [auth, setAuth] = useState(undefined);

  const login = (user) => {
    setAuth(user);
  };

  const logout = () => {
    setAuth(undefined);
  };

  const valueContext = {
    auth,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}