import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1440px;
  min-height: calc(100vh - var(--header-height));
  padding: 0 97px;
  margin: 0 auto;
  display: flex;
`;

export const RightColumn = styled.div`
flex: 1 1 auto;`;

export const LeftColumn = styled.div`
flex: 1 1 auto;`;

export const Title = styled.h2`
  color: var(--grey);
  font-size: 36px;
  `;