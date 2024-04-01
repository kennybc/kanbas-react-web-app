import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
export default function Signin() {
  const [credentials, setCredentials] = useState<User>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "USER",
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account/Profile");
  };
  return (
    <div className="container-fluid py-4">
      <h2 className="pb-3">Signin</h2>
      <div className="d-flex flex-column w-25 gap-2 mb-3">
        <input
          style={{ height: "40px" }}
          value={credentials.username}
          placeholder="Username"
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <input
          style={{ height: "40px" }}
          value={credentials.password}
          placeholder="Password"
          type="password"
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
      </div>
      <button className="btn" onClick={signin}>
        Signin
      </button>
      <Link
        to="/Kanbas/Account/Signup"
        className="btn"
        style={{ marginLeft: "5px" }}
      >
        Don't have an account?
      </Link>
    </div>
  );
}
