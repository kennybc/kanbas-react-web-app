import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
export default function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(user);
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="container-fluid py-4">
      <h2 className="pb-3">Signup</h2>
      <div className="d-flex flex-column w-25 gap-2 mb-3">
        {error && <div>{error}</div>}
        <input
          style={{ height: "40px" }}
          value={user.username}
          placeholder="Username"
          onChange={(e) =>
            setUser({
              ...user,
              username: e.target.value,
            })
          }
        />
        <input
          style={{ height: "40px" }}
          value={user.password}
          placeholder="Password"
          type="password"
          onChange={(e) =>
            setUser({
              ...user,
              password: e.target.value,
            })
          }
        />
      </div>
      <button className="btn" onClick={signup}>
        Signup
      </button>
      <Link
        to="/Kanbas/Account/Signin"
        className="btn"
        style={{ marginLeft: "5px" }}
      >
        Already have an account?
      </Link>
    </div>
  );
}
