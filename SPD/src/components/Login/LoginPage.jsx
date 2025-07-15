import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        username: email,
        password
      });

      console.log("Login successful", response.data);
      localStorage.setItem("token", response.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="background-section">
      <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
        <Row className="w-100">
          <Col md={6} className="text-section text-white d-flex flex-column justify-content-center p-5">
            <h1> Welcome to Curvel IoT</h1>
            <p className="lead mt-3">
              Innovify Tech specializes in creating smart wearable devices, such as smart wristbands, that seamlessly integrate into users' daily routines. These wearables offer features like activity tracking, sleep monitoring, 
              heart rate monitoring, and more, empowering users to stay connected, motivated, and informed about their health and fitness goals.
            </p>
            
          </Col>

          <Col md={6} className="d-flex align-items-center justify-content-center">
            <div className="login-form p-4 shadow w-100">
              <h3 className="text-center mb-3">User Login</h3>
              <p className="text-center text-muted">Welcome back!</p>

              {error && <p className="text-danger text-center">{error}</p>}

              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="username@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="text-end mb-3">
                  <Link to="/forgot-password" className="text-decoration-none small text-muted">Forgot Password?</Link>
                </div>

                <button type="submit" className="btn btn-warning w-100 mb-3 fw-semibold">
                  Login
                </button>
              </form>

              <div className="text-center">
                <small className="text-muted">
                  Are you a New User?{' '}
                  <Link to="/register" className="fw-bold text-decoration-none">Register here</Link>
                </small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage;
