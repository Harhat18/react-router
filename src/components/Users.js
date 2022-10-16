import { useEffect, useState } from "react";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import axios from "axios";
import User from "./User";

function Users() {
  const [loading, setLoading] = useState(true);
  const [Users, useUsers] = useState([]);
  const { path, url } = useRouteMatch();
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      // eslint-disable-next-line react-hooks/rules-of-hooks
      .then((res) => useUsers(res.data))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <h1>USERS</h1>
      {loading && <div>Loading...</div>}
      <ul>
        {Users.map((user) => (
          <li key={user.id}>
            <NavLink activeClassName="active" to={`${url}/${user.id}`}>
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a user.</h3>
        </Route>
        <Route path={`${path}/:id`} component={User} />
      </Switch>
    </div>
  );
}

export default Users;
