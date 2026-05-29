import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));

  }, []);

  return (

    <div className="container">

      <h1>User Data from API</h1>

      {

        users.map((user) => (

          <div className="card" key={user.id}>

            <h2>{user.name}</h2>

            <p>Email: {user.email}</p>

            <p>City: {user.address.city}</p>

          </div>

        ))

      }

    </div>

  );

}

export default App;
