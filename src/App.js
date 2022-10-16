import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
//pages
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink
                activeStyle="{{ backgroundColor: 'black' color: '#fff' }}"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle="{{ backgroundColor: 'black' color: '#fff' }}"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle="{{ backgroundColor: 'black' color: '#fff' }}"
                to="/users"
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
