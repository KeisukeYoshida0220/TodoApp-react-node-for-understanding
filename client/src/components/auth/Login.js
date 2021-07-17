import React, {useState, useContext, useEffect} from 'react';
import authContext from '../../context/auth/authContext';
import {Link} from 'react-router-dom';

const Login = (props) => {

  // signInUser Contextを作成
  const {signInUser, isAuth} = useContext(authContext);

  useEffect( () => {
    if (isAuth) {
      props.history.push('/projects');
    }
  })

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = loginData;

  const updateData = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    })
  };

  const handleSubmit = (e) => {
    console.log("きた？")
    e.preventDefault();
    signInUser({email, password});
  };

  return(
    <div className="form-login">
      <div className="form-container dark-shadow">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>

          <div className="form-field">
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={updateData}
            />
          </div>

          <div className="form-field">
            <label>Password</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={updateData}
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
        <Link to={'/register'}>
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;