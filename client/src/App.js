import Register from './components/auth/Register';
import Login from './components/auth/Login';
// import Projects from './components/projects/projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import authToken from './config/token';
import AuthState from './context/auth/authState';
// import PrivateRoute from './components/privateRoute/PrivateRoute';

const token = localStorage.getItem('token')
if (token) {
  authToken(token)
}

function App() {
  return (
    <AuthState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          {/*<PrivateRoute path='/projects' component={Projects} />*/}
        </Switch>
      </Router>
    </AuthState>
  );
}

export default App;
