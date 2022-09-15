import styled from "styled-components";
import breakpoints from "~/constans/breakpoints";
import wrapperStyle from "~/styles/wrapper-style";

export const Container = styled.div`
  ${wrapperStyle};
  margin: 2.38rem auto 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3.4rem 2.4rem;
  width: 100%;

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem 0;
  }
`;

export const Content = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 17.63rem;
  border-radius: 0.63rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0.5rem 0.8rem 0.8rem var(--mediumDarkColor));
  }

  @media (max-width: ${breakpoints.md}) {
    height: 31.63rem;

    &:hover {
      transform: scale(1.03);
    }
  }
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    var(--secondaryColor) 0%,
    rgba(0, 0, 0, 0) 0.01%,
    rgba(0, 0, 0, 0.69) 100%
  );
`;

export const Title = styled.h3`
  position: absolute;
  z-index: 2;
  bottom: 0.75rem;
  left: 0.75rem;
  color: var(--whiteColor);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.19rem;

  @media (max-width: ${breakpoints.md}) {
    font-size: 2rem;
    line-height: 2.4rem;
  }
`;

export interface PreviewItemType {
  mal_id: number;
  title: string;
  images: {
    webp: {
      image_url: string;
    };
  };
}

interface RecommendedListProps {
  items: PreviewItemType[];
}

const RecommendedList: React.FC<RecommendedListProps> = ({ items }) => {
  return (
    <Container>
      <Grid>
        {items.map((item) => (
          <Content key={item.mal_id}>
            <BackgroundOverlay />
            <img src={item.images.webp.image_url} alt="preview" />
            <Title>{item.title}</Title>
          </Content>
        ))}
      </Grid>
    </Container>
  );
};

export default RecommendedList;
