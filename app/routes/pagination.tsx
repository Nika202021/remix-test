import React, { useMemo } from "react";
import ArrowLeft from "~/svg-components/arrow-left";
import styled from "styled-components";
import { Link } from "@remix-run/react";
import type { PreviewItemType } from "./recomended-list";
import Button from "./button";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 2.37rem auto 2.12rem;
`;

export const ArrowRight = styled(ArrowLeft)`
  transform: rotate(180deg);
`;

export const CurrentPage = styled.p`
  padding: 0 0.75rem;
  color: var(--blackColor);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.19rem;
`;

interface PaginationProps {
  currentPage: number;
  hasNextPage: boolean;
  posts: PreviewItemType[];
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  posts,
  hasNextPage,
}) => {
  const pagination = useMemo(() => {
    const previousPage = currentPage - 1 || 1;
    const nextPage = currentPage + 1;

    const pagination = {
      previous: {
        disabled: currentPage === 1,
        link: `/?page=${previousPage}`,
      },
      next: {
        disabled: posts && !posts.length, // or some empty state indicator
        link: `/?page=${nextPage}`,
      },
    };

    return pagination;
  }, [currentPage]);

  return (
    <Container>
      <Link to={pagination.previous.link}>
        <Button
          handleClick={() => console.log(currentPage)}
          isDisabled={currentPage === 1}
          direction="left"
        >
          <ArrowLeft />
        </Button>
      </Link>
      <CurrentPage>{currentPage}</CurrentPage>
      <Link to={pagination.next.link}>
        <Button
          handleClick={() => console.log(currentPage)}
          isDisabled={!hasNextPage}
          direction="left"
        >
          <ArrowRight />
        </Button>
      </Link>
    </Container>
  );
};

export default Pagination;
