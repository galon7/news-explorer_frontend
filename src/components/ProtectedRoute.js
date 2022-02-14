import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, setIsLoginOpen }) {
  return localStorage.getItem('token') ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
