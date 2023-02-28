import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context";
import { Login, Main, News, Profile } from "../pages";

export const AppRoutes = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/news" element={<News />} />
      <Route
        path="/profile"
        element={isAuth ? <Profile /> : <Navigate to="/" />}
      />
      <Route path="/login" element={isAuth ? <Navigate to="/" /> : <Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
