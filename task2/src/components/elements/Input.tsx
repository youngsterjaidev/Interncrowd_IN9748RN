import React from "react";
import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  min-width: 18rem;
  padding: 1ch 2ch;
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: ${(props) => props.theme.borderRadius};

  &::placeholder {
    font-family: ${(props) => props.theme.fontFamily};
    font-weight: bold;
    color: ${(props) => props.theme.primary};
  }

  &:focus,
  &:active {
    outline: 4px solid ${(props) => props.theme.primary};
    outline-offset: 1px;
  }

  @media (max-width: 550px) {
    min-width: auto;
  }
`;
