import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from "./pages/register/register.js";
import Login from "./pages/login_page/login.js";
import Home from "./pages/home/home.js";
import Cart from "./pages/cart/cart.js";
import { AnimatePresence } from "framer-motion";
import CardInCart from "./components/cart-card/cartCard.js"


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
      <Route path="/cart">
        <Cart />
      </Route>
    </Router>

    
  );
}

export default App;
