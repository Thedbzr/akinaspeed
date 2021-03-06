import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = {...this.state};
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      this.setState({ error: 'Sign Up Failed - Try Again'});
    }
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <>
        <div>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} required/>
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required placeholder="e.g. alexsmith@gmail.com" />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
              </div>
            </div>
            <div className="field">
              <label className="label">Confirm Password</label>
              <div className="control">
                <input placeholder='Confirm Password' type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
              </div>
            </div>
            <button className="button is-normal" type="submit" disabled={disable}>SIGN UP</button>
          </form>
          <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
      </>
    );
  }
}