import React from "react";
import type { DirectionType } from "./button.styled";
import { StyledButton } from "./button.styled";

interface ButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
  isDisabled?: boolean;
  className?: string;
  direction: DirectionType;
}

const Button: React.FC<ButtonProps> = ({
  children,
  handleClick,
  isDisabled = false,
  className = "",
  direction,
}) => {
  return (
    <StyledButton
      onClick={handleClick}
      disabled={isDisabled}
      $direction={direction}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
