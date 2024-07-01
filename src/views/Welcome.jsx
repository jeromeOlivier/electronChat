import React, { useState } from 'react';
import { LoginForm, RegisterForm } from '../components/';

export default function Welcome() {
  const [isLoginIn, setIsLogIn] = useState(true);

  const toggleForm = () => setIsLogIn(!isLoginIn);
  const form = isLoginIn ? <LoginForm /> : <RegisterForm />;
  const message = isLoginIn ? `Don't have an account?` : `Already registered?`;
  const action = isLoginIn ? `Register` : `Sign in`;

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
