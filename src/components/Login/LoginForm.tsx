import React, { useState } from "react";
import { useLogin } from "../../hooks";
import { StyledButton } from "../../styled";
import { StyledForm, StyledInput } from "./styled";

export const LoginForm = () => {
  const { login } = useLogin();

  const [loginData, setLoginData] = useState({ name: "", password: "" });
  const { name, password } = loginData;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const submitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(loginData);
    setLoginData({ name: "", password: "" });
  };

  const isDisabled = name === "" || password === "" || name.trim() === '' || password.trim() === ''

  return (
    <>
      <StyledForm onSubmit={submitLogin}>
        <StyledInput
          type="text"
          id="name"
          placeholder="name"
          value={name}
          onChange={(e) => handleInput(e)}
        />
        <StyledInput
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => handleInput(e)}
        />
        <StyledButton type="submit" disabled={isDisabled}>
          Login
        </StyledButton>
      </StyledForm>
    </>
  );
};
