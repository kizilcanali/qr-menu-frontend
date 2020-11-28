import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Register from "./pages/register/register.js";
import Login from "./pages/login_page/login.js";
import { AnimatePresence } from "framer-motion";
import { Menu } from 'semantic-ui-react';

function App() {
  return (
    <Router>
      <Menu>
        <Menu.Item>
          <Link to="/register">Kayıt</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/login">Giriş</Link>
        </Menu.Item>
      </Menu>
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

    </Router>
  );
}

export default App;
