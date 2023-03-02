import React, { useState, createContext, useEffect } from "react";

export interface IAuthContext {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IAuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthContextProviderProps) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user !== null) {
      setIsAuth(true);
    }
  }, []);

  const value = { isAuth, setIsAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
