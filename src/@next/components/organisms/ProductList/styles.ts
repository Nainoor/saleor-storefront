import { media, styled } from "@styles";

export const List = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-gap: 0.5rem;

  ${media.largeScreen`
    grid-template-columns: 33% 33% 33%;
    grid-gap: 0.5rem;
  `}

  ${media.smallScreen`
    grid-template-columns: 100%;
    grid-gap: 0.5rem;
  `}
`;

export const Loader = styled.div`
  text-align: center;
  margin: 2.5rem 0;
`;
