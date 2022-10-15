import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//pages
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/about" component={Users} />
            <Route path="/about" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
