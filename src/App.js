import React from "react";
import PropertyList from "./components/Properties";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute"; // import it
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route
          path="/property-list"
          element={
            <ProtectedRoute>
              <PropertyList />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={
            <ProtectedRoute>
              <PropertyList />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
