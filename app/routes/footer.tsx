import React from "react";
import styled from "styled-components";
import wrapperStyle from "~/styles/wrapper-style";
import Button from "./button";
import SimpleArrow from "~/svg-components/simple-arrow";

export const StyledFooter = styled.footer`
  padding: 1.78rem 0 1.56rem;
  border-top: 1px solid var(--secondaryColor);
  background-color: var(--whiteColor);
`;

export const Container = styled.div`
  ${wrapperStyle};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const Content = styled.div`
  max-width: 17.31rem;
  width: 100%;
`;

export const Title = styled.h3`
  margin-bottom: 0.44rem;
  color: var(--blackColor);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.19rem;
`;

export const Description = styled.p`
  color: var(--mediumColor);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 0.94rem;
`;

const isBrowser = typeof window !== "undefined";

const Footer: React.FC = () => {
  const backToTop = (): void => {
    if (isBrowser) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <StyledFooter>
      <Container>
        <Content>
          <Title>Your name</Title>
          <Description>
            A few words about how you found Coinable and how did you feel about
            this task :)
          </Description>
        </Content>
        <Button handleClick={backToTop} direction="top">
          <SimpleArrow />
        </Button>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
