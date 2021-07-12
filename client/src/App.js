import Register from './components/auth/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import authToken from './config/token';

const token = localStorage.getItem('token')
if (token) {
  authToken(token)
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
