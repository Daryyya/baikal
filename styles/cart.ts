import styled from "@emotion/styled";
import Button from "../kit/Button";
import Link from "../kit/Link";

export const Wrapper = styled.div`
  min-height: calc(100vh - var(--header-height));
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 97px;
`;

export const ButtonsWrapper = styled.div`
  position: fixed;
  right: 97px;
  bottom: 50px;
  display: flex;
  gap: 12px;
  justify-content: space-between;
`;

export const StyledButton = styled(Button)`
  padding: 19px 50px;
`;

export const StyledLink = styled(Link)`
  padding: 19px 50px;
`;

