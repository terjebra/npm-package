import * as React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: green;
`;
export type ButtonProps = {
  title: string;
};
const Button: React.FunctionComponent<ButtonProps> = props => (
  <StyledButton>{props.title}</StyledButton>
);

export default Button;
