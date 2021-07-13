import React, {useState} from 'react';

const Register = (props) => {

  const [loginData, setLoginData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  })

  const { name, email, password, confirm } = loginData;

  return(
    <div className="form-login">
      <div className="form-container dark-shadow">
        <h1>Register</h1>
        <form>
          <div className="form-field">
            <label>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={name}
            />
          </div>

          <div className="form-field">
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
            />
          </div>

          <div className="form-field">
            <label>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
            />
          </div>

          <div className="form-field">
            <label>Confirm Password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              placeholder="Password"
              value={confirm}
            />
          </div>

          <div className="form-field">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Sign Up"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;