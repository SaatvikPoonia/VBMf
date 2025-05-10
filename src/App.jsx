import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Building2,
  Info,
  MessageSquare,
  AlertCircle,
  LogIn,
} from "lucide-react";
import Home from "./pages/Home";
import About from "./pages/About";
import Query from "./pages/Query";
import Complaint from "./pages/Complaint";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";

import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./PrivateRoute";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-blue-900 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center space-x-2">
                  <Building2 className="h-8 w-8" />
                  <span className="font-bold text-xl">
                    Vishnu Building Material
                  </span>
                </div>
                <div className="flex space-x-6">
                  <Link
                    to="/"
                    className="flex items-center space-x-1 hover:text-blue-200 transition-all duration-300 hover:scale-105"
                  >
                    <Building2 className="h-5 w-5" />
                    <span>Home</span>
                  </Link>
                  <Link
                    to="/about"
                    className="flex items-center space-x-1 hover:text-blue-200 transition-all duration-300 hover:scale-105"
                  >
                    <Info className="h-5 w-5" />
                    <span>About Us</span>
                  </Link>
                  <Link
                    to="/query"
                    className="flex items-center space-x-1 hover:text-blue-200 transition-all duration-300 hover:scale-105"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Raise Query</span>
                  </Link>
                  <Link
                    to="/complaint"
                    className="flex items-center space-x-1 hover:text-blue-200 transition-all duration-300 hover:scale-105"
                  >
                    <AlertCircle className="h-5 w-5" />
                    <span>Complaints</span>
                  </Link>
                  <Link
                    to="/login"
                    className="flex items-center space-x-1 hover:text-blue-200 transition-all duration-300 hover:scale-105"
                  >
                    <LogIn className="h-5 w-5" />
                    <span>Login</span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/query" element={<Query />} />
              <Route path="/complaint" element={<Complaint />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/dashboard/*"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <PrivateRoute>
                    <AdminDashboard />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>

          <footer className="bg-blue-900 text-white mt-12">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                  <p>Hissaria Bazaar</p>
                  <p>Sirsa - 125055</p>
                  <p>Phone: 9978661010</p>
                  <p>Email: info@vishnubuilding.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/"
                        className="hover:text-blue-200 transition-all duration-300 hover:translate-x-2 inline-block"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="hover:text-blue-200 transition-all duration-300 hover:translate-x-2 inline-block"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/query"
                        className="hover:text-blue-200 transition-all duration-300 hover:translate-x-2 inline-block"
                      >
                        Raise Query
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/complaint"
                        className="hover:text-blue-200 transition-all duration-300 hover:translate-x-2 inline-block"
                      >
                        Complaints
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/login"
                        className="hover:text-blue-200 transition-all duration-300 hover:translate-x-2 inline-block"
                      >
                        Login
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              <div className="text-center mt-8 pt-8 border-t border-blue-800">
                <p>© 2025 Vishnu Building Material. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
