import styled, { css, keyframes } from "styled-components";
import closeIcon from "~/images/close-icon.svg";
import SimpleArrow from "~/svg-components/simple-arrow";
import breakpoints from "~/constans/breakpoints";
import { Link } from "react-router-dom";

const fadeAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      position: fixed;
      z-index: 10;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.6);
      overflow: auto;
      -webkit-animation-duration: 0.5s;
      animation-duration: 0.5s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation-timing-function: ease-in-out;
      animation-timing-function: ease-in-out;
      animation-name: ${fadeAnimation};
      -moz-animation-name: ${fadeAnimation};
    `};
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 39.62rem;
  width: 100%;
  padding: 0 0.56rem;
  margin: 25.4vh auto 0;

  @media (max-width: ${breakpoints.md}) {
    max-width: 24.25rem;
    margin: 21.1vh auto 0;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -1.56rem;
  right: 0;
  width: 0.87rem;
  height: 0.87rem;
  border: none;
  background: transparent url(${closeIcon}) no-repeat center center;
  outline: none;
  cursor: pointer;
`;

export const Search = styled.input`
  width: 100%;
  padding: 1.5rem 1.56rem 1.31rem 2.19rem;
  border: none;
  border-radius: 2rem;
  color: var(--blackColor);
  background-color: var(--whiteColor);
  font-family: var(--mainFont);
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.19rem;
  outline: none;

  &::placeholder {
    color: var(--secondaryMediumColor);
    font-weight: 400;
  }

  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const MobileSearch = styled(Search)`
  display: none;

  @media (max-width: ${breakpoints.md}) {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const ResultItems = styled.div<{
  $isOpen: boolean;
  $isMessageDisplayed: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 1.69rem;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  padding: 2rem;
  border-radius: 2rem;
  margin-top: 1.19rem;
  background-color: var(--whiteColor);
  color: var(--blackColor);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.19rem;
  transform: scaleY(0);
  transition: all 0.3s ease-out;
  transform-origin: top left;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: scaleY(1);
    `};

  ${({ $isMessageDisplayed }) =>
    $isMessageDisplayed &&
    css`
      align-items: center;
      padding: 3.12rem 2rem;
    `};
`;

export const Item = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 3.12rem;
  height: 3.12rem;
  border-radius: 0.31rem;
  margin-right: 1.06rem;
`;

export const TextContainer = styled.div`
  @media (max-width: ${breakpoints.md}) {
    max-width: 12.25rem;
    width: 100%;
  }
`;

export const Description = styled.p`
  color: var(--mediumDarkColor);
  font-size: 0.87rem;
  font-weight: 500;
  line-height: 1.06rem;
`;

export const Arrow = styled(SimpleArrow)`
  margin-left: auto;
  transform: rotate(90deg);

  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const Message = styled.p`
  width: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const MobileMessage = styled.p`
  display: none;

  @media (max-width: ${breakpoints.md}) {
    display: block;
  }
`;
