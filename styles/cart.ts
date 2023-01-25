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
  display: flex;
  gap: 12px;
  justify-content: end;
  text-align: center;
  margin-bottom: 48px;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledButton = styled(Button)`
  padding: 19px 50px;
`;

export const StyledLink = styled(Link)`
  padding: 19px 50px;
`;

export const StyledP = styled.p`
  color: var(--grey);
  font-size: 23px;
  line-height: 1;
  letter-spacing: 0.2px;
  text-align: end;
  &:not(:last-of-type) {
    margin-bottom: 28px;
  }
  &:last-of-type {
    margin-bottom: 40px;
  }
  & span {
    display: inline-block;
    min-width: 210px;
  }
`;

export const Sum = styled.p`
  font-weight: 600;
  font-size: 31px;
  line-height: 1;
  letter-spacing: 0.2px;
  color: var(--grey);
  margin-bottom: 48px;
  text-align: end;
  & span {
    display: inline-block;
    min-width: 210px;
  }
`;

export const BottomLinksWrapper = styled(ButtonsWrapper)`
  display: grid;
  grid-template-columns: 233px 299px;
`;

export const StyledSaveLink = styled(Button)`
  display: grid;
  padding-right: 18px;
  padding-left: 20px;
  grid-auto-flow: column;
  align-items: center;
  & svg {
    position: relative;
    left: 8px;
    top: 1px;
  }
`;