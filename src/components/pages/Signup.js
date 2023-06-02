import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/signup.svg";
import styles from "../../assets/styles/Signup.module.css";
import useAuth from "../../context/AuthContext";
import Button from "../Button";
import CheckBox from "../Checkbox";
import Column from "../Column";
import Form from "../Form";
import Illustration from "../Illustration";
import Info from "../Info";
import TextInput from "../TextInput";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup, currentUser } = useAuth();

  async function submitHandle(e) {
    e.preventDefault();
    if (password !== conPassword) {
      return setError("Passwords don't match! Try again.");
    }
    try {
      setError("");
      setLoading(true);
      await signup(username, email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("A error occured! Try again.");
    }
  }

  return (
    <>
      <h1>Create an account</h1>
      {loading && <p>Loading....</p>}
      <Column>
        <Illustration image={image} alt="Signup" />
        <Form className={styles.signup} onSubmit={submitHandle}>
          <TextInput
            type="text"
            name="username"
            placeholder="Enter name"
            icon="person"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextInput
            type="email"
            name="email"
            placeholder="Enter email"
            icon="alternate_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            type="password"
            name="password"
            placeholder="Enter password"
            icon="lock"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextInput
            type="password"
            name="conPassword"
            placeholder="Confirm password"
            icon="lock_clock"
            value={conPassword}
            onChange={(e) => setConPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <CheckBox
            text="I agree to the Terms & Conditions"
            checked={agree}
            name="agree"
            onChange={(e) => setAgree(e.target.checked)}
          />
          <Button type="submit" text="Submit Now" />
        </Form>
      </Column>
      <Info text1="Already have an account?" text2="Login" link="/login" />
    </>
  );
}
