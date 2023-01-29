import styled from '@emotion/styled';
import ContactForm from '../component/ContactForm';
import Button from '../kit/Button';
import MobilePopup from '../kit/MobilePopup';
import MobileHeaderContent from '../kit/MobileHeaderContent';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 547px 502px;
  justify-content: space-between;
  max-width: 1440px;
  padding: 0 97px;
  margin: 0 auto;
  height: calc(100% - 137px);
  @media (max-width: 1200px) {
    max-width: 375px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    padding: 20px;
    min-height: calc(100vh - 64px);
  }
`;

export const ContactColumn = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-size: 64px;
  line-height: 1;
  letter-spacing: -1px;
  font-weight: 400;
  color: var(--grey);
  margin-bottom: 70px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const StyledH2 = styled.h2`
  margin-bottom: 50px;
  font-size: 36px;
  line-height: 1;
  letter-spacing: -1px;
  color: var(--grey);
  @media (max-width: 1200px) {
    &:not(:last-of-type) {
      display: none;
    }
    text-align: center;
    font-weight: 300;
    font-size: 23px;
    margin: auto 0 24px;
  }
`;

export const Social = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 70px 50px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 50px);
    grid-template-rows: none;
    gap: 15px;
    margin: 0 auto;
  }
`;

export const StyledP = styled.p`
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;
  gap: 30px;
  color: var(--grey);
  font-size: 23px;
  line-height: 1;
  letter-spacing: 0.2px;
  @media (max-width: 1200px) {
    span {
      display: none;
    }
  }
`;

export const StyledPLink = styled.p`
  display: flex;
  width: 343px;
  justify-content: space-between;
  &:not(:last-of-type) {
    margin-bottom: 32px;
  }
  &:last-of-type {
    margin-bottom: 72px;
  }
  color: var(--grey);
  font-size: 23px;
  line-height: 1;
  letter-spacing: 0.2px;
  a {
    color: var(--grey);
  }
  @media (max-width: 1200px) {
    display: block;
    font-size: 28px;
    letter-spacing: -1px;
    text-align: center;
    &:first-of-type {
      margin-top: auto;
    }
    &:not(:last-of-type) {
      margin-bottom: 24px;
    }
    &:last-of-type {
      margin-bottom: 36px;
    }
    span {
      display: none;
    }
  }
`;

export const DesktopContactForm = styled(ContactForm)`
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const StyledMobileButton = styled(Button)`
  display: none;
  @media (max-width: 1200px) {
    display: block;
    margin: 0 auto 30px;
  }
`;

export const StyledMobilePopup = styled(MobilePopup)`
  background-color: var(--white);
`;

export const StyledMobileHeaderContent = styled(MobileHeaderContent)`
  background-color: var(--white);
  @media (max-width: 1200px) {
    width: 100vw;
    left: 0 !important;
    transform: none;
  }
`;
