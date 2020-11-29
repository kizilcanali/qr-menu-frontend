import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from "./pages/register/register.js";
import Login from "./pages/login_page/login.js";
import Home from "./pages/home/home.js"
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <Router>
      <AnimatePresence>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </AnimatePresence>

      <Route path="/home">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
