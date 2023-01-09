import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1440px;
  min-height: calc(100vh - var(--header-height));
  padding: 0 97px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 630fr 497fr;
  gap: 119px;
  justify-content: space-between;
`;

export const RightColumn = styled.div`

`;

export const LeftColumn = styled.div`
`;

export const Title = styled.h2`
  letter-spacing: -1px;
  color: var(--grey);
  font-size: 36px;
  margin-bottom: 42px;
  `;