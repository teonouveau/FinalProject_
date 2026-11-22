
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (studentId.trim() === '' || password.trim() === '') {
      setError('Please enter your Student ID and password.');
      return;
    }

    // Demo login only
    navigate('/dashboard');
  };

  return (
    <div className="login-container">

      <div className="login-card">

       
          <h2>Smart Registrar</h2>
          <p>Student Request Portal</p>
        </div>

        <div className="login-heading">
          <h1>Welcome Back!</h1>
          <p>Sign in to manage your registrar requests.</p>
        </div>

        <form onSubmit={handleLogin}>

          <label>Student ID / Email</label>
          <input
            type="text"
            placeholder="Enter your Student ID or Email"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <button type="submit" className="login-button">
            Sign In
          </button>

        </form>

        <p className="login-footer">
          Need assistance? Contact the Registrar's Office.
        </p>

      </div>
  );
}

export default Login;
