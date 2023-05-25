import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input } from "../components";
import { Link } from "react-router-dom";
import { loginUser } from "../utils/api";

interface Props {}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.backgroundColor};
  display: grid;
  place-items: center;
`;

const Form = styled.form`
  padding: 1ch 2ch;
  aspect-ratio: 1/1.3;

  & > div {
    padding: 0.3rem 0rem;
  }
`;

const H2 = styled.h2`
  text-align: center;
`;

const H4 = styled.h4`
  text-align: center;
  font-weight: 200;
`;

const FormButton = styled(Button)`
  width: 100%;
`;

const MyLink = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: none;
  padding: 0.3rem 0rem;
`;

export default ({}: Props) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      let feedback = await loginUser(email, password);

      setMessage(feedback.message);
    } catch (e) {
      console.log("Error Occured while submiting the form : ", e);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      let el = e.target;

      // get the form element
      let form = e.target.parentElement.parentElement;

      setIsFormValid(form.checkValidity());

      if (el.name === "email") {
        setEmail(el.value);

        return;
      }

      if (el.name === "password") {
        setPassword(el.value);
        return;
      }

      return;
    } catch (e) {
      console.log("Error Occured while changing the value: ", e);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <H2>InternCrowd</H2>
        <H4>Become a memeber!</H4>
        <legend>{message}</legend>
        <div>
          <Input
            type="email"
            name="email"
            value={email}
            placeholder="email"
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div>
          <Input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div>
          <FormButton type="submit" disabled={!isFormValid}>
            Login
          </FormButton>
          <MyLink to="/createaccount">Create Account</MyLink>
        </div>
      </Form>
    </Container>
  );
};
