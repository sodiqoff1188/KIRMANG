import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import PrivateRoute from './Components/PrivateRoute';
import AuthService from './auth';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Foydalanuvchi login qilinganligini tekshiradi
  useEffect(() => {
    const authenticated = AuthService.isAuthenticated();
    setIsAuthenticated(authenticated);
  }, []); // faqat bir marta tekshiradi

  // Login/Register muvaffaqiyatli bo‘lganda chaqiriladi
  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  // Login ↔ Register toggle
  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  // Logout funksiya (Dashboard’dan chaqiriladi)
  const handleLogout = () => {
    AuthService.logout();          // token yoki localStorage o‘chiriladi
    setIsAuthenticated(false);     // App.jsx state yangilanadi
  };

  return (
    <Router>
      <Routes>
        {/* Root path */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : isLogin ? (
              <Login onToggle={handleToggle} onLoginSuccess={handleAuthSuccess} />
            ) : (
              <Register onToggle={handleToggle} onRegisterSuccess={handleAuthSuccess} />
            )
          }
        />

        {/* Login path */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login onToggle={handleToggle} onLoginSuccess={handleAuthSuccess} />
            )
          }
        />

        {/* Register path */}
        <Route
          path="/register"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <Register onToggle={handleToggle} onRegisterSuccess={handleAuthSuccess} />
            )
          }
        />

        {/* Dashboard path */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard onLogout={handleLogout} />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
