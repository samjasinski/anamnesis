import React from "react";
import Input from "../General/Input";
import Label from "../General/Label";

function Login() {
  return (
    <login>
      <form id="loginForm" action="">
        <Label for="loginUsername" text="Username" />
        <Input
          id="loginUsername"
          type="text"
          placeholder="JohnSmith@gmail.com"
        />
        <Label for="loginPassword" text="Password" />
        <Input
          id="loginPassword"
          type="text"
          placeholder="A very secure and secret password..."
        />
      </form>
    </login>
  );
}

export default Login;
