import React, { useState, useEffect } from 'react';
import { LoginForm, RegisterForm } from '../components/';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function Welcome() {
  const [isLoginIn, setIsLogIn] = useState(true);
  const user = useSelector(({ auth }) => auth.user);
  const isChecking = useSelector(({ auth }) => auth.isChecking);

  const toggleForm = () => setIsLogIn(!isLoginIn);
  const form = isLoginIn ? <LoginForm /> : <RegisterForm />;
  const message = isLoginIn ? `Don't have an account?` : `Already registered?`;
  const action = isLoginIn ? `Register` : `Sign in`;

  if (isChecking) {
    return <h1>Authenticating...</h1>;
  }

  if (user) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="centered-view">
      <div className="centered-container">
        {form}
        <small className="form-text text-muted mt-2">
          {message}
          <span onClick={toggleForm} className="btn-link ml-2">
            {action}
          </span>
        </small>
      </div>
    </div>
  );
}
