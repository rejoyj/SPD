import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';


function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      const response = await axios.post("http://localhost:8080/api/auth/register", {
        name,
        email,
        password,
      });

      console.log("Registration successful", response.data);
      setSuccess("Registration successful! Redirecting...");
      setError('');
      setTimeout(() => navigate('/'), 2000); // Redirect to login or dashboard
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed");
      setSuccess('');
    }
  };

  return (
    <div className="background-section">
      <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
        <Row className="w-100">
          <Col md={6} className="text-section text-white d-flex flex-column justify-content-center p-5">
            <h1>Join Curvel IoT Today</h1>
            <p className="lead mt-3">
              Sign up to explore Curvel’s smart wearable ecosystem. Track your health, manage your goals, and connect your lifestyle with cutting-edge IoT solutions.
            </p>
          </Col>

          <Col md={6} className="d-flex align-items-center justify-content-center">
            <div className="login-form p-4 shadow w-100">
              <h3 className="text-center mb-3">User Registration</h3>
              <p className="text-center text-muted">Create your Curvel account</p>

              {error && <p className="text-danger text-center">{error}</p>}
              {success && <p className="text-success text-center">{success}</p>}

              <form onSubmit={handleRegister}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="John"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-warning w-100 mb-3 fw-semibold">
                  Register
                </button>
              </form>

              <div className="text-center">
                <small className="text-muted">
                  Already have an account?{' '}
                  <Link to="/" className="fw-bold text-decoration-none">Login here</Link>
                </small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RegisterPage;
