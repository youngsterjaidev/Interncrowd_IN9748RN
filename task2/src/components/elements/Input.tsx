import React from "react";
import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  min-width: 18rem;
  padding: 1.5ch 2ch;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};

  &::placeholder {
    font-family: ${(props) => props.theme.fontFamily};
    font-weight: bold;
    color: ${(props) => props.theme.primary};
  }

  &:focus,
  &:active {
    outline: 1.9px solid ${(props) => props.theme.outline};
    outline-offset: 1px;
    box-shadow: ${props => props.theme.shadow};
  }

  @media (max-width: 550px) {
    min-width: auto;
  }
`;
