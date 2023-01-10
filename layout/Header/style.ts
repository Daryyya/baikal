import styled from "@emotion/styled";
import Link from "../../kit/Link";

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: var(--semilight-blue);

  @media (max-width: 1200px) {
    height: 64px;
    margin: 0 auto;
  }
  @media (max-width: 375px) {
    & img {
      width: 130px;
    }
  }
`;

export const StyledLink = styled(Link)`
  @media (max-width: 375px) {
    padding: 12px 18px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 46px 97px;

  @media (max-width: 1200px) {
      padding: 20px 21px 0;
  }
`;