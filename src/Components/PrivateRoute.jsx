import React from 'react';
import { Navigate } from 'react-router-dom';

// Parentdan isAuthenticated prop oladi
const PrivateRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" />; // Agar autentifikatsiya bo'lmasa login/register sahifasiga yuboradi
  }
  return children; // Auth bo'lsa, ichidagi componentni render qiladi
};

export default PrivateRoute;
