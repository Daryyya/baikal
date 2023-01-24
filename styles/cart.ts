import styled from '@emotion/styled';
import Button from '../kit/Button';
import Link from '../kit/Link';

export const Wrapper = styled.div`
  min-height: calc(100vh - var(--header-height));
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 97px;
  @media (max-width: 1200px) {
    min-height: calc(100vh - 64px);
    max-width: 375px;
    padding: 0;
  }
`;

export const EmptyWarning = styled.div`
  margin: 10vh auto;
  text-align: center;
  font-size: 30px;
  display: grid;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 36px;
  line-height: 1;
  letter-spacing: -1px;
  color: var(--grey);
  @media (max-width: 1200px) {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.2px;
    margin-bottom: 30px;
    padding: 0 20px;
  }
`;

export const ButtonsWrapper = styled.div`
  position: fixed;
  right: 97px;
  bottom: 50px;
  display: flex;
  gap: 12px;
  justify-content: space-between;
  @media (max-width: 1200px) {
    flex-direction: column;
    right: 50%;
    transform: translateX(50%);
  }
`;

export const StyledButton = styled(Button)`
  padding: 19px 50px;
`;

export const StyledLink = styled(Link)`
  padding: 19px 50px;
`;
