import React, { Component, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  TextInput
} from "react-materialize";
const API = "/data";

export default props => {
  const actions = <Button> Register </Button>;

  return (
    <Container>
      <Card
        className="blue-grey darken-1"
        textClassName="white-text"
        title="Login"
        actions={[actions]}
      >
        <TextInput label="Full Name" />
        <TextInput label="Email" type="email" />
        <TextInput label="Password" type="password" />
        <TextInput label="Confirm Password" type="password" />
      </Card>
    </Container>
  );
};
