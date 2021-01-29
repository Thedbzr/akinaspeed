import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Container } from 'react-bootstrap';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <Container className="authForm">
        <h1>AuthPage</h1>
        {showLogin ?
          <LoginForm setUser={setUser} setShowLogin={setShowLogin} showLogin={showLogin} />
          :
          <SignUpForm setUser={setUser} setShowLogin={setShowLogin}  showLogin={showLogin}/>
        }
        <button className="button signUpBtn is-normal " onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</button>
      </Container>
    </>
  );
}