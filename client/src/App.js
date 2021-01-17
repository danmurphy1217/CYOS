import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Global } from "./styles/globals";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware } from "redux";

import appReducer from "./reducers";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
	appReducer,
	composeWithDevTools(applyMiddleware(reduxThunk, logger))
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Global />
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/forgot" component={LoginPage} />
          <Route exact path="/signup" component={LoginPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
