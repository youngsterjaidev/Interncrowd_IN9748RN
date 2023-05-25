import React from "react";
import styled from "styled-components";

interface Props {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}

export const Button = styled.button<Props>`
  border: 1px solid ${(props) => props.theme.button};
  background: ${(props) => props.theme.button};
  color: #fff;
  padding: 1.5ch 2ch;
  border-radius: ${(props) => props.theme.borderRadius};
  font-weight: bold;
  cursor: pointer;
  font-family: ${(props) => props.theme.fontFamily};

  &:hover {
    background: ${(props) => props.theme.buttonHover};
    color: white;
  }

  &:disabled {
    background: ${(props) => props.theme.placeholderDark};
    border-color: ${(props) => props.theme.placeholderDark};
    cursor: not-allowed;
  }

  ${(props) =>
    props.large &&
    `
      padding: 1rem 4rem; 
  `}
`;
