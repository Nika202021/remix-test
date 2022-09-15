import React, { useMemo } from "react";
import ArrowLeft from "~/svg-components/arrow-left";
import styled from "styled-components";
import { Link, useLoaderData } from "@remix-run/react";

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

const Pagination = () => {
  const {
    data: {
      data,
      pagination: { current_page },
    },
  } = useLoaderData();

  const pagination = useMemo(() => {
    const previousPage = current_page - 1 || 1;
    const nextPage = current_page + 1;

    const pagination = {
      previous: {
        disabled: current_page === 1,
        link: `/?page=${previousPage}`,
      },
      next: {
        disabled: data && !data.length, // or some empty state indicator
        link: `/?page=${nextPage}`,
      },
    };

    return pagination;
  }, [current_page]);

  return (
    <Container>
      <Link to={pagination.previous.link}>
        <ArrowLeft />
      </Link>
      <CurrentPage>{current_page}</CurrentPage>
      <Link to={pagination.next.link}>
        <ArrowRight />
      </Link>
    </Container>
  );
};

export default Pagination;
