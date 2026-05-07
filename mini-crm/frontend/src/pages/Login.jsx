import { useState } from "react";

import API from "../api/axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {

    try {

      const res = await API.post(
        "/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Success");

    } catch (error) {

      alert(
        error.response.data.message
      );

    }
  };

  return (
    <div>

      <h1>Mini CRM</h1>

      <input
        placeholder="Email"
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button onClick={login}>
        Login
      </button>

    </div>
  );
}

export default Login;