import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postRequest } from '../api/apiService';
import './Login.css'; // 👈 Import custom styles

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      const response = await postRequest('/Login/ValidateUser', {
        email,
        password,
      });

      if (response.message === 'Logged in successfully') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userID', response.user.userID);
        navigate('/property-list');
      } else {
        setMessage(response.message || 'Invalid username or password');
      }
    } catch (error) {
      setMessage(error.message || 'Login failed. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center min-vh-100">
      <div className="login-card shadow p-4 rounded bg-white" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">Welcome Back</h3>

        {message && <div className="alert alert-danger text-center">{message}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn btn-login w-100" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="mt-3 text-center text-muted" style={{ fontSize: '14px' }}>
          © {new Date().getFullYear()} RealEstate
        </div>
      </div>
    </div>
  );
};

export default Login;
