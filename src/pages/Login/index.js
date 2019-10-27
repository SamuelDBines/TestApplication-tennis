import React, { Component, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  TextInput
} from "react-materialize";
import { StyledCard, StyledButton } from "./styles";
const API = "/data";

export default props => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  });
  const actions = (
    <StyledButton
      onClick={loginAction}
      disabled={!credentials.email || !credentials.password}
    >
      Login
    </StyledButton>
  );

  const loginAction = () => {
    if (!validFormat(credentials)) {
    }
  };

  const handleChange = e => {
    try {
      const { id, value } = e.target;
      setCredentials({ ...credentials, [id]: value });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Container>
      <StyledCard textClassName="white-text" title="Login" actions={[actions]}>
        <TextInput
          id="email"
          onChange={handleChange}
          label="Email"
          type="email"
          required
        />
        <TextInput
          id="password"
          onChange={handleChange}
          label="Password"
          type="password"
          required
        />
      </StyledCard>
    </Container>
  );
};
