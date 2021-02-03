import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LogIn({ setUser, setShowLogin, showLogin }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <>
      <div className="form-container" onSubmit={handleSubmit}>
        <form autoComplete="off">
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input className="input" placeholder="Email" type="text" name="email" value={credentials.email} onChange={handleChange} required />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input className="input" placeholder="Password" type="password" name="password" value={credentials.password} onChange={handleChange} required />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-normal" type="submit">Login</button>
              {/* <button className="button signUpBtn is-normal " onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</button> */}
            </p>
          </div>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </>
  );
}