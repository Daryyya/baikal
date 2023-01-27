import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: fixed;
  top: 64px;
  /* left: 0; */
  width: 100%;
  height: calc(100vh - 64px);
  background-color: var(--semilight-blue);
  max-width: 375px;
  margin: 0 auto;
  padding: 60px 20px;
  @media (min-width: 1200px) {
    display: none;
  }
`;

export const DirectionP = styled.p`
  margin-bottom: 42px;
  font-size: 17;
  line-height: 1;
  letter-spacing: 0.2px;
  font-weight: 600;
  color: var(--grey);
  & svg {
    position: relative;
    bottom: 2px;
  }
`;

export const StyledP = styled.p`
  &:not(:last-of-type) {
    margin-bottom: 24px;
  }
  &:last-of-type {
    margin-bottom: 54px;
  }
  font-weight: 400;
  font-size: 17px;
  line-height: 1;
  letter-spacing: 0.2px;
  color: var(--grey);
  display: flex;
  justify-content: space-between;
`;
