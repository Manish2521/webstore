// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Login from './components/Login';
import Landingpage from './components/Landingpage';
import Contact from './components/Contact';
import Stores from './components/Stores';
import LaptopStore from './components/LaptopStore';
import BookStore from './components/BookStore';
import FoodStore from './components/FoodStore';
import FurnitureStore from './components/FurnitureStore';
import ElectronicStore from './components/ElectronicStore';
import ClothingStore from './components/ClothingStore';
import Dashboard from './components/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('authToken'));

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            !isAuthenticated ? (
              <Login onLogin={handleLogin} />
            ) : (
              <Navigate to="/landingpage" />
            )
          } 
        />
        <Route
          path="/landingpage"
          element={
            isAuthenticated ? (
              <>
                <Navbar onLogout={handleLogout} />
                <main>
                  <Landingpage />
                </main>
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/about"
          element={
            isAuthenticated ? (
              <>
                <Navbar onLogout={handleLogout} />
                <main>
                  <About />
                </main>
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/contact"
          element={
            isAuthenticated ? (
              <>
                <Navbar onLogout={handleLogout} />
                <main>
                  <Contact />
                </main>
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/stores"
          element={
            isAuthenticated ? (
              <>
                <Navbar onLogout={handleLogout} />
                <main>
                  <Stores />
                </main>
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/laptopstore"
          element={
            isAuthenticated ? (
              <>
                <Navbar onLogout={handleLogout} />
                <main>
                  <LaptopStore /> 
                </main>
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/bookstore"
          element={
            isAuthenticated ? (
              <>
                <Navbar onLogout={handleLogout} />
                <main>
                  <BookStore /> 
                </main>
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/foodstore"
          element={
            isAuthenticated ? (
              <>
                <Navbar onLogout={handleLogout} />
                <main>
                  <FoodStore /> 
                </main>
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/furniturestore"
          element={
            isAuthenticated ? (
              <>
                <Navbar onLogout={handleLogout} />
                <main>
                  <FurnitureStore /> 
                </main>
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/electronicstore"
          element={
            isAuthenticated ? (
              <>
                <Navbar onLogout={handleLogout} />
                <main>
                  <ElectronicStore /> 
                </main>
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/clothingstore"
          element={
            isAuthenticated ? (
              <>
                <Navbar onLogout={handleLogout} />
                <main>
                  <ClothingStore /> 
                </main>
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <>
                <Navbar onLogout={handleLogout} />
                <main>
                  <Dashboard />
                </main>
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
