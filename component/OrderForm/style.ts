import styled from '@emotion/styled';
import Image from 'next/image';
import Button from '../../kit/Button';
import Input from '../../kit/Input';
import { downXl } from '../../styles/mediaQuery';

export const StyledForm = styled.form`
  background-color: var(--semilight-blue);
  display: grid;
  gap: 15px;

  ${downXl} {
    max-width: 375px;
    padding: 0 21px 30px;
    margin: 0 auto;
  }
`;

export const StyledInput = styled(Input)`
  font-family: 'Open Sans';
  font-weight: 400;
`;

export const ItemWrapper = styled.div`
  background-color: #f8faff;
  display: flex;
  align-items: center;
  border-radius: 3px;
`;

export const StyledImage = styled(Image)`
  height: 70px;
  ${downXl} {
    width: 140px;
    height: 88px;
  }
`;

export const ItemName = styled.p`
  margin-left: 15px;
  font-size: 17px;
  letter-spacing: -1px;
  color: var(--grey);
  ${downXl} {
    margin: 0 25px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 53px;
  width: 159px;
  background-color: var(--white);
  border-radius: 3px;
  justify-content: space-evenly;
`;

export const AmountInput = styled(Input)`
  width: 53px;
  height: 53px;
`;

export const StyledMinus = styled.svg`
  position: relative;
  top: -5px;
`;

export const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledText = styled.p`
  font-size: 15px;
  line-height: 1;
  color: var(--grey);
  margin-right: 35px;
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 9px;
  margin-top: 25px;

  ${downXl} {
    grid-template-columns: 1fr;
  }
`;

export const StyledButton = styled(Button)`
  padding: 19px 60px;
`;

export const CartLinkText = styled.div`
  margin-top: 30px;
  font-size: 17px;

  & a {
    position: relative;
    top: 1px;
    color: var(--blue);
    font-size: 22px;
    word-break: keep-all;
    display: inline-block;
  }
`;
