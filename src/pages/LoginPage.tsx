
import React from 'react';
import LoginForm from '../components/LoginForm';
import '../style/estilo.css'; 


const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <LoginForm />
    </div>
  );
};


export default LoginPage;