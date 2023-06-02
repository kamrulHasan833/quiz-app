import React from "react";
import { Link } from "react-router-dom";
import styles from "../assets/styles/Account.module.css";
import useAuth from "../context/AuthContext";
export default function Account() {
  const { currentUser, signout } = useAuth();

  return (
    <div className={styles.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      {currentUser ? (
        <>
          <p>{currentUser.displayName}</p>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={signout}
          >
            logout
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
