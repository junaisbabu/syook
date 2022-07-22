import React, { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const fetchFn = () => {
  return fetch(
    "https://raw.githubusercontent.com/syook/react-dishpoll/main/users.json"
  ).then((res) => res.json());
};

function Login() {
  const [users, setUsers] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetchFn().then((user) => {
      setUsers(user);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    users.map((item) => {
      console.log(item.username, item.password);
      console.log(username);
      console.log(password);

      if (item.username === username && item.password === password) {
        navigate("/dishes");
      }
    });
  };

  return (
    <div className="login-container">
      <div className="form-body card col-sm-7 col-md-3">
        <div className="card-header">
          <h1>LOG IN</h1>
        </div>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlfor="username" className="form-label">
              username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlfor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary col-12">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
