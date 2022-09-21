import type { Keyframes } from "styled-components";
import styled, { css, keyframes } from "styled-components";

export type DirectionType = "right" | "left" | "top";

const getTranslate = (direction: DirectionType) => {
  switch (direction) {
    case "left":
      return "translateX(-0.2rem)";
    case "right":
      return "translateX(0.2rem)";
    case "top":
      return "translateY(-0.2rem)";
    default:
      return "translateX(-0.2rem)";
  }
};

const getBounceAnimation = (direction: DirectionType): Keyframes => {
  const translate = getTranslate(direction);

  return keyframes`
    0%, 100%, 50% {
      -webkit-transform: translate(0);
      -ms-transform:     translate(0);
      transform:         translate(0);
    }
    25% {
      -webkit-transform: ${translate};
      -ms-transform:     ${translate};
      transform:         ${translate};
    }
    75% {
      -webkit-transform: ${translate};
      -ms-transform:     ${translate};
      transform:         ${translate};
    }
  `;
};

export const StyledButton = styled.button<{
  disabled: boolean;
  $direction: "right" | "left" | "top";
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.31rem;
  border: none;
  background-color: var(--secondaryLightColor);
  outline: none;
  cursor: pointer;
  -webkit-animation-duration: 0.7s;
  animation-duration: 0.7s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  transition: all 0.3s;

  ${({ $direction = "right", disabled }) =>
    !disabled &&
    css`
      &:hover {
        animation-name: ${getBounceAnimation($direction)};
        -moz-animation-name: ${getBounceAnimation($direction)};
        background-color: var(--lightMediumColor);

        svg {
          path {
            fill: var(--whiteColor);
          }
        }
      }
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `};
`;
