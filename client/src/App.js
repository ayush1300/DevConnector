import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Landing from "./Components/Layout/Landing";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import Alert from "./Components/Layout/Alert";
import "./App.css";

// Redux
import { Provider } from "react-redux";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";

if(localStorage.token){
  setAuthToken(localStorage.token);
}


const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  },[]);

  return (
    <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Alert/>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
      </div>
    </Router>
    </Provider>
  );
};

export default App;
