import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContexts";

const ToLogin = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(credentials);
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
            name="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            name="password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ToLogin;
