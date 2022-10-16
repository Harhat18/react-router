import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function user() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      // eslint-disable-next-line react-hooks/rules-of-hooks
      .finally(() => setLoading(false));
  }, [id]);
  return (
    <div>
      <h1> user detail</h1>
      {loading && <div>Loading...</div>}
      {!loading && <code>{JSON.stringify(user)}</code>}
      <br></br>
      <br></br>
      <Link to={`/users/${parseInt(id) + 1}`}>
        Next User ({parseInt(id) + 1})
      </Link>
    </div>
  );
}

export default user;
