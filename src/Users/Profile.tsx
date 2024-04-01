import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Profile() {
  const defaultProfile = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    role: "USER",
  };
  const [profile, setProfile] = useState(defaultProfile);
  const navigate = useNavigate();
  const fetchProfile = async () => {
    const account = await client.profile().catch((e) => {
      navigate("/Kanbas/Account/Signin");
    });
    setProfile(account);
  };
  const save = async () => {
    await client.updateUser(profile);
  };
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Account/Signin");
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div className="container-fluid py-4">
      <h2 className="pb-3">Profile</h2>
      {profile && (
        <div className="post-form">
          <input
            value={profile.username ?? defaultProfile.username}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />
          <input
            value={profile.password ?? defaultProfile.password}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />
          <input
            value={profile.firstName ?? defaultProfile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <input
            value={profile.lastName ?? defaultProfile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <input
            value={profile.dob ?? defaultProfile.dob}
            type="date"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <input
            value={profile.email ?? defaultProfile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <select
            value={profile.role ?? defaultProfile.role}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>
      )}
      <button className="btn" onClick={save} style={{ marginRight: "5px" }}>
        Save
      </button>
      <button className="btn btn-red" onClick={signout}>
        Signout
      </button>
      <br />
      <Link
        to="/Kanbas/Account/Admin/Users"
        className="btn"
        style={{ marginTop: "10px" }}
      >
        View All Users
      </Link>
    </div>
  );
}
