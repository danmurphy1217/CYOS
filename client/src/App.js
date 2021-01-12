import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Global } from "./styles/globals";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Global/>
      <Switch>
        <Route exact path='/login' component={LoginPage}/>
      </Switch>
    </Router>
  )
}

export default App;
