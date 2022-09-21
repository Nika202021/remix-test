import React, { useState } from "react";
import SearchPopUp from "./search-pop-up";
import searchIcon from "~/images/search-icon.svg";
import styled from "styled-components";
import breakpoints from "~/constans/breakpoints";
import wrapperStyle from "~/styles/wrapper-style";

export const StyledHeader = styled.header`
  position: sticky;
  z-index: 5;
  top: 0;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--additionalColor);
  background-color: var(--whiteColor);
`;

export const Container = styled.div`
  ${wrapperStyle};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.62rem;

  @media (max-width: ${breakpoints.md}) {
    gap: 0.87rem;
  }
`;

export const Logo = styled.p`
  color: var(--blackColor);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.81rem;
`;

export const StyledInput = styled.input`
  max-width: 22.62rem;
  width: 100%;
  padding: 0.56rem 0 0.56rem 2.37rem;
  border: none;
  border-radius: 1.87rem;
  background: var(--lightColor) url(${searchIcon}) no-repeat 0.87rem center;
  font-family: var(--mainFont);
  font-size: 0.87rem;
  line-height: 1.06rem;
  outline: none;
  cursor: pointer;

  &::placeholder {
    color: grey;
  }

  @media (max-width: ${breakpoints.md}) {
    max-width: 16.62rem;
  }
`;

export const DateContainer = styled.p`
  color: var(--darkColor);
  font-size: 0.87rem;
  font-weight: 500;
  line-height: 1.06rem;
  white-space: nowrap;

  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const StyledDate = styled.span`
  padding-bottom: 3px;
  border-bottom: 1px solid var(--secondaryColor);
`;

export const DateMobileContainer = styled(DateContainer)`
  display: none;

  @media (max-width: ${breakpoints.md}) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

  const dateOrdinal = (day: string) => {
    const numberDay = +day;
    if (numberDay > 3 && numberDay < 21) return `${numberDay}th `;
    switch (numberDay % 10) {
      case 1:
        return `${numberDay}st `;
      case 2:
        return `${numberDay}nd `;
      case 3:
        return `${numberDay}rd `;
      default:
        return `${numberDay}th `;
    }
  };

  const today = new Date();
  const month = new Intl.DateTimeFormat("en", { month: "long" }).format(today);
  const shortMonth = new Intl.DateTimeFormat("en", { month: "short" }).format(
    today
  );
  const day = new Intl.DateTimeFormat("en", { day: "numeric" }).format(today);

  const displayedDay = dateOrdinal(day);

  const date = `${displayedDay} of ${month}`;
  const mobileDate = `${shortMonth} ${displayedDay}`;

  const handleClick = (e: React.MouseEvent<HTMLInputElement>): void => {
    setIsSearchActive(true);
    e?.currentTarget?.blur();
  };

  return (
    <>
      {isSearchActive && (
        <SearchPopUp isOpen={isSearchActive} setIsOpen={setIsSearchActive} />
      )}
      <StyledHeader>
        <Container>
          <Logo>Anime</Logo>
          <StyledInput
            type="text"
            placeholder="Search..."
            onClick={handleClick}
          />
          <DateContainer>
            Today is the <StyledDate>{date}</StyledDate>
          </DateContainer>
          <DateMobileContainer>{mobileDate}</DateMobileContainer>
        </Container>
      </StyledHeader>
    </>
  );
};

export default Header;
