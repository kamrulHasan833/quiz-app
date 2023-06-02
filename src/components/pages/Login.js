import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/login.svg";
import styles from "../../assets/styles/Login.module.css";
import useAuth from "../../context/AuthContext";
import Button from "../Button";
import Column from "../Column";
import Form from "../Form";
import Illustration from "../Illustration";
import Info from "../Info";
import TextInput from "../TextInput";
export default function Login() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin } = useAuth();
  const navigate = useNavigate();
  async function submitHandle(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signin(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError("An error occured! Try again.");
      setLoading(false);
    }
  }
  return (
    <>
      <h1>Login to your account</h1>
      <Column>
        <Illustration image={image} alt="Login" />
        <Form className={styles.login} onSubmit={submitHandle}>
          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            type="password"
            placeholder="Enter password"
            icon="lock"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error ? <p className="error">{error}</p> : ""}
          <Button text="Submit Now" type="submit" />
          <Info text1="Don't have an account?" text2="Signup" link="/signup" />
        </Form>
      </Column>
    </>
  );
}
