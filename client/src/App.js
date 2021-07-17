import Register from './components/auth/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import authToken from './config/token';
import AuthState from './context/auth/authState';

const token = localStorage.getItem('token')
if (token) {
  authToken(token)
}

function App() {
  return (
    <AuthState>
      <Router>
        <Switch>
          <Route path="/" component={Register} />
        </Switch>
      </Router>
    </AuthState>
  );
}

export default App;
